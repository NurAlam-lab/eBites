import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Food from '../Food/Food';


const Foods = () => {
    const { foods } = useAuth();
    return (
        <div>
            <Typography sx={{ mt: 6 }} variant='h1'>Ready to Order?</Typography>
            <Container sx={{ my: 7 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {
                            foods.map(food => <Food
                                key={food._id}
                                food={food}>

                            </Food>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Foods;