import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography, List, ListItem, ListItemText, Button} from "@material-ui/core";
import { Link } from "react-router-dom";

function ExerciseList() {
    const [exercises, setExercises] = useState([]);

    useEffect(()=> {
        const fetchExercises = async () => {
            try {
                const response = await axios.get("https://exercisedb.p.rapidapi.com/", {
                    headers: {
                       'X-RapidAPI-Key': "MY-API-KEY",
                       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    },
                });
                setExercises(response.data);
        
            } catch (error) {
                console.error("Error fetching exercises:", error);
            }
        };

        fetchExercises();
    }, []);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Exercise List
            </Typography>
            <List>
                {exercises.map((exercise) => (
                    <ListItem key={exercise.id}>
                        <ListItemText primary={exercise.name} />
                        <Button component={Link} to={`exercises/${exercise.id}`} variant="contained" color="primary">
                            View Details
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default ExerciseList;