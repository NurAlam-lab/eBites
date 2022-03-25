import React from 'react';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WhyeBitesData = (props) => {
    const { title, description } = props.service;
    return (
        <Grid item xs={12} sm={6} md={4} >
            <CardContent>

                <Typography style={{ textAlign: 'left' }} sx={{ mt: 5 }} variant="h3" component="div">
                    {title}
                </Typography>
                <Typography style={{ textAlign: 'left' }} sx={{ color: '#B0ADAC', mt: 1 }} variant="h3" component="div">
                    {description}
                </Typography>

            </CardContent>

        </Grid>
    );
};

export default WhyeBitesData;