import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Bounce from "react-reveal/Bounce";
import { Link } from 'react-router-dom';


const joinUs = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 550
}
const Foodies = () => {
    return (
        <Box sx={{ my: 3 }} item style={{ ...joinUs }}>
            <div>
                <Bounce left cascade>
                    <Typography sx={{ my: 2 }} variant='h3'>
                        Ready to Order?
                    </Typography>
                </Bounce>

                <Bounce right cascade>
                    <Typography variant='h5'>
                        Welcome to the Foodies Nirvana
                    </Typography> <br />
                </Bounce>
                <Bounce>
                    <Link to="foods" style={{ textDecoration: 'none' }} variant='danger' sx={{ my: 1 }} className="btn rounded-pill bg-dark fs-5 py-2 px-4 text-white"
                    >Discover</Link>
                </Bounce>
            </div>
        </Box>
    );
};

export default Foodies;