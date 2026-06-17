import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button,
    Box
 } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate = useNavigate();

    function handleNavClick(page) {
    navigate(page);
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: "#06402B" }}>
            <Toolbar sx={{ px: { xs: 1.5, sm: 2.5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mr: 'auto' }}>
                    <Box
                        component="img"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAJ3g0OtNWU3WUIG-3tygPs5B8R7LZjz3-PQ&s"
                        alt="Green Day Lawn Service Logo"
                        sx={{
                            height: 40,
                            width: 40,
                            objectFit: 'cover',
                            borderRadius: '50%',
                            mr: 1.25,
                            ml: 0.5
                        }}
                    />
                    <Typography variant="h6" component="div">
                        Green Day Lawn Service
                    </Typography>
                </Box>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/")}>Home</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/about")}>About</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/lawn-programs")}>Lawn Programs</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/services")}>Services</Button>
                <Button variant="outlined" color="inherit" sx={{ marginLeft: 3 }} onClick={() => handleNavClick("/contact")}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}