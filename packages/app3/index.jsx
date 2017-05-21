import { h, render, Component } from 'preact';
/** @jsx h */

class Clock extends Component {
  constructor() {
    super();
        // set initial time:
    this.state.time = Date.now();
  }

  componentDidMount() {
        // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
        // stop when not renderable
    clearInterval(this.timer);
  }

  render(props, state) {
    const time = new Date(state.time).toLocaleTimeString();
    return <h3>{`App 3 ${time} rendered with Preact`}</h3>;
  }
}

render((
  <Clock />
), global.document.getElementById('App3'));
