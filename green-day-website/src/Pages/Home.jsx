import { Typography } from '@mui/material';
import NavBar from '../components/NavBar';

function Home() {
    return (
        <div>
            <NavBar />
            <Typography variant="h2" component="h1" align="center" gutterBottom>
                Welcome to Green Day!
            </Typography>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
                Your trusted partner for all your landscaping needs.
            </Typography>
        </div>
    );
}

export default Home;