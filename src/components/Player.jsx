import React, { useState } from 'react';

function Player({initialPlayerName, symbol, isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(initialPlayerName);

  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick(){
    setIsEditing((editing)=> !editing);
    if(isEditing){
      onChangeName(Symbol, playerName);
    }
    
  }
 const handleName =(e)=>{
     setPlayerName(e.target.value);
  }
  let EditPlayer = <span className="player-name">{playerName}</span> ;

  if(isEditing){
    EditPlayer = <input type='text' value={playerName} required onChange={handleName}/>
  }
  
 
  return (
    <li className={isActive ? "active" : undefined}>
          <span className="player">
             {EditPlayer}
            <span className="player-symbol">{symbol}</span>
            
          </span>
          <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
  )
}

export default Player