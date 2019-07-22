import React, { Component } from 'react';
import './analog.css';

class Alarm extends Component {
    constructor() {
      super();
      this.state = {
        currentTime: '',
        alarmTime: ''
      };
      this.setAlarmTime = this.setAlarmTime.bind(this);
    }
  
    componentDidMount(){
      this.clock = setInterval(
        () => this.setCurrentTime(),
        1000
      )
      this.interval = setInterval(
        () => this.checkAlarmClock(),
      1000)
    }
  
    componentWillUnmount(){
      clearInterval(this.clock);
      clearInterval(this.interval);
    }
  
    setCurrentTime(){
      this.setState({
        currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
    }
  
    setAlarmTime(event) {
      event.preventDefault();
      const inputAlarmTimeModified = event.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
    }
  
    checkAlarmClock(){
      if(this.state.alarmTime == 'undefined' || !this.state.alarmTime) {
        this.alarmMessage = "Alarm ";
      } else {
        this.alarmMessage = "Alarm "  ;
        if(this.state.currentTime === this.state.alarmTime) {
          alert("its time!");
        } 
      }   
    }
  
    render() {
      return (
        <div className="alarm">
          <h2>{this.alarmMessage}
          </h2>
            <input type="time" onChange={this.setAlarmTime}></input>
        </div>
      );
    }
  }
  
export default Alarm ;