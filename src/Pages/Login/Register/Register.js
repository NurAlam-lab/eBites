import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import login from '../../../assets/-isolated-white-background-218504113.jpg';
import useAuth from '../../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const [logInData, setLogInData] = useState({});
    const history = useHistory();
    const { allContext } = useAuth();
    const { user, registerUser, isLoading, authError } = allContext;


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = { ...logInData };
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }
    const handleLogInSubmit = e => {
        if (logInData.password !== logInData.password2) {
            alert('Your password did not match')
            return
        }
        registerUser(logInData.email, logInData.password, logInData.name, history);

        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant='h3' gutterBottom>Sign Up</Typography>
                    {!isLoading && <form onSubmit={handleLogInSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant='contained' style={{ fontSize: '17px' }}>Sign Up</Button> <br />
                        <Link id='signIn-link' to='/login' style={{ fontSize: '17px' }}>Already a member? Please Sign In</Link>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success" style={{ fontSize: '17px' }}>user created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid sx={{ mt: 2, mb: 4 }} item xs={12} md={6}>
                    <img style={{ width: '700px' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;