import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import cheaf from '../../../assets/professional-chef-prepares-shrimps-greens-cooking-seafood-healthy-vegetarian-food-dark-background-horizonta-131215090.jpg'

const cheafImg = {
    background: `url(${cheaf})`,
    height: '500px',
    width: 'auto',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover"
}
const joinUs = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 550
}
const JoinWithUs = () => {
    return (
        <Container style={cheafImg} sx={{ mt: 10 }}>
            <Box item style={{ ...joinUs }}>
                <div>
                    <Typography style={{ color: '#FFFFFF' }} variant='h1'>
                        Join With Us
                    </Typography>
                    <Typography style={{ color: '#FFFFFF' }} variant='h3'>
                        Share your love of Homecooked meals
                    </Typography> <br />
                    <Button variant='contained' sx={{ my: 1 }} style={{ backgroundColor: '#FF5733', fontSize: '17px' }}>Apply Now</Button><br />
                </div>
            </Box>
        </Container>
    );
};

export default JoinWithUs;