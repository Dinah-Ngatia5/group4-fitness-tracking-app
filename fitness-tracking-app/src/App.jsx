import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core";
import WorkoutPlan from "./components/Pages/WorkoutPlan";
import ExerciseDetails from "./components/Pages/ExerciseDetails";
import Settings from "./components/Pages/Settings";
import ContactUS from "./components/Pages/Contact";
import About from "./components/Pages/About"




const theme = createTheme ({
  palette: {
    primary: {
      main: '#556b2f', //Basil Green 800
    },
    secondary: {
      main: '#e65100', // Orange 800
    },
    background: {
      default: '#fff300' // Shrine pink 100
    },
  },
});

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <h1>Fitness Tracker</h1>
          <Switch>
            <Route path="/">
              <ActivityTracker />
              </Route>
              <Route path= "/workout-plan">
                <WorkoutPlan />
            </Route>
            <Route path="/exercise/:id" component={ExerciseDetails} />
            <Route path= "/">
              <ExerciseList />
            </Route>
            <Route path="/">
              <h2><i>Welcome to the Fitness Tracker!!</i></h2>
            </Route>
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;