import { Box, Button, Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import "./Home.css"
import Sajak from '../Image/Sajek.png';
import Shreemongol from '../Image/Sreemongol.png';
import Sunderbans from '../Image/sundorbon.png';
import fakeData from "../fakeData";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Home = () => {
    const [place, setPlace] = useState({
        id: 4,
        name: "Cox's Bazar",
        des: "Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..."
    });
    const [id, setId] = useState(4);
    const [autoSlide, setAutoSlide] = useState(true);
    const selectPlace = (id) => {
            const selected = fakeData.find( place => place.id === id);
            setPlace(selected);
            setAutoSlide(false);
            setId(id)
    }
    
    useEffect( () => {
        if(id > 0 && id <= 4){
            const selected = fakeData.find( place => place.id === id);
            setAutoSlide(false);
            setPlace(selected);
        }
         else{
            setAutoSlide(false);
             setId(1);
         }   
    }, [id])

    return (
        <Box className="home">
           <Header/>
            <Container maxWidth="lg">
                <Grid style={{height:"600px"}} container>
                    <Grid className="selectedPlace" item md={5}>
                        <Box className="placeInfo">
                            <h1 className="selectedPlaceTitle">{place.name}</h1>
                            <p>{place.des}`</p>
                            <Link style={{ textDecoration: 'none' }} to={`/destination/form/${place.id}`}>
                                <Button endIcon={<ArrowForwardIcon/>} variant="contained">Booking</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid style={{height:"100%"}} item md={7} >
                        <Grid style={{height:"100%"}} container>
                            <Grid className="sliderImg" item md={4}>
                                <img className={place.id === 1 && 'active'} onClick={() => selectPlace(1)} src={Sajak} alt=""/>
                                <h1 className="imgTitle">Sajak</h1>
                            </Grid>
                            <Grid className="sliderImg" item md={4}>
                                <img className={place.id === 2 && 'active'} onClick={() => selectPlace(2)} src={Shreemongol} alt=""/>
                                <h1 className="imgTitle">Shreemongol</h1>
                            </Grid>
                            <Grid className="sliderImg" item md={4}>
                                <img className={place.id === 3 && 'active'} onClick={() => selectPlace(3)} src={Sunderbans} alt=""/>
                                <h1 className="imgTitle">Sunderbans</h1>
                            </Grid>
                        </Grid>
                    </Grid>   
                </Grid>
                <Box className="backForwardBtn">
                    <ArrowBackIosIcon onClick={() => setId(id - 1)}  className="sliderbtn"/> 
                    <ArrowForwardIosIcon onClick={() => setId(id + 1)}  className="sliderbtn"/>
                </Box>    
            </Container>     
        </Box>
    );
};

export default Home;