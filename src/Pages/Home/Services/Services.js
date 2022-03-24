import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Cooks from '../../../assets/step-1.jpg';
import delivery from '../../../assets/step-2.jpg';
import payment from '../../../assets/step-3.jpg';
import GuaranteedTaste from '../../../assets/step-4.jpg';
import Service from '../Service/Service';

const ourServices = [
    {
        name: '1500+ Cooks',
        img: Cooks
    },
    {
        name: 'Free & Fast Delivary',
        img: delivery
    },
    {
        name: 'Easy Payment Methods',
        img: payment
    },
    {
        name: 'Guaranteed Taste',
        img: GuaranteedTaste
    }
]

const Services = () => {
    return (
        <Container>
            <Typography sx={{ m: 5, color: '#000000' }} variant="h2" component="div">
                Services We Provide
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        ourServices.map(service => <Service
                            key={service.name}
                            service={service}>

                        </Service>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;