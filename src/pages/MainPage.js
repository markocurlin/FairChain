import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const user1 = {
        frist_name: 'Ante',
        last_name: 'Antić',
        country: 'Hrvatska',
        city: 'Split',
        adress: 'Gunduliceva 7',
        birth: '22.04.1997',
        oib: '554234331'
}

const MainPage = () => {
    const [user, setUser] = useState(user1);

    return (
        <>
            <Header />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Ime: {user.frist_name}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Prezime: {user.last_name} </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Hrvatska: {user.country}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Split: {user.city}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Adresa: {user.adress}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Rođenje: {user.birth}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>OIB: {user.oib}</Typography>
                        </Grid>
                        <Link to='/vote' style={{ textDecoration: 'none' }}>
                            <Button variant='contained'>Potvrdi</Button>
                        </Link>
                    </Grid>
                </Paper>
            </Container>
            
            <Divider />

            <Footer />
        
        </>
    );
}

export default MainPage;