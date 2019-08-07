import React, { Component } from 'react';
import './analog.css';
import Alarm from './Alarm.jsx';


class Clock extends Component {

 constructor() {
  super();
  this.state = {
    h: 0,
    m: 0,
    s: 0,
    is24Hour : true,
  };
}

 interval = null;
 

 componentDidMount= () => {
   this.setTime();
 }




 ToggleButton = () => {
  this.setState({ is24Hour: !this.state.is24Hour });
}



 setTime = () => {
   this.interval = setInterval(() => {
     const d = new Date();
     let h = 12 ;
     let hours = d.getHours();
     let minutes = d.getMinutes();
     let seconds = d.getSeconds();
     let amPm ="Am";


    

    if (this.state.is24Hour){
      h = 24 ;
      if (hours > 12) {
        hours = hours-12;
        amPm="Pm";
      }
    }
  
      else{
        h= 12;
        amPm="Pm";
        
      }
    



    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let month = months[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();

    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Friday",
      "Sat",

    ];
    let today =days[d.getDay()];



    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
  //  this.setState({ playing: true });

     this.setState({
       h: hours,
       m: minutes,
       s: seconds,
       amPm:amPm,
       mo:month,
       d:day,
       y:year,
       td:today,
     

     });
   }, 1000);
 }

 render() {
   const { h, m, s } = this.state;
   const unit12 = 360 / 12; // 30
   const unit60 = 360 / 60; // 6
   const hourunit = unit12 / 60;
   const minuteunit = unit60 / 60;
   return (
    <>
    <button className="time-button" onClick={this.ToggleButton}>
          { this.state.is24Hour ? '12 Hr' : '24 Hr' }
        </button>
        <Alarm />
     <div className="container">
       <p className="time glow">{this.state.h} : {this.state.m} </p>
        <p className="time glow"> {this.state.s} </p>
         <p className="am-pm glow">{(this.state.amPm)} </p>
       <p className="date glow">{this.state.mo} {this.state.d}, {this.state.y} <span className="day"> {this.state.td}</span> </p>
       <div className="block block1"></div>
       <div className="block block2"></div>

     </div>

    
        <div className="clock">
<div className="hr" style={{ transform: `rotateZ(${((h % 12) * unit12 + (hourunit))}deg)` }} />
<div className="min" style={{ transform: `rotateZ(${(m * unit60) + (minuteunit)}deg)` }} />
<div className="sec" style={{ transform: `rotateZ(${(s * unit60) + (hourunit + minuteunit)}deg)` }} />
      </div>


     </>
   );
 }
}


export default Clock;
