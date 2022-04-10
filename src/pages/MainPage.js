import { useEffect } from 'react';
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
            <Container component="main" maxWidth="sm" sx={{ justifyContent: 'center', display: 'flex', mb: 4 }}>    
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Grid container justifyContent='center' spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h5'>Ime: {user.frist_name}</Typography>
                            <Typography variant='h5'>Prezime: {user.last_name} </Typography>
                            <Typography variant='h5'>Hrvatska: {user.country}</Typography>
                            <Typography variant='h5'>Split: {user.city}</Typography>
                            <Typography variant='h5'>Adresa: {user.adress}</Typography>
                            <Typography variant='h5'>Rođenje: {user.birth}</Typography>
                            <Typography variant='h5'>OIB: {user.oib}</Typography>
                        </Grid>
                        <Grid item xs={12} md={12} textAlign='center'>
                            <Link to='/vote' style={{ textDecoration: 'none' }}>
                                <Button variant='contained'>Potvrdi</Button>
                            </Link>
                        </Grid>
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
