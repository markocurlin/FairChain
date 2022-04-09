import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import image from '../content/images/image.png';

const Footer = () => {
    return (
        <Box className="footer">
            <Divider/>
            <Container sx={{ marginTop: '1em', marginBottom: '1em' }}>
                <Grid container justifyContent='center' alignItems='center' spacing={3}>
                    <Grid item sx={{ textAlign: { xs: 'center', md: 'left' } }} xs={12} md={4}>
                        <Link to="/" style={{ textDecoration: 'none' , color: "white"}} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth'})}}>
                            <img src={image} alt='image'></img>
                        </Link>
                        <Typography sx={{ color: 'white' }} variant='body2'>Copyright 2022, all right reserved.</Typography>
                    </Grid>
                </Grid>     
            </Container>
            <Divider/>
        </Box>
    )
}

export default Footer;