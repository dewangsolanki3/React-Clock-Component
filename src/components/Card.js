import React from 'react';
import '../Card.css';
import {
  node, string,number,objectOf,shape
} 
from 'prop-types';

function Card({children,age,name}) {
    return (
      <div className="box">
          {children},{age},{name}
      </div>
    );
  }


Card.propTypes = {
  children: node.isRequired ,
  name: string,
  age:number,
  

}


Card.defaultProps ={
    name:'skkkkkkkkkkkkkkkkkkk',
    age:23,
}




  export default Card;
  