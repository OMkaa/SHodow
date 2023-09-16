import React from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isRunning: false,
    };
  }

  startTimer() {
    this.setState({ isRunning: true });
    this.interval = setInterval(() => this.tick(), 1000);
  }

  pauseTimer() {
    this.setState({ isRunning: false });
    clearInterval(this.interval);
  }

  resetTimer() {
    this.setState({ seconds: 0, isRunning: false });
    clearInterval(this.interval);
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>Seconds: {this.state.seconds}</h1>
        <button onClick={() => this.startTimer()}>Start</button>
        <button onClick={() => this.pauseTimer()}>Pause</button>
        <button onClick={() => this.resetTimer()}>Reset</button>
      </div>
    );
  }
}

export default Timer;