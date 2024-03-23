import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container, Typography, List, ListItem, ListItemText, Button, Box, makeStyles } from "@material-ui/core";
import {Link} from "react-router-dom";
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme)=> ({
    container: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    },
    headline: {
        color: theme.palette.primary.main,
    },
    accentText: {
        color: theme.palette.secondary.main,
    },
}));

function WorkoutPlan() {
   const classes = useStyles();
   const [workoutSessions, setWorkoutSessions] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const[totalPages, setTotalPages] = useState(1);

   useEffect(() => {
    const fetchExercises = async () => {
        try {
            const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises", {
                headers: {
                    'X-RapidAPI-Key':"4853b6f1c9msh13de3517e7da380p1e7ccejsn2142c1853fa9",
                    'X-RapidAPI-Host': "exercisedb.p.rapidapi.com",
                },
                params: {
                    page: currentPage,
                    limit: 10, 
                },
            });
            setWorkoutSessions(response.data.results);
            setTotalPages(Math.ceil(response.data.totalCount / 10));
        } catch (error) {
            console.error("Error fetching exercises:", error);
        }
    };

    fetchExercises();
   }, [currentPage]);

   const handlePageChange = (event, value) => {
    setCurrentPage(value)
   };

   return (
    <Container maxWidth= "sm" className={classes.container}>
        <Typography variant="h4" gutterBottom className={classes.headline}>
            WorkoutPlan
        </Typography>
        <List>
            {workoutSessions.map((session)=> (
                <ListItem key={session.id}>
                    <ListItemText 
                    primary={<Typography className={classes.accentText}>{session.name}</Typography>}
                    secondary= {`Description: ${session.description},Intensity: ${session.intensity}, Duration:{session.duration} minutes`}
                    />
                    <Button component= {Link} to={`/exercises/exercise/${session.id}`} variant="contained" color="primary">
                        View Details
                    </Button>
                </ListItem>
            ))}
        </List>
        <Box mt={2} display="flex" justifyContent="center">
            <Pagination 
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            />
        </Box>

    </Container>
   );
}

export default WorkoutPlan;