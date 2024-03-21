import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Fitness Tracker
        </Typography>
        <Button component={Link} to="/activity" color="inherit">Activity Tracking</Button>
        <Button component={Link} to="/admin" color="inherit">Admin Dashboard</Button>
        <Button component={Link} to="/analytics" color="inherit">Analytics</Button>
        <Button component={Link} to="/dashboard" color="inherit">Dashboard</Button>
        <Button component={Link} to="/goal" color="inherit">Goal Setting</Button>
        <Button component={Link} to="/nutrition" color="inherit">Nutrition Tracking</Button>
        <Button component={Link} to="/social" color="inherit">Social Feed</Button>
        <Button component={Link} to="/workout" color="inherit">Workout Plan</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
        <Button component={Link} to="/register" color="inherit">Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;