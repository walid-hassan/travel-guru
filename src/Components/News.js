import { Box, Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BlackHeader from './BlackHeader';
import NewsPost from './NewsPost';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const api = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=vQpGFDnjv0oElgBoAiABbkCDXDcP74ZJ";
        fetch (api)
        .then(res => res.json())
        .then(data => setNews(data.results))
    }, [])
    console.log(news);
    return (
        <div>
            <div>
                <BlackHeader/>
                <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {
                       news && news.map(news => <NewsPost news={news}/>)
                    }
                </Grid>
                </Container>
            </div>
        </div>
    );
};

export default News;