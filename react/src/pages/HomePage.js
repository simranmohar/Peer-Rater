import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import ActiveLastBreadcrumb from "../components/ActiveLastBreadcrumb";
import {Container, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

function HomePage({page, title}) {
    return (
        <>
            <Box sx={{flex: 1}} >
                <Grid container spacing={0} >
                    <Grid item xs="2" zeroMinWidth>
                        <Box item style={{minHeight: '100vh', overflow: "hidden"}}><SideBar/></Box>
                    </Grid>
                    <Grid item zeroMinWidth style={{width: "82vw"}}>
                        <Stack>
                            <NavBar/>
                            <Container maxWidth="false">
                                <ActiveLastBreadcrumb/>
                                <Typography variant="h4" sx={{mt: 1}}>{title}</Typography>
                            <Paper elevation={12} sx={{mt: 1, padding: 3, marginBottom: "20px"}}>{page}</Paper>
                            <Container><Footer/></Container>
                            </Container>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}


export default HomePage;
//
// const HomePage = ({page, title}) => (
//     <>
//         <div className="container-fluid">
//             ...
//         </div>
//         <div id="wrapper">
//             <SideBar />
//             <div id="content-wrapper" className="d-flex flex-column">
//                 <NavBar />
//                 <div className="container" id="main-container">
//
//                 <React.Fragment>
//         <div className="">
//             <AiFillHome />
//             <h1 className="display-4">Home</h1>
//         </div>
//                     {page}
//         {/*<div class="container">*/}
//         {/*    <div class="row">*/}
//         {/*        <div class="col-sm-3">*/}
//         {/*            <div class="card">*/}
//         {/*                <img src={require('../img/blank-profile-picture.png')} />*/}
//         {/*                <h4><b>COMP 3975</b></h4>*/}
//         {/*                <h4><b>John Doe</b></h4>*/}
//         {/*                <p>Architect & Engineer</p>*/}
//         {/*            </div>*/}
//         {/*        </div>*/}
//         {/*        <div class="col-sm-3">*/}
//         {/*            <div class="card">*/}
//         {/*                <img src={require('../img/blank-profile-picture.png')} />*/}
//         {/*                <h4><b>COMP 3717</b></h4>*/}
//         {/*                <h4><b>John Doe2</b></h4>*/}
//         {/*                <p>Architect & Engineer</p>*/}
//         {/*            </div>*/}
//         {/*        </div>*/}
//         {/*        <div class="col-sm-3">*/}
//         {/*            <div class="card">*/}
//         {/*                <img src={require('../img/blank-profile-picture.png')} />*/}
//         {/*                <h4><b>COMP 3522</b></h4>*/}
//         {/*                <h4><b>John Doe3</b></h4>*/}
//         {/*                <p>Architect & Engineer</p>*/}
//         {/*            </div>*/}
//         {/*        </div>*/}
//         {/*    </div>*/}
//         {/*</div>*/}
//     </React.Fragment>
//                 </div>
//                 <Footer />
//             </div>
//         </div>
//     </>
// );
//
// export default HomePage;