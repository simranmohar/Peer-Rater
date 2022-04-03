import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {CardHeader} from "@mui/material";
import avatar1 from '../img/avatars/avatar1.png'
import avatar2 from '../img/avatars/avatar2.png'
import avatar3 from '../img/avatars/avatar3.png'
import avatar4 from '../img/avatars/avatar4.png'
import NewGroup from "./NewGroup";
import {useEffect, useState} from "react";
import Paper from "@mui/material/Paper";
import {Link} from "react-router-dom";
import SurveyPage from "../pages/SurveyPage";



const blue = {
    200: '#A5D8FF',
    400: '#3399FF',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const Root = styled('div')(
    ({ theme }) => `
  table {
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${grey[800]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${grey[400]};
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
    ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${grey[800]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${grey[200]};
    }
    &:focus {
      outline: 1px solid ${blue[800]};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${grey[800]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${grey[50]};
    }
    &:focus {
      outline: 1px solid ${blue[200]};
    }
  }
  `,
);


export default function Groups() {

    const [rows, setNewRows] = useState('')
    const [updateNeeded, setUpdateNeeded] = useState(false)

    function UpdateNeeded() {
        setUpdateNeeded(true);
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        var bearer = 'Bearer ' + user.access_token;
        const fetchData = async () => {
            const result = await fetch(`http://praterlaravel.azurewebsites.net/api/peer-groups/`, {
                method: 'get',
                headers: {
                    'Authorization': bearer,
                    'Content-Type': 'application/json'
                }
        });
            const body = await result.json();
            setNewRows(body);
        }
        fetchData();
    }, [updateNeeded]);

    let row = Object.values(rows);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - row.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, event.value));
        setPage(0);
    };

    return (
        <Root sx={{ width: '100%'}}>
            <NewGroup newGroupAdded={UpdateNeeded}/>
            <Paper elevation={7} style={{marginTop:20, padding: 15}}>
            <table aria-label="custom pagination table">
                <thead>
                <tr>
                    <th>Group</th>
                    <th>Participants</th>
                    <th>Surveys</th>
                    <th>Final Evaluation</th>
                </tr>
                </thead>
                <tbody>
                {(rowsPerPage > 0
                        ? row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : row
                ).map((row, index) => (
                    <tr key={index}>
                        <td style={{ width: 120 }} align="right">
                            <CardHeader
                                avatar={
                                    <Avatar alt={row.group} src={avatar4}/>
                                }
                                title={row.description}
                                />

                        </td>
                        <td style={{ width: 120 }} align="right">
                            <CardHeader
                                avatar={
                                    <AvatarGroup total={row.users.length}>
                                        <Avatar alt="Default" src={avatar1} />
                                        <Avatar alt="Default" src={avatar2} />
                                        <Avatar alt="Default" src={avatar3} />
                                        <Avatar alt="Default" src={avatar4} />
                                    </AvatarGroup>
                                }
                            />
                        </td>
                        <td style={{width: "200px", textAlign: "left"}}>
                            <SurveyPage group={row}/>
                        </td>
                        <td align="left" style={{width: "200px", textAlign: "left"}}>
                            {100}
                        </td>

                    </tr>
                ))}

                {emptyRows > 0 && (
                    <tr style={{ height: 41 * emptyRows }}>
                        <td colSpan={3} />
                    </tr>
                )}
                </tbody>
                <tfoot>
                <tr>
                    <CustomTablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        componentsProps={{
                            select: {
                                'aria-label': 'rows per page',
                            },
                            actions: {
                                showFirstButton: true,
                                showLastButton: true,
                            },
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </tr>
                </tfoot>
            </table>
            </Paper>
        </Root>
    );
}