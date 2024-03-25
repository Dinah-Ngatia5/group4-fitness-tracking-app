import React from 'react';
import { Paper, Typography, TextField, Button, makeStyles, Snackbar } from '@material-ui/core';
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
    backgroundColor: '#f5f5dc', // Beige 
    borderRadius: theme.spacing(2),
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    color: '#333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  textField: {
    backgroundColor: 'white',
  },
}));

const ContactUS = () => {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    setFormData({
      name: "",
      email: "",
      message: ""
    });

    setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
    }, 3000);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (
    <Paper className={classes.root} >
      <Typography variant="h2" className={classes.title} gutterBottom>
        Contact Us
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Name"
          type='Name'
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
        className={classes.textField}
        variant="outlined"
        label="Email"
        type="email"
        onChange={handleChange}
        fullWidth
        required
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Message"
          onChange={handleChange}
          multiline
          minRows={5}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Form submitted successfully!"
        action={
          <Button color="secondary" size="small" onClick={() => setOpenSnackbar(false)}>
            Close
          </Button>
        }
      />
    </Paper>
  );
};

export default ContactUS;
