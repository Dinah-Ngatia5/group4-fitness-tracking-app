import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, List, ListItem, ListItemText } from '@mui/material';

const NutritionTrack = () => {
  const [foodItem, setFoodItem] = useState('');
  const [calories, setCalories] = useState('');
  const [trackedItems, setTrackedItems] = useState([]);

  const handleAddItem = () => {
    // Add the new item to the list
    const newItem = { foodItem, calories };
    setTrackedItems([...trackedItems, newItem]);

    // Clear the input fields
    setFoodItem('');
    setCalories('');
  };

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Food Item"
            fullWidth
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Calories"
            fullWidth
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" onClick={handleAddItem}>Add</Button>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" style={{ marginTop: 20 }}>
        List of tracked items:
      </Typography>
      <List>
        {trackedItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.foodItem} secondary={`${item.calories} calories`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default NutritionTrack;