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
            <Typography sx={{ padding: 2, fontSize: '25px' }}> Green Day llc. has been providing professional lawn care services for homeowners and commercial accounts in Hampton Roads since 2004, and we’d love the chance to put our knowledge and experience to work for you. At Green Day, our solutions are creative and cost-effective. We are a locally owned and operated company with the expertise you’re looking for in diagnosing and treating your lawn concerns. We maintain a license with the Virginia Department of Agriculture and are fully insured.</Typography>
            <Typography sx={{ padding: 2, fontSize: '25px' }}><strong>Our Mission:</strong> It is Green Day’s mission to provide the best lawn care, turf disease, and turf pest control in the Hampton Roads area, and to be recognized as the industry’s premier provider in our marketplace.</Typography>
            <Typography sx={{ padding: 2, fontSize: '25px' }}><strong>DON’T PAY A BIG COMPANY FOR LITTLE SERVICE!  Before you sign up for another year of increasing program costs and decreasing customer service, give us a call for a free estimate and see the Green Day difference!</strong></Typography>
        </Box>
    );
}

export default Home;