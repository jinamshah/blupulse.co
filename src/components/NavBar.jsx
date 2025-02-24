import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  const location = useLocation();

  return (
    <AppBar 
    position="static" 
    color="transparent" 
    elevation={0} 
    sx={{ borderBottom: '1px solid', borderColor: 'grey.200', color: 'text.primary' }}>
      <Toolbar>
        {/* Logo and Company Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img 
            src="/lightblue.png" 
            alt="BluPulse Logo" 
            style={{ height: '32px', marginRight: '8px' }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            BluPulse
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box>
          <Button 
            component={Link} 
            to="/"
            color="inherit" 
            sx={{ 
              mr: 2,
              borderBottom: location.pathname === '/' ? '2px solid #2563eb' : 'none'
            }}
          >
            Home
          </Button>
          <Button 
            component={Link} 
            to="/blog"
            color="inherit" 
            sx={{ 
              mr: 2,
              borderBottom: location.pathname === '/' ? '2px solid #2563eb' : 'none'
            }}>
            Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;