import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import image from '../content/images/image.png';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../actions/auth';

const Form = () => {
    /*
        sx={{ width:'400px', height: '450px', borderRadius: '15px' }}
    */
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
            dispatch(signin(
                {
                // Form data
                }, navigate));
        };

    return (
      <>
        <Container>
            <Grid container justifyContent='center' textAlign='center'>
                <Grid item textAlign='center'>  
                    <img src={image} alt='logo' style={{ width:'40%', marginTop: '70px', marginBottom: '20px'}}/>
                </Grid> 
                <Paper sx={{  display: 'flex', alignItems: 'center', width:'350px', height: '360px', borderRadius: '15px' }} evelation={3}>
                    <Grid container item textAlign='center' spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Typography variant='h4'>Sign In</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField id="outlined-basic-id" label="Personal ID" variant="outlined" sx={{ width: '300px' }}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField id="outlined-basic-pass" label="Password" type='password' variant="outlined" sx={{ width: '300px' }}/>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <FormControlLabel control={<Checkbox defaultunchecked='true' />} label="Remember me" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Link to='main' style={{ textDecoration: 'none' }}>
                                <Button onClick={handleSubmit} variant="contained">Sign in</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid item xs={12} md={12}>
                    <Typography sx={{ marginTop: '30px', color: 'white' }} variant='body2'>Copyright 2022, all right reserved.</Typography>
                </Grid>
            </Grid>
        </Container>
      </>  
    );
}

export default Form;