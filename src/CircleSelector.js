import React from 'react';
import './CircleSelector.css'


const CircleSelector = (props) => { 

  return (
    <div className="CircleSelector">
      {props.select === 1 ? (
        <button className="selected">CIRCLE 1 SELECTED</button>
      ) : (
        <button onClick={ () => props.handleSelected(1)}>SELECT CIRCLE 1</button>
      )}  
    
      {props.select === 2 ? (
          <button className="selected">CIRCLE 2 SELECTED</button>
        ) : (
          <button onClick={() => props.handleSelected(2)}>SELECT CIRCLE 2</button>
        )}  
      
      {props.select === 3 ? (
          <button className="selected">CIRCLE 3 SELECTED</button>
        ) : (
          <button onClick={() => props.handleSelected(3)}>SELECT CIRCLE 3</button>
        )}  
      
      {props.select === 4 ? (
          <button className="selected">CIRCLE 4 SELECTED</button>
        ) : (
          <button onClick={() => props.handleSelected(4)}>SELECT CIRCLE 4</button>
        )}  
    </div>
  )
}

export default CircleSelector; 