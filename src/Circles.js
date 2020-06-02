import React from 'react';
import './Circle.css';
const Circles = (props) => { 

  return (
    <div className="Circles">
      <div className={props.select === 1 ? 'selected' : ''}>1</div>
      <div className={props.select === 2 ? 'selected' : ''}>2</div>
      <div className={props.select === 3 ? 'selected' : ''}>3</div>
      <div className={props.select === 4 ? 'selected' : ''}>4</div>
    </div>
  )
}

export default Circles; 