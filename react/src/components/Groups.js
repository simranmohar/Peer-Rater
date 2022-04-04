import * as React from 'react';
import {styled} from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Tooltip
} from "@mui/material";
import avatar1 from '../img/avatars/avatar1.png'
import avatar2 from '../img/avatars/avatar2.png'
import avatar3 from '../img/avatars/avatar3.png'
import avatar4 from '../img/avatars/avatar4.png'
import NewGroup from "./NewGroup";
import {useEffect, useState} from "react";
import Paper from "@mui/material/Paper";
import {Link} from "react-router-dom";
import SurveyPage from "../pages/SurveyPage";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Add, ExitToApp} from "@mui/icons-material";
import Button from "@mui/material/Button";
import api from '../services/api';
import auth from "../services/auth";


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
    ({theme}) => `
  // table {
  //   font-family: Roboto, sans-serif;
  //   font-size: 0.875rem;
  //   border-collapse: collapse;
  //   width: 100%;
  // }
  //
  // td,
  // th {
  //   border: 1px solid ${grey[800]};
  //   text-align: left;
  //   padding: 6px;
  // }
  //
  // th {
  //   background-color: ${grey[400]};
  // }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
    ({theme}) => `
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
    const [exitUpdateNeeded, setExitUpdateNeeded] = React.useState(false);
    const [rows, setNewRows] = useState('')
    const [updateNeeded, setUpdateNeeded] = useState(false)

    function handleClick(item) {
        api.exitPeerGroup(item.id, auth.getCurrentUserFull().id).then(() => {
            setExitUpdateNeeded(true)
        })
    }

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
        return () => {
            // Clean up the subscription
            setUpdateNeeded(false);
            setExitUpdateNeeded(false)
        };
    }, [updateNeeded, exitUpdateNeeded]);

    let row = Object.values(rows);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const getNewSurvey = (props) => {
        api.addSurvey(props)
    }

    return (
        <Root sx={{width: '100%'}}>
            <NewGroup newGroupAdded={UpdateNeeded}/>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2}}>
                    <TableContainer>
                        <Table aria-label="custom pagination table">
                            <TableHead sx={{fontWeight: 'bold'}}>
                                <TableRow>
                                    <TableCell>Group</TableCell>
                                    <TableCell>Participants</TableCell>
                                    <TableCell>Surveys</TableCell>
                                    <TableCell>Options</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                        ? row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : row
                                ).map((row, index) => (
                                    <TableRow key={"TableRow"}>
                                        <TableCell>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{
                                                        backgroundColor: "#90caf9",
                                                        color: "black",
                                                        fontSize: "90%"
                                                    }} key={"avatar" + index}>{`#${row.id}`}</Avatar>
                                                }
                                                title={row.description}
                                            />

                                        </TableCell>
                                        <TableCell>
                                            <CardHeader
                                                avatar={
                                                    <AvatarGroup total={row.users.length} key={"AvatarGroup"}>
                                                        {row.users.map(function (name, indexInner) {
                                                            return (
                                                                <Tooltip title={name.name} key={index + "avatar" + indexInner}>
                                                                    <Avatar
                                                                        key={index+"avatar"}>{name.name.charAt(0).toUpperCase()}</Avatar>
                                                                </Tooltip>)
                                                        })}
                                                    </AvatarGroup>
                                                }
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <SurveyPage group={row}/>
                                        </TableCell>
                                        <TableCell style={{width: "15em", minWidth: "15em"}}>
                                            <Tooltip title="Add Survey" key="AddSurveyToolTip">
                                                <Button onClick={() => getNewSurvey(row.id)}><Add/>
                                                </Button>
                                            </Tooltip>
                                            <Tooltip title="Exit Group" key="ExitGroupToolTip">
                                                <Button color="error" onClick={() => {
                                                    handleClick(row)
                                                }}><ExitToApp/></Button>
                                            </Tooltip>
                                        </TableCell>

                                    </TableRow>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{height: 53 * emptyRows}}>
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />

                </Paper>
            </Box>

        </Root>
    );
}