import React from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={3} >
            <CardContent>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <Typography variant="h5" component="div">
                    {name}
                </Typography>

            </CardContent>

        </Grid>
    );
};

export default Service;