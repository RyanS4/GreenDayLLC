import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button,
    Box
 } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function NavBar() {

    const navigate = useNavigate();

    function handleNavClick(page) {
    navigate(page);
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "#06402B" }}>
            <Toolbar sx={{ px: { xs: 1.5, sm: 2.5 }, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, width: { xs: '100%', sm: 'auto' } }}>
                    <Box
                        component="img"
                        src={logo}
                        alt="Green Day Lawn Service Logo"
                        onClick={() => handleNavClick("/")}
                        sx={{
                            height: 50,
                            width: 50,
                            objectFit: 'contain',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            mr: 1.25,
                            ml: 0.5
                        }}
                    />
                    <Typography variant="h6" component="div" sx={styles.navTitle}>
                        Green Day Lawn Service
                    </Typography>
                </Box>
                <Button variant="outlined" color="inherit" sx={styles.navButton} onClick={() => handleNavClick("/")}>Home</Button>
                <Button variant="outlined" color="inherit" sx={styles.navButton} onClick={() => handleNavClick("/lawn-programs")}>Lawn Programs</Button>
                <Button variant="outlined" color="inherit" sx={styles.navButton} onClick={() => handleNavClick("/services")}>Services</Button>
                <Button variant="outlined" color="inherit" sx={styles.navButton} onClick={() => handleNavClick("/contact")}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

const styles = {
    navButton: {
        marginLeft: {
            xs: 2,
            sm: 4, 
        },
        fontSize: {
            xs: '10px',
            sm: '12px',
            md: '14px',
            lg: 'inherit'
        },
    },
    navTitle: {
        fontSize: {
            xs: '14px',
            sm: '20px',
            md: '28px',
        }
    }
}