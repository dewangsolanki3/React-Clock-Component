import React, { Component } from 'react';


class Count extends Component {
   constructor() {
      super();
      this.state = {
        clicks: 0,
        show: true,

      };
    }


    ResetItem = () => {
      this.setState({ clicks: this.state.clicks = 0 });
    }
  
    Increment = () => {
      if( this.state.clicks < 10){
      this.setState({ clicks: this.state.clicks + 1 });
      }
      else{
         alert('You have reached the limit');
      }
    }

    Decrease = () => {
      if( this.state.clicks > 0){
      this.setState({ clicks: this.state.clicks - 1 });
    }
    else{
      alert('Stay POSITIVE :p');
   }
   }

   ToggleButton = () => {
      this.setState({ show: !this.state.show });
   }

  
    render() {
      return (
        <div>
          <button onClick={this.Increment}>++++++++</button>
          <button onClick={this.Decrease}>-----------</button>
          <button onClick={this.ResetItem}>Reset</button>
          <button onClick={this.ToggleButton}>
          { this.state.show ? 'Hide' : 'Show' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        </div>
      );
    }
   }

export default Count;
