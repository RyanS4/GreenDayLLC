import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button,
    Box
 } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useMediaQuery } from 'react-responsive';

export default function NavBar() {

    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

    function handleNavClick(page) {
    navigate(page);
    }

    if (isMobile) {
        return (
            <AppBar position="static" sx={{ backgroundColor: "#06402B" }}>
                <Toolbar sx={{ px: { xs: 1.5, sm: 2.5 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
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
                        <Typography variant="h6" component="div" sx={{ fontSize: '12px' }}>
                            Green Day LLC
                        </Typography>
                    </Box>
                    <Button variant="outlined" color="inherit" sx={{ marginLeft: 2, fontSize: '10px' }} onClick={() => handleNavClick("/")}>Home</Button>
                    <Button variant="outlined" color="inherit" sx={{ marginLeft: 2, fontSize: '10px' }} onClick={() => handleNavClick("/lawn-programs")}>Lawn Programs</Button>
                    <Button variant="outlined" color="inherit" sx={{ marginLeft: 2, fontSize: '10px' }} onClick={() => handleNavClick("/services")}>Services</Button>
                    <Button variant="outlined" color="inherit" sx={{ marginLeft: 2, fontSize: '10px' }} onClick={() => handleNavClick("/contact")}>Contact</Button>
                </Toolbar>
            </AppBar>
        );
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "#06402B" }}>
            <Toolbar sx={{ px: { xs: 1.5, sm: 2.5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
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
                    <Typography variant="h6" component="div">
                        Green Day Lawn Service
                    </Typography>
                </Box>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 4  }} onClick={() => handleNavClick("/")}>Home</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 4  }} onClick={() => handleNavClick("/lawn-programs")}>Lawn Programs</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 4  }} onClick={() => handleNavClick("/services")}>Services</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 4  }} onClick={() => handleNavClick("/contact")}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}