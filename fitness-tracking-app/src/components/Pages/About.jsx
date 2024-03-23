import React from 'react';
import { Typography, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 600,
    backgroundColor: '#f0f0f0',
    borderRadius: theme.spacing(2),
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#333',
    textAlign: 'center',
  },
  featureList: {
    marginBottom: theme.spacing(2),
  },
  featureItem: {
    marginBottom: theme.spacing(1),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={3}>
      <Typography variant="h2" className={classes.title} gutterBottom>
        About 
      </Typography>
      <Typography variant="body1" paragraph>
        Our fitness tracking app is designed to help you achieve your fitness goals by tracking your workouts, monitoring your progress, and providing personalized recommendations.
      </Typography>
      <Typography variant="body1" paragraph className={classes.featureList}>
        Features of our app include:
        <ul>
          <li className={classes.featureItem}>Workout tracking: Log your workouts including exercises, sets, reps, and weights.</li>
          <li className={classes.featureItem}>Progress monitoring: Visualize your progress over time with charts and graphs.</li>
          <li className={classes.featureItem}>Personalized recommendations: Receive tailored workout plans and nutrition advice based on your goals and preferences.</li>
          <li className={classes.featureItem}>Community support: Connect with other users, join challenges, and share your achievements.</li>
        </ul>
      </Typography>
      <Typography variant="body1" paragraph>
        Whether you're a beginner looking to get started or an experienced athlete striving for new heights, our app is here to support you on your fitness journey.
      </Typography>
      <Typography variant="body1">
        Start tracking your fitness today and unlock your full potential!
      </Typography>
    </Paper>
  );
};

export default About;
