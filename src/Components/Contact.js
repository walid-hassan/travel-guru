import { Box, Button, Container, Grid, TextField } from '@material-ui/core';
import React from 'react';
import './Contact.css'
import Header from './Header';

const Contact = () => {
    return (
        <div className="contactPage">
            <Header/>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={3}> 
                    </Grid>
                    <Grid style={{paddingTop:"40px"}} item md={6}> 
                        <Box className="contactForm">
                            <h3>Contact Us</h3>
                            <TextField fullWidth="true" variant="outlined" type="text" name="name" label="Your name"/>
                            <TextField fullWidth="true" variant="outlined" type="email" name="email" label="Your email"/>
                            <TextField fullWidth="true" variant="outlined" id="standard-multiline-static" label="Write your message" multiline rows={4}/>
                            <Button fullWidth="true" color="primary" variant="contained">Send</Button> 
                        </Box>
                    </Grid>
                    <Grid item md={3}> 
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;