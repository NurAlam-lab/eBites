import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import Food from '../../Food/Food';


const ToSellFood = () => {
    const { foods } = useAuth();
    return (
        <div sx={{ mt: 8 }}>
            <Typography sx={{ mt: 6 }} variant='h1'>Ready to Order?</Typography>
            <Typography sx={{ mt: 1 }} variant='h3'>Try some of our best sellers</Typography>
            <Container sx={{ my: 7 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            foods.slice(0, 3)?.map(food => <Food
                                key={food.id}
                                food={food}>
                            </Food>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default ToSellFood;