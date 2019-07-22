import React from 'react';
import VideoPlayer from './Videoplayer/VideoPlayer.jsx';
import Clock from './components/Digiclock.jsx';
import Count from './Increment/Count.jsx';
import Main from './Calculator/Main.jsx';
import SingleCal from './Calculator/SingleCal';
import Custom from './Calculator/Custom';
import Card from './components/Card';
import Alarm from './components/Alarm.jsx';


function App() {
  return (
    <div>
      <Clock />
      <Count />
      <Main />
      <br/>
      <SingleCal />
      <br/>
      <Card name='Dewang' age='20'/>

    </div>
  );
}


export default App;
