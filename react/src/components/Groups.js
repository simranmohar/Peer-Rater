import * as React from 'react';
import {useEffect, useState} from 'react';
import {styled} from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AddTaskIcon from '@mui/icons-material/AddTask';

import {
    CardHeader,
    Fade,
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Tooltip
} from "@mui/material";
import NewGroup from "./NewGroup";
import Paper from "@mui/material/Paper";
import {Link} from "react-router-dom";
import SurveyPage from "../pages/SurveyPage";
import Box from "@mui/material/Box";
import {Add, ExitToApp, PersonAddAlt} from "@mui/icons-material";
import Button from "@mui/material/Button";
import api from '../services/api';
import auth from "../services/auth";
import authService from "../services/auth";
import {LoadingButton} from "@mui/lab";


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
    const [loading, setLoading] = React.useState(true);
    const [barLoading, setBarLoading] = React.useState(true);
    const [buttonLoading, setButtonLoading] = React.useState('');

    function handleClick(item, button) {
        setButtonLoading(button)
        api.exitPeerGroup(item.id, auth.getCurrentUserFull().id).then(() => {
            setExitUpdateNeeded(true)
            setBarLoading(true);
        })
    }

    function UpdateNeeded() {
        setBarLoading(true);
        setUpdateNeeded(true);
    }

    useEffect(() => {
        api.getPeerGroups().then((response) => {
            console.log(response.data);
            setNewRows(response.data);
            setLoading(false);
            setBarLoading(false);
            setButtonLoading('');
        })
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

    const instructor = authService.getCurrentUserFull().isInstructor;


    return (
        <Root sx={{width: '100%'}}>
            <NewGroup newGroupAdded={UpdateNeeded}/>
            <Box sx={{width: '100%'}}>
                <Paper sx={{width: '100%', mb: 2}}>
                    <TableContainer>
                        <Fade
                            in={barLoading}
                            unmountOnExit
                        >
                            <LinearProgress/>
                        </Fade>
                        <Table aria-label="custom pagination table">
                            <TableHead sx={{fontWeight: 'bold'}}>
                                <TableRow>
                                    <TableCell>Group</TableCell>
                                    <TableCell>Participants</TableCell>
                                    <TableCell>Surveys</TableCell>
                                    <TableCell>Options</TableCell>

                                </TableRow>
                            </TableHead>

                            <Fade in={!loading}>
                                <TableBody>
                                    {(rowsPerPage > 0
                                            ? row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            : row
                                    ).map((row, index) => (
                                        <TableRow sx={{height:"201.78px"}}key={index}>
                                            <TableCell style={{width: "15em", minWidth: "15em"}}>
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
                                            <TableCell style={{width: "15em", minWidth: "15em"}}>
                                                <CardHeader
                                                    avatar={
                                                        <AvatarGroup total={row.users.length} key={"AvatarGroup"}>
                                                            {row.users.map(function (name, indexInner) {
                                                                return (
                                                                    <Tooltip title={name.name}
                                                                             key={index + "avatar" + indexInner}>
                                                                        <Avatar
                                                                            key={index + "avatar"}>{name.name.charAt(0).toUpperCase()}</Avatar>
                                                                    </Tooltip>)
                                                            })}
                                                        </AvatarGroup>
                                                    }
                                                />
                                            </TableCell>
                                            <TableCell sx={{overflowX: "auto", maxWidth: "30em"}}>
                                                <SurveyPage group={row}/>
                                            </TableCell>
                                            <TableCell style={{width: "15em", minWidth: instructor === 1 ? "20em" : "10em"}}>
                                                {instructor === 1 ? <>
                                                <Tooltip title="Add Survey" key="AddSurveyToolTip">
                                                    <Button component={Link} to={`/newsurvey`}
                                                            state={{peer_group_id: row.id}}>
                                                        <Add/>
                                                    </Button>
                                                </Tooltip>
                                                        <Tooltip title="Add Users" key="AddUsersList">
                                                            <Button component={Link}  to={`/addUsersToList`}
                                                                    state={{peer_group_id: row.id}}>
                                                                <PersonAddAlt/>
                                                            </Button>
                                                        </Tooltip>

                                            </> :
                                            <>
                                            </>
                                            }

                                                        <Tooltip title="Exit Group" key="ExitGroupToolTip">
                                                            <LoadingButton loading={buttonLoading === index + "button"}
                                                                           key={index + "button"} color="error" onClick={() => {
                                                                handleClick(row, index + "button")
                                                            }}><ExitToApp/></LoadingButton>
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
                            </Fade>
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