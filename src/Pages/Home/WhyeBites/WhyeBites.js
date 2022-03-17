import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import WhyeBitesData from '../WhyeBitesData/WhyeBitesData';

const WhyeBite = [
    {
        title: 'Support Local Cooks',
        description: 'You have already tried your favourite restaurants. Why not give your next door home-cook a chance?'
    },
    {
        title: 'Explore New Cuisines',
        description: 'A plethora of new cuisines. Explore new tastes from around the world.'
    },
    {
        title: 'Inspected and Healthy',
        description: 'We inspect the food and kitchen environment so that you can enjoy exotic tastes, safely.'
    }
]
const WhyeBites = () => {
    return (
        <Container>
            <Typography sx={{ mt: 5 }} variant="h4" component="div">
                Why Try eBites
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }}>
                    {
                        WhyeBite.map(service => <WhyeBitesData
                            key={service.title}
                            service={service}>

                        </WhyeBitesData>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default WhyeBites;