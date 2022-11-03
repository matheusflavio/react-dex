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
    <div className='card-header'>
	  <img className="card-image" alt={props.alt} src={props.image} />
    </div>
    <h2 className='pokemon-name'>{parseInt(props.pokeID + 1)} - {capitalize(props.name)}</h2>
  </div>
)}

export default Card
