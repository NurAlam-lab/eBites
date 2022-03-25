import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import './Cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';


const Details = () => {
    const { selectedFood, remove } = useAuth();
    const TotalPrice = selectedFood.reduce((total, food) => total + food.price, 0)




    return (
        <div className='cart-container'>
            <Typography sx={{ mt: 6 }} variant='h1'>Ready to Order?</Typography>
            <Typography sx={{ mt: 2 }} variant='h4'>You have {selectedFood.length} items in Cart</Typography>
            <Container sx={{ flexGrow: 1, my: 10 }}>
                {selectedFood.length ? <div>

                    <Grid container spacing={2}>
                        <Grid item xs={8} md={8}>

                            {selectedFood.map(({ name, price, img, quantity, id }) => (
                                <div >

                                    <div className="items-info">

                                        <div className="product-img">
                                            <img src={img} alt="iamge" />
                                        </div>

                                        <div className="title">
                                            <h2>{name}</h2>
                                        </div>

                                        <div className="add-minus-quantity">
                                            <i className="fas fa-minus minus" ></i>
                                            <input type="text" placeholder={quantity} disabled />
                                            <i className="fas fa-plus add" ></i>
                                        </div>

                                        <div className="price">
                                            <h3>৳{price}</h3>
                                        </div>

                                        <div className="remove-item">
                                            <i
                                                onClick={() => remove(id)}
                                                className="fas fa-trash-alt remove"
                                            ></i>
                                        </div>
                                    </div>

                                    <hr />

                                </div>
                            )
                            )}

                        </Grid>

                        <Grid item xs={4} md={4}>
                            <Box >

                                <Typography variant='h3'>Total Price: {TotalPrice.toFixed(2)}৳</Typography>

                            </Box>
                        </Grid>
                    </Grid>




                </div > : <div style={{ marginBottom: "180px" }}><h2>No Food Found</h2></div>}
            </Container >
        </div>
    );
};

export default Details;

