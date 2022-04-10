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
            <Container sx={{ marginTop: '1em', marginBottom: '1em' }}>
                <Grid container textAlign='center' justifyContent='center' alignItems='center' spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Link to="/" style={{ textDecoration: 'none' , color: "white"}} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth'})}}>
                            <img src={image} alt='logo'/>
                        </Link>
                        <Typography variant='body2' sx={{ color: 'white' }}>Copyright 2022, all right reserved.</Typography>
                    </Grid>
                </Grid>     
            </Container>
            <Divider/>
        </Box>
    )
}

export default Footer;