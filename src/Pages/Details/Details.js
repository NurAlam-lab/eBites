import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Details = () => {
    const { id } = useParams();
    const { foods } = useAuth();
    const matchingFood = foods.find((food) => food.id === Number(id));
    const { name, seller, description, img, price } = matchingFood;
    return (
        <div>
            <Typography sx={{ mt: 6 }} variant='h3'>Ready to Order?</Typography>
            {name ? (<Container sx={{ flexGrow: 1, my: 10, backgroundColor: 'rgb(240,240,240)', height: '433px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '580px', height: '400px', margin: 'auto' }} src={img} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box >
                            <Typography style={{ textAlign: 'left', marginLeft: '15px' }} sx={{ mt: 2 }} variant="h4" component="div">
                                {name}
                            </Typography>

                            <Typography style={{ textAlign: 'left', marginLeft: '15px' }} sx={{ m: 2 }} variant="h5" component="div">
                                Price: {price} Taka
                            </Typography>

                            <Typography style={{ textAlign: 'left', marginLeft: '15px' }} sx={{ mt: 2 }} variant="h6" component="div">
                                Resturent: {seller}
                            </Typography>

                            <Typography style={{ textAlign: 'left', marginLeft: '15px' }} sx={{ mt: 1 }}>
                                {description}
                            </Typography><br />

                            <Link to={`/foods/${id}/customize`} sx={{ mt: 6 }} style={{ backgroundColor: '#FF5733', textDecoration: 'none', color: 'white' }} className="btn fs-5 py-2 px-4 text-white">Order Now</Link><br />
                        </Box>
                    </Grid>
                </Grid>
            </Container >) : (<h2>No Food Found</h2>)}
        </div>
    );
};

export default Details;