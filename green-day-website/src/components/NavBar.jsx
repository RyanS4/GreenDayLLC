import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Green Day
                </Typography>
                <IconButton color="inherit" ></IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;