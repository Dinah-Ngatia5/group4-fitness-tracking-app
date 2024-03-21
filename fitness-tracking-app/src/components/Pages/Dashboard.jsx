import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Fitness Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Steps Taken</Typography>
            <Typography variant="h4">5000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Calories Burned</Typography>
            <Typography variant="h4">700</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Distance Covered</Typography>
            <Typography variant="h4">3.5 km</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Active Time</Typography>
            <Typography variant="h4">2 hours</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
