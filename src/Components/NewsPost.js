import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { Grid } from '@material-ui/core';
import './NewsPost.css'

const NewsPost = ({news}) => {
    const {title, abstract, url, multimedia} = news;
    const classes = useStyles();

  return (
    <Grid item md={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Latest News"
          height="140"
          image={multimedia[4].url}
          title="Latest News"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
            <a className="learnMoreBtn" href={url}>Learn More</a> 
      </CardActions>
    </Card>
    </Grid>
  );
};

export default NewsPost;