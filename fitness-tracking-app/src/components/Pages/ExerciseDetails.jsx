import React, {useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Typography, List, ListItem, ListItemText } from "@material-ui/core";

function ExerciseDetails() {
    const{ id } = useParams();
    const[exercise, setExercise] = useState(null);

    useEffect(() => {
        const fetchExerciseDetails = async () => {
            try {
                const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercise/${id}`, {
                    headers: {
                        'X-RapidAPI-Key': "MY-API-KEY",
                        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
                    },
                });
                setExercise(response.data);
            } catch (error) {
                console.error(`Error fetching exercise details:`, error);
            }
        };

        fetchExerciseDetails();
    }, [id]);

    if (!exercise) {
        return <div>Loading</div>;
    }

    return (
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
            Exercise Details
        </Typography>
        <List>
            <ListItem>
                <ListItemText primary={`Name: ${exercise.name}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary={`Description: ${exercise.description}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary={`Intensity: ${exercise.intensity}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary= {`Duration: ${exercise.duration} minutes`} />
            </ListItem>
        </List>
      </Container>  
    );
}

export default ExerciseDetails;