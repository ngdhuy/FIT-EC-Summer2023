import React, { Component } from 'react'; 
import './style.css';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // pre-render
  componentDidMount() {
    this.timeID = setInterval(() => this.timer_tick(), 1000);
  }

  // after render
  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  timer_tick() {
    this.setState({ date: new Date() }); // method to update state
  }

  render() {
    return(
    <div className='timer'>
      Now is <span>{this.state.date.toLocaleTimeString() }</span>
    </div>
    );
  }
}