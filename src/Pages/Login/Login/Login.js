import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import login from '../../../assets/-isolated-white-background-218504113.jpg';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const [logInData, setLogInData] = useState({});
    const { allContext } = useAuth();
    const { user, loginUser, signInWithGoogle, isLoading, authError } = allContext;

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }
    const handleLogInSubmit = e => {
        loginUser(logInData.email, logInData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = e => {
        signInWithGoogle(location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>Sign In</Typography>
                    <form onSubmit={handleLogInSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant='contained'>Sign In</Button> <br />
                        <Link id='signUp-link' to='/register' >New User? Please Sign Up</Link>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Sign In successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        <br />------------------------------- <br />
                        <Button onClick={handleGoogleSignIn} sx={{ m: 1 }} variant='contained'>Google Sign In</Button>
                    </form>
                </Grid>
                <Grid sx={{ mt: 2 }} item xs={12} md={6}>
                    <img style={{ width: '700px' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;