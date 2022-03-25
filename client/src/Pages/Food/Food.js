import React from 'react';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';

const Food = (props) => {
    const { name, img, price, _id } = props.food;

    return (

        <Grid item xs={4} sm={4} md={4} >
            <Link style={{ textDecoration: 'none' }} to={`/foods/${_id}`}>
                <Card>
                    <CardContent>
                        <CardMedia
                            component="img"
                            style={{ width: '340px', height: '300px', margin: '0 auto' }}
                            image={img}
                            alt="green iguana"
                        />

                        <Typography variant="h3" component="div">
                            {name}
                        </Typography>
                        <Typography variant="h3" component="div">
                            ৳{price}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>

    );
};

export default Food;