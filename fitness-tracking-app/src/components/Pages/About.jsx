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
        Our fitness tracking app is designed to help you achieve your fitness goals. FitSynergy is a cutting-edge fitness tracking application
       that harnesses the power of modern web and mobile technologies to revolutionize the way individuals approach their health and wellness journeys.
       It has been developed by a team of passionate fitness enthusiasts, software engineers, and health professionals. FitSynergy is a culmination of years of research,
        innovation, and a deep understanding of the intricate relationship between physical activity, nutrition, and overall well-being.
        Our team of experts continuously strives to incorporate the latest advancements in technology and scientific research, ensuring that our application 
        remains at the forefront of the fitness tracking industry.
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
      <Typography variant="body1">
      <h2>Contact Information</h2>
      <p>For any inquiries, support requests, or feedback, please feel free to reach out to us through the following channels:</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href="mailto:support@fitsynergy.com">support@fitsynergy.com</a>
        </li>
        <li>
          <strong>Phone:</strong> +254 723 898 456
        </li>
        </ul>
      </Typography>
      <Typography variant="body1">
      <h2>Licensing</h2>
      <p>FitSynergy is released under the <a href="https://opensource.org/licenses/MIT">MIT License</a>. You are free to use, modify, and distribute this software as per the terms of the license.</p>
      <ul>
        <li>The MIT License is a permissive open-source license that allows for free use, modification, and distribution of the software, both for commercial and non-commercial purposes.</li>
        <li>By using FitSynergy, you agree to comply with the terms and conditions outlined in the MIT License.</li>
        <li>For more information on the MIT License and its implications, please refer to the <a href="https://github.com/your-username/FitSynergy/blob/main/LICENSE">LICENSE</a> file within our GitHub repository.</li>
      </ul>
      </Typography>
    </Paper>
  );
};

export default About;
