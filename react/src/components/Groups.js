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

function createData(group, participants, finalEvaluation) {
    return {group, participants, finalEvaluation };
}

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
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-size: 1.0rem;
    width: 100%;
  }

  td,
  th {
    text-align: left;
    padding-left: 10px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
    height: 40px
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
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
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
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  `,
);

export default function Groups() {
    const [rows, setNewRows] = useState('')
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
    }, []);

    let row = Object.values(rows);
    console.log(row);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - row.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Root sx={{ width: '100%'}}>
            <NewGroup/>
            <table aria-label="custom pagination table">
                <thead>
                <tr>
                    <th>Group</th>
                    <th>Participants</th>
                    <th>Final Evaluation</th>
                </tr>
                </thead>
                <tbody>
                {(rowsPerPage > 0
                        ? row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : row
                ).map((row) => (
                    <tr key={row.group}>
                        <td>
                            <CardHeader
                                avatar={
                                    <Avatar alt={row.group} src={avatar4}/>
                                }
                                title={row.description}
                                />

                        </td>
                        <td align="left" style={{width: "200px", textAlign: "left"}}>

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
        </Root>
    );
}