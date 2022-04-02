import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Food from '../Food/Food';


const Foods = () => {
    const { foods, totalPages, currentPage, setCurrentPage } = useAuth();
    function pageHandler(number) {
        setCurrentPage(number)
    }
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
                <div className='d-flex justify-content-center '>
                    {
                        [...Array(totalPages).keys()].map((number) => (<button
                            className={number === currentPage
                                ? 'btn btn-primary rounded-0 border fs-3 py-2 m-1'
                                : 'btn btn-white rounded-0 border fs-3 py-2 m-1'
                            }
                            key={number}
                            onClick={() => pageHandler(number)}>
                            {number + 1}
                        </button>))
                    }
                </div>
            </Container>
        </div>
    );
};

export default Foods;