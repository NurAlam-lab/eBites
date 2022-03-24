import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    const { allContext, selectedFood } = useAuth();
    const { user, logOut } = allContext;
    return (
        <Box className="sticky-top" sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#000000', height: '80px' }} position="static">
                <Toolbar>

                    <Typography style={{ textAlign: 'left' }} variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}> @eBites</Link>
                    </Typography>
                    <NavLink to="/cart" style={{ color: 'white', marginRight: "10px", fontSize: "20px" }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <Badge className='bg-danger'>{selectedFood.length}</Badge>
                    </NavLink>
                    {
                        user?.email ?
                            <Button variant="h3" onClick={logOut} color="inherit" style={{ fontSize: '17px' }}>Sign Out</Button>
                            :
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button variant="h3" style={{ color: 'white', fontSize: '17px' }} color="inherit">Sign In</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}