import Form from '../components/Form';
import background from '../content/images/background.png';

const LoginPage = () => {
    return(
        <>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundCover: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }}>
                <Form />
            </div>
        </>
    );
}

export default LoginPage;