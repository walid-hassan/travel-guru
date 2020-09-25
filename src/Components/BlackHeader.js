import { Box, Container, Grid, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { travelContext } from '../App';
import BlackLogo from '../Image/LogoBlack.png';
import './BlackHeader.css';
import * as firebase from "firebase/app";
import "firebase/auth";

const BlackHeader = () => {
    const {signInUser} = useContext(travelContext)
    const [user, setUser] = signInUser;
    const logOut = () => {
        firebase.auth().signOut().then(function() {
            const logOutUser = {
                name: "",
                statue: false,
                loginMessage: "Successfully logged out",
              };    
            setUser(logOutUser);
          }).catch(function(error) {
            console.log(error);
          });
    }
    return (
        <Box className="top-bar">
            <Container maxWidth="lg">
                <Grid className="header" container>
                    <Grid item className="logo" sm={6}  md={3} lg={3}>
                        <img src={BlackLogo} alt=""/>
                    </Grid>
                    <Grid item className="blackSearch" sm={6} md={3} lg={3}>
                        <input type="text" placeholder="Search your destination"/>
                    </Grid>
                    <Grid item className="mainMenuLink" sm={12} md={6} lg={6}>
                        <Link style={{ textDecoration: 'none' }} to="/home"><span>Home</span></Link>
                        <Link style={{ textDecoration: 'none' }} to="/news"><span>News</span></Link>
                        <Link style={{ textDecoration: 'none' }} to="/destination"><span>Destination</span></Link>
                        <Link style={{ textDecoration: 'none' }} to="/contact"><span>Contact</span></Link>
                        {
                            user.statue ? 
                            <>
                                <span className="userName">{user.name}</span>
                                <button onClick={logOut} className="logOutBtn">Log Out</button>
                            </>
                            : <Link style={{ textDecoration: 'none' }} to="/login"><span className="menuLogin">Login</span></Link>
                        }
                    </Grid>
                </Grid>
           </Container>
        </Box>
    );
};

export default BlackHeader;