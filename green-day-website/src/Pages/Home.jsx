import { Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import InfoBlock from '../components/InfoBlock';
import { React } from 'react';

function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <PageHeader title="Welcome to Green Day Lawn Service!" />
            <InfoBlock title="Who are we?" content="Green Day Lawn Service is a locally owned and operated lawn care company serving the Hampton Roads area. We are a family business with over 20 years of experience in the lawn care industry. We are committed to providing our customers with the best lawn care services possible, and we take pride in our work." />
            <InfoBlock title="Our Mission" content="It is Green Day’s mission to provide the best lawn care, turf disease, and turf pest control in the Hampton Roads area, and to be recognized as the industry’s premier provider in our marketplace." />
            <InfoBlock title="Why Choose Us?" content="DON’T PAY A BIG COMPANY FOR LITTLE SERVICE!  Before you sign up for another year of increasing program costs and decreasing customer service, give us a call for a free estimate and see the Green Day difference!" />
        </Box>
    );
}

export default Home;