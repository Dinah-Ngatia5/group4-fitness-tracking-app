import React, { Component } from 'react';
import Slides from "./Slides.jsx";


class GoalSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      goal: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Do something with the entered goal
    console.log('Goal:', this.state.goal);
  }

  render() {
    return (
      <div className="goal-setting-container">
        <h2>Goal Setting</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your goal:
            <input type="text" value={this.state.goal} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GoalSetting;