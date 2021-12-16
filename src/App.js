import React from "react";
import './App.css';
import Profile from "./profile";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCount: 0,
      shows: false,
      text: "show"
    };
    this.handleClick = () => {
      this.setState({ shows: !this.state.shows });
      this.setState({ currentCount: 0 });

      if (this.state.shows) {
        this.setState({ text: "show" });
      } else {
        this.setState({ text: "hide" });
      }
    };
  }

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  };
  componentDidMount = () => {
    this.intervalId = setInterval(this.timer, 1000);
  };

  render() {
    return (
      <div>
        <div className="Profile">
          {this.state.shows && <profile />}
          <button onClick={this.handleClick}>{this.state.text}</button>
          <h1>{this.state.currentCount}</h1>
        </div>
      </div>
    );
  }
}

export default App;
