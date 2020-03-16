import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import SoccerPlayers from './SoccerPlayers';

function Card(props) {

  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleDarkMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
  };

  return (
    <div>
      <div title='dark-mode__toggle'>
        <button onClick={toggleDarkMode} className={darkMode ? 'toggle toggled' : 'toggle'}>Dark Mode</button>
      </div>

      {props.user.map((player) => {
        return <SoccerPlayers key={player.id} name={player.name} country={player.country} searches={player.searches} />
      })}

    </div>
  )
}

export default Card;
