import { Box, Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { travelContext } from '../App';
import BlackHeader from './BlackHeader';
import fakeData from '../hotels';
import Hotels from './Hotels';
import './FindHotels.css'

const FindHotels = () => {  
    const {visite} = useContext(travelContext)
    const [destination, setDestination] = visite;
    const [hotelList, setHotelList] = useState([]);
    useEffect(() => {
        const availableHotels = fakeData.filter(hotel => hotel.place === destination.place);
        setHotelList(availableHotels);
    }, [])
    const fromDay = destination.from.getDate();
    const fromMonth = destination.from.getMonth();
    const toDay = destination.to.getDate();
    const toMonth = destination.to.getMonth();

    return (
        <Container maxWidth="lg">
            <BlackHeader/>
            <hr/>
            <Grid container>
                <Grid item md={6}>
                <h1>Stay in {destination.place}</h1>
                <p style={{
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#b74040"
                }}>{`From ${fromDay}/${fromMonth} to ${toDay}/${toMonth}`}</p>
                <Box>
                    {
                            hotelList.map( hotel => <Hotels key={hotel.price} hotel={hotel} />)
                    }
                </Box>
                </Grid>
                <Grid className="hotelMap" item md={6}>
                {
                    destination.place === "Sajek" &&
                    <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14648.110088436708!2d92.2858805!3d23.3872216!3m2!1i1024!2i768!4f13.1!2m1!1shotels%20in%20Sajek!5e0!3m2!1sen!2sbd!4v1600781558015!5m2!1sen!2sbd" width="450" height="600"  style={{border:"0px", borderRadius:"10px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                }
                {
                    destination.place === "Cox's Bazar" &&
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12492.990150011648!2d91.97422250414216!3d21.421846657721797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotels%20in%20Cox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1600782292978!5m2!1sen!2sbd" width="450" height="600"  style={{border:"0px", borderRadius:"10px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                }
                {
                    destination.place === "Sreemangal" &&
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d82261.97132058519!2d91.71314926898688!3d24.329074633587872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotels%20in%20Sreemangal!5e0!3m2!1sen!2sbd!4v1600782534775!5m2!1sen!2sbd" width="450" height="600"  style={{border:"0px", borderRadius:"10px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                }
                {
                    destination.place === "Sundarbans" &&
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d472675.2629149352!2d88.85205019996476!3d22.248595480729218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotels%20in%20Sundarbans!5e0!3m2!1sen!2sbd!4v1600782599356!5m2!1sen!2sbd" width="450" height="600"  style={{border:"0px", borderRadius:"10px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                }
                </Grid>
            </Grid>
        </Container>
    );
};

export default FindHotels;