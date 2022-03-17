import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ButtonAppBar() {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ backgroundColor: '#000000', height: '80px' }} position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ textAlign: 'left' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        @eBites
                    </Typography>
                    <NavLink to="/cart" style={{ color: 'white', marginRight: "10px", fontSize: "20px" }}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </NavLink>
                    {
                        user?.email ?
                            <Button variant="h6" onClick={logOut} color="inherit">Sign Out</Button>
                            :
                            <NavLink style={{ textDecoration: 'none' }} to="login">
                                <Button variant="h6" style={{ color: 'white' }} color="inherit">Sign In</Button>
                            </NavLink>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}