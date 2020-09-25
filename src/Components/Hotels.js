import { Grid } from '@material-ui/core';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './Hotels.css'
const Hotels = ({hotel}) => {
    
    const {name, pic, price, room, des, sum, rating} = hotel;
    console.log(hotel);
    return (
        <Grid className="allhotel" container>
            <Grid item md={6}>
                <img style={{maxWidth:"95%", margin:"5px"}} src={pic} alt=""/>
            </Grid>
            <Grid className="hotels" item md={6}>
                <h4>{name}</h4>
                <p>{room}</p>
                <p>{des}</p>
                <p>Cancellation fexibility availiable</p>
                <span className="rating"><StarIcon value={rating}/>{rating} ({sum})</span>
                <span className="price">$ {price} per night</span>
            </Grid>
        </Grid>
    );
};

export default Hotels;