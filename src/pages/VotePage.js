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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import pecat from '../content/images/pecat.png';

const political_party = [ 'HDZ', 'SDP', 'MOST', 'DOMOVINSKI POKRET', 'ŽIVI ZID', 'Pametno', 'HDS','HSS', 'HRAST'];

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
                <Grid container justifyContent='center'>
                    <Paper variant="outlined" sx={{ width: '900px', my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Grid container item spacing={3}>
                            <Grid item xs={12} md={12} textAlign='center'>
                                <Typography variant='h4'>GLASAČKI LISTIĆ</Typography>
                                <Typography variant='h5'>ZA IZBOR ZASTUPNIKA U HRVATSKI SABOR NA KOJEM SE GLASUJE ZA JEDNU OD LISTA </Typography>
                                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>X. IZBORNE JEDINICE</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} textAlign='left'>
                                <Divider sx={{ marginBottom: '2em' }}/>
                                <Typography variant='body1' sx={{ fontWeight: 'bold' }}>VAŽNA NAPOMENA</Typography>
                                <Typography variant='body2'>Glasački listić ispunjava se tako da se ispuni samo jedan kružić ispred naziva jedne liste za koju se glasuje.</Typography>
                                <Divider sx={{ marginTop: '2em' }}/>
                            </Grid>
                            <Grid item xs={12} md={12} textAlign='center'>
                                <FormControl>
                                    <RadioGroup
                                        >
                                            {political_party.map((party,index) => {
                                                return(
                                                    <FormControlLabel key={index} value={party} control={<Radio />} label={party} />
                                                )
                                        })}
                                    </RadioGroup>
                                </FormControl>
                                <Divider sx={{ marginTop: '2em' }}/>
                            </Grid>
                            <Grid item xs={12} md={12} textAlign='center'>
                                <Button variant='contained'>Potvrdi</Button>
                            </Grid>  
                            <Grid item xs={12} md={12} textAlign='center'>
                                <img src={pecat} alt='pecat' style={{ width: '20%'}}/>
                                <Typography variant='body2'>Serijski broj: 0018368</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}

export default VotePage;