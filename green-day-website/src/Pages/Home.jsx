import { Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import InfoBlock from '../components/InfoBlock';
import { React } from 'react';
import home from '../assets/home.jpg';
import zelle from '../assets/zelle.png';

function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <Box
            sx={{
                backgroundImage: `url(${home})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '20vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 2
            }}
            >
            <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ marginTop: 4, color: '#FFFFFF', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                Welcome to Green Day Lawn Service!
            </Typography>
            </Box>
            <InfoBlock title="Who are we?" content="Green Day LLC is a locally owned and operated lawn care company based in Smithfield, Virginia. Serving the Hampton Roads area, we are a family business with over 20 years of experience in the lawn care industry. We are committed to providing our customers with the best lawn care services possible, and we take pride in our work." />
            <br />
            <InfoBlock title="Our Mission:" content="It is Green Day’s mission to provide the best lawn care, turf disease, and turf pest control in the Hampton Roads area, and to be recognized as the industry’s premier provider in our marketplace." />
            <br />
            <InfoBlock title="Why Choose Us?" content="DON’T PAY A BIG COMPANY FOR LITTLE SERVICE!  Before you sign up for another year of increasing program costs and decreasing customer service, give us a call for a free estimate and see the Green Day difference!" />
            <br />
            <Box sx={{ margin: 2}} >
                <img src={zelle} alt="Zelle" style={{ width: '150px', height: 'auto', marginRight: '20px', display: 'inline-block', verticalAlign: 'middle' }} />
                <Typography variant="h4" component="div" sx={{ color: '#6534D1', fontWeight: 'bold', display: 'inline-block', verticalAlign: 'middle' }}> Payment Notice:</Typography>
                <Typography variant="body1" component="div" gutterBottom sx={{ fontSize: '24px' }}>We now offer Zelle as a payment option. You can access Zelle through your bank or credit union's mobile app or online banking. We would also ask that any customers currently paying via credit card to consider switching to Zelle. Credit card payments cost you extra money (processing fees) and us time to process the payment. We thank you for your business! Please send Zelle payments to <strong>john@greendayllc.net</strong></Typography>
            </Box>
        </Box>
    );
}

export default Home;