import React from 'react';

function SoccerPlayers(props) {
  return (
    <div className='mainContainer'>
      <div className='infoContainer'>
        <h2>Name: {props.name}</h2>
        <h4>Country: {props.country}</h4>
        <h5>Searches: {props.searches}</h5>
        <h5>Id: {props.id}</h5>
      </div>
    </div>
  )
}

export default SoccerPlayers
