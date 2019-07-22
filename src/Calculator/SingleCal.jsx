import React, { Component } from 'react';

class SingleCal extends Component {
  constructor(){
    super();

    this.state = {

    };
    }

    ResetItem = () => {
      this.setState({ 
      inputValue: this.state.inputValue = '' ,
       }); 
  };

   updateInput = e => {
     this.setState({
       [e.target.name] :  parseInt(e.target.value)
     });
   };

   add = () => {
     const { value1, value2 } = this.state;
     alert("The SUM is " + (value1 + value2));
   };

   subtract = () => {
     const { value1, value2 } = this.state;
     alert("The Subtraction is " + (value1 - value2));
   };

   mul = () => {
    const { value1, value2 } = this.state;
    alert("The product is " + (value1 * value2));
  };

  div = () => {
    const { value1, value2 } = this.state;
    alert("The div is " + (value1 / value2));
  };






   render() {
     return (
       <div>
         <div className="calculator-body">
         <input
           placeholder="first value"
           value={this.state.inputValue}
           name="value1"
           onChange={e => this.updateInput(e)}
         />

         <input 
           placeholder="second value"
           value={this.state.inputValue}
           name="value2"
           onChange={e => this.updateInput(e)}
         />




         <button onClick={this.add}>+</button>
         <button onClick={this.subtract}>-</button>
         <button onClick={this.mul}>x</button>
         <button onClick={this.div}>/</button>
         <button onClick={this.ResetItem}>C</button>
         
         
       
       
       </div>
       </div>
     );
   }
 }

export default SingleCal;
