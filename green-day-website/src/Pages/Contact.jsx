import { Typography, Box } from '@mui/material';
import NavBar from '../components/NavBar';
import PageHeader from '../components/PageHeader';
import InfoBlock from '../components/InfoBlock';
import greenday from '../assets/greenday.jpg';

function Contact() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <NavBar />
            <PageHeader title="Contact Green Day Lawn Service" />
            {// leave less of a gap between the header and the other content below
            }  
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Contact Information</Typography>
                    <Typography variant="h6" sx={{ fontStyle: 'italic' }}>Call us anytime</Typography>
                    <Typography sx={{ fontSize: '22px' }}><strong>Phone:</strong> (757) 365-4849</Typography>
                    <Typography sx={{ fontSize: '22px' }}><strong>Email:</strong> John@greendayllc.net</Typography>
                    <Typography sx={{ fontSize: '22px' }}><strong>Mailing Address:</strong> PO Box 219 Smithfield, VA. 23431</Typography>
                </Box>
                 <Box sx={{ flex: 1, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={greenday} alt="Green Day Lawn Service" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                </Box>
            </Box>
        </Box>
    );
}

export default Contact;