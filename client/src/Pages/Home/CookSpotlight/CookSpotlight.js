import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Cook from '../../../assets/Tabassum-Hussain-Tina.webp'
import TinaFood from '../../../assets/tina-food.webp'
import { Container, Typography } from '@mui/material';



const CookSpotlight = () => {
    return (
        <Container sx={{ flexGrow: 1, my: 10, backgroundColor: 'rgb(240,240,240)' }}>
            <Typography sx={{ mt: 4, mb: 2, p: 5 }} variant="h2" component="div">
                Cook Spotlight
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 'auto', height: '400px', margin: '0 auto' }} src={TinaFood} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box >
                        <img style={{ width: 'auto', height: '200px', margin: '0 auto' }} sx={{ m: 4 }} src={Cook} alt="" />
                        <Typography sx={{ m: 4 }} variant="h3" component="div">
                            Tabassum Hussain Tina
                        </Typography>
                        <Typography style={{ textAlign: 'left' }} sx={{ m: 4 }} variant="h4" component="div">
                            From cooking casually for friends and family to establishing a full commercial kitchen, she has broken all boundaries. Currently providing employment to 22 destitute women and fulfilling her passion for cooking.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default CookSpotlight;