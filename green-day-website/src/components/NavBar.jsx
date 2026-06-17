import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton,
    Button
 } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate = useNavigate();

    function handleNavClick(page) {
    navigate(page);
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "#06402B" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Green Day
                </Typography>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/")}>Home</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/about")}>About</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/lawn-programs")}>Lawn Programs</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/services")}>Services</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/contact")}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}