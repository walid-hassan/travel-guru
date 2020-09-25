import { Box, Container } from '@material-ui/core';
import React from 'react';
import error from '../Image/404.gif'
import BlackHeader from './BlackHeader';

const Error = () => {
    return (
        <>
            <BlackHeader/>
            <Container maxWidth="lg">
                <Box style={{textAlign:"center"}}>        
                    <img src={error} alt=""/>
                    <h2>Oops page not found</h2>
                </Box>
            </Container>
        </>
    );
};

export default Error;