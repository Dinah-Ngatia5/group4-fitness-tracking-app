import React, { useState } from "react";
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from "@material-ui/core";


function ActivityTracker() {
    const [activities, setActivities ] = useState([]);
    const [formData, setFormData ] = useState({
        type: "",
        duration: 0,
        intensity: "",
    });

    const handleChange = (e)=> {
        setFormData({...formData, [e.target.name]: e.target.value });
    };
   const handleSubmit = (e) => {
    e.preventDefault();
    setActivities([...activities, formData]);
    setFormData({type: "", duration: 0, intensity: ""});
   };

   return (
    <Container maxWidth="sm">
        <Typography variant="h4"  gutterBottom>
            Activity Tracker
        </Typography>
        <form onSubmit={handleSubmit}>
         <TextField 
         label="Type" 
         name="type"  
         value={formData.type}
         onChange={handleChange}
         fullWidth
         margin="normal"
         />
         <TextField 
         label="Duration (minutes)"
         name="duration"
         type="number"
         value={formData.duration}
         onChange={handleChange}
         fullWidth
         margin="normal"
         />
         <TextField 
         label="Intensity"
         name="intensity"
         value={formData.intensity}
         onChange={handleChange}
         fullWidth
         margin="normal"
         select
         >
         <option value="">Select Intensity</option>
         <option value="low">Low</option>
         <option value="moderate">Moderate</option>
         <option value="high">High</option>
         </TextField>
         <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Activity
         </Button>
        </form>
        <List>
            {activities.map((activity, index)=> (
                <ListItem key={index}>
                    <ListItemText 
                    primary= {`Type: ${activity.type}`}
                    secondary= {`Duration: ${activity.duration} minutes, Intensity: ${activity.intensity}`}
                    />
                </ListItem>
            ))}
        </List>
    </Container>
   );
}

export default ActivityTracker;