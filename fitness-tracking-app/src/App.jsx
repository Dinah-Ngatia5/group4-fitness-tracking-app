import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GoalSetting from "./GoalSetting";
import Slides from "./Slides";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={GoalSetting} />
          <Route path="/slides" component={Slides} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;