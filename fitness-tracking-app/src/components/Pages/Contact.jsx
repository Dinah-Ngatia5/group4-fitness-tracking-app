// import React, { useState } from 'react';
// import { Button, TextField, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   formSection: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: theme.spacing(4),
//   },
//   contactForm: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: theme.spacing(2),
//   },
//   formControl: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start',
//     gap: theme.spacing(1),
//   },
//   submitButton: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const ContactForm = () => {
//   const classes = useStyles();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [text, setText] = useState('');

//   const onSubmit = (event) => {
//     event.preventDefault(); // Prevent page default refresh
//     // Do something with the form data
//   };

//   return (
//     <section className={classes.formSection}>
//       <div className={classes.contactForm}>
//         <Typography variant="h5">Contact Us</Typography>
//         <form onSubmit={onSubmit} className={classes.contactForm}>
//           <div className={classes.formControl}>
//             <TextField
//               variant="outlined"
//               label="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               fullWidth
//               required
//             />
//           </div>
//           <div className={classes.formControl}>
//             <TextField
//               variant="outlined"
//               label="Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               fullWidth
//               required
//             />
//           </div>
//           <div className={classes.formControl}>
//             <TextField
//               variant="outlined"
//               label="Text"
//               multiline
//               rows={4}
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               fullWidth
//               required
//             />
//           </div>
//           <div className={classes.submitButton}>
//             <Button variant="contained" color="primary" type="submit">
//               Submit
//             </Button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
