
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Details = () => {
    const history = useHistory();
    const [food, setFood] = useState({});
    const { id } = useParams();
    const { addToCart, allContext } = useAuth();
    const { user } = allContext;
    const { uid } = user;


    const { name, seller, description, img, price } = food;

    useEffect(() => {
        fetch(`http://localhost:5000/foods/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    setFood(data);
                } else {
                    alert("something went wrong")
                }
            })
    }, [])

    return (
        <div>
            <Typography sx={{ mt: 6 }} variant='h1'>Ready to Order?</Typography>
            {food?.name ? (<Container sx={{ flexGrow: 1, my: 10, backgroundColor: 'rgb(240,240,240)', height: '433px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '580px', height: '400px', margin: 'auto' }} src={food.img} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box >
                            <Typography style={{ textAlign: 'left', marginLeft: '15px' }} sx={{ mt: 2 }} variant="h2" component="div">
                                {name}
                            </Typography>

                            <Typography style={{ textAlign: 'left', marginLeft: '15px' }} sx={{ m: 2 }} variant="h3" component="div">
                                Price: {price} Taka
                            </Typography>

                            <Typography style={{ textAlign: 'left', marginLeft: '15px' }} sx={{ mt: 2 }} variant="h4" component="div">
                                Resturent: {seller}
                            </Typography>

                            <Typography style={{ textAlign: 'left', marginLeft: '15px' }} variant="h5" sx={{ mt: 1 }}>
                                {description}
                            </Typography><br />

                            <Button onClick={() => {
                                if (uid) {
                                    addToCart(food)
                                } else {
                                    history.push("/login")
                                }
                            }}
                                variant="contained" sx={{ mt: 6 }} style={{ backgroundColor: '#FF5733', textDecoration: 'none', color: 'white' }} className=" fs-3 py-2 px-4 text-white">Add to Cart</Button><br />
                        </Box>
                    </Grid>
                </Grid>
            </Container >) : (<h2>No Food Found</h2>)}
        </div>
    );
};

export default Details;