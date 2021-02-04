import React from 'react'

import './Card.css'

const Card = (props) => {
  
  /*
  * This function receive a string and return it with first character capitalized
  */
 
  const capitalize = str => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  return (
  <div className='card'>
    <img className="card-image" alt={props.alt} src={props.image} />
    <h2 className='pokemon-name'>{capitalize(props.name)}</h2>
  </div>
)}

export default Card