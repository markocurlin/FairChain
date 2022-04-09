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

const VotePage = () => {
    return (
        <div style={{
            backgroundColor: 'white',
            backgroundPosition: 'center',
            backgroundCover: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
          }}>
            <Header />
            
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h3'>GLASAČKI LISTIĆ</Typography>
                            <Typography variant='h4'>za izbor zastupnica / zastupnicau h</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Ime:</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Prezime:</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Hrvatska:</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Split:</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Adresa: </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Rođenje:</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>OIB:</Typography>
                        </Grid>
                        <Link to='/vote' style={{ textDecoration: 'none' }}>
                            <Button variant='contained'>Potvrdi</Button>
                        </Link>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default VotePage;