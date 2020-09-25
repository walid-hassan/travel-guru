import { Box, Button, Container, Grid, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../fakeData'
import Header from './Header';
import './DestinationForm.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { set } from 'date-fns/esm';
import { travelContext } from '../App';

const DestinationForm = () => {
    const {visite} = useContext(travelContext)
    const [destination, setDestination] = visite;
    const { placeid } = useParams();
    const [place, setPlace] = useState({}); 
    useEffect( () => {
        const selected = fakeData.find( place => place.id == placeid);
        setPlace(selected);
    }, [])
    const [booking, setBooking] = useState({});
    const [fromDate, setFromDate] = React.useState(new Date());
    const [toDate, setTomDate] = React.useState(new Date());

    const handleDateChangeFrom = (date) => {
        setFromDate(date);
    };

    const handleDateChangeTo = (date) => {
        setTomDate(date);
    };
   const submitInputs = e => {
        const place = {...booking};
        place[e.target.name] = e.target.value;
        setBooking(place);
   }
   const history = useHistory();
   const fromSubmit = (e) => {
       const placeDetails = {...booking};
       placeDetails.from = fromDate;
       placeDetails.to = toDate;
       placeDetails.place = place.name;
       setDestination(placeDetails);
       history.push("/find-hotels");
       e.preventDefault();
       console.log("sum :", destination);
   }

    return (
        <Box className="destinationFormPage"> 
           <Header/>
            <Container maxWidth="lg">
                <Grid style={{height:"600px"}} container>
                    <Grid className="selectedPlace" item md={5}>
                        <Box className="placeInfo">
                            <h1 className="selectedPlaceTitle">{place && place.name}</h1>
                            <p>{ place && place.des}</p>
                        </Box>
                    </Grid>
                    <Grid className="destinationFormSection" style={{height:"100%"}} item md={7} >
                        <Box className="destinationForm">

                            <TextField onBlur={submitInputs} name="origin" className="inputFiledMargin" fullWidth="true" label="Origin" type="text" variant="outlined" required="true"/>
                            <TextField onBlur={submitInputs} name="destination"  className="inputFiledMargin" fullWidth="true" label="Destination" type="text" variant="outlined" required="true"/>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container >                          
                                    <KeyboardDatePicker
                                    required="true"
                                    name="from"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="From"
                                    format="MM/dd/yyyy"
                                    value={fromDate}
                                    onChange ={handleDateChangeFrom}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />
                                    <KeyboardDatePicker
                                    required="true"
                                    name="to"
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="To"
                                    format="MM/dd/yyyy"
                                    value={toDate}
                                    onChange={handleDateChangeTo}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    />                          
                                </Grid>
                            </MuiPickersUtilsProvider>
                            <Button onClick={fromSubmit} id="bookingBtn">Start Booking</Button>
                        </Box>
                    </Grid>   
                </Grid>    
            </Container>     
        </Box>
    );
};

export default DestinationForm;