import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Bounce from "react-reveal/Bounce";


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
                    <Button variant='danger' sx={{ my: 1 }} className="rounded-pill bg-dark fs-5 py-2 px-4 text-white"
                    >Discover</Button>
                </Bounce>
            </div>
        </Box>
    );
};

export default Foodies;