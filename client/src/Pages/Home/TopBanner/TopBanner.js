import { Typography } from '@mui/material';
import React from 'react';
import { Container, Button } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import { Link } from 'react-router-dom';
import BG from '../../../assets/copyspace-hamburger-chicken-93549718.jpg';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div
            style={{
                background: `url(${BG})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}
        >
            <Container>
                <div
                    style={{ height: "90vh" }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="text-center my-5 py-5">
                        <Bounce left cascade>
                            <Typography variant='h1' className="text-dark">All Your Favorite Food
                                at your doorstep.</Typography>
                        </Bounce>

                        <Bounce>
                            <Link to="foods" style={{ textDecoration: 'none' }} variant='danger' sx={{ my: 1 }} className="btn rounded-pill bg-dark fs-2 py-2 px-4 text-white"
                            >Discover</Link>
                        </Bounce>

                        <Bounce right cascade>
                            <Typography variant='h3' className="my-4 text-dark ">Already a member? <Link id='signin-link' to='/login' >Sign In</Link> </Typography>
                        </Bounce>


                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopBanner;