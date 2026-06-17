import { Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import InfoBlock from '../components/InfoBlock';

function Contact() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <PageHeader title="Contact Green Day Lawn Service" />
            <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h4">Contact Information</Typography>
                <Typography variant="h6" sx={{ fontStyle: 'italic' }}>Call us anytime</Typography>
                <Typography><strong>Phone:</strong> (757) 365-4849</Typography>
                <Typography><strong>Email:</strong> John@greendayllc.net</Typography>
                <Typography><strong>Mailing Address:</strong> PO Box 219 Smithfield, VA. 23431</Typography>
            </Box>
        </Box>
    );
}

export default Contact;