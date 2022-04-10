import {  useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


import { useDispatch, useSelector } from 'react-redux';
import { fetchBlockchain } from '../actions/blockchain';


const MainPage = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchBlockchain());
    }, [dispatch]);

    const { blockchain } = useSelector((state) => state);

    console.log(blockchain);

    return (
        <>
            <Header />
            <Container component="main" maxWidth="sm" sx={{ display: 'flex', mb: 4 }}>    
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Grid container >
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
            <Container sx={{ marginBottom: '3em' }}>
                {blockchain.isLoading ? <Box sx={{ textAlign: 'center' }}><CircularProgress /></Box> : <Table 
                    data={blockchain.blockchain[0].transactions} 
                    address={user.address}
                />}
            </Container>
            <Footer />
        </>
    );
}

export default MainPage;