import React, { useState } from 'react';

function Player({initialPlayerName, symbol}) {
  const [playerName, setPlayerName] = useState(initialPlayerName);

  const [isEditing, setIsEditing] = useState(false);
 const handleName =(e)=>{
     setPlayerName(e.target.value);
  }
  let EditPlayer = <span className="player-name">{playerName}</span> ;

  if(isEditing){
    EditPlayer = <input type='text' value={playerName} required onChange={handleName}/>
  }
  
 
  return (
    <li>
          <span className="player">
             {EditPlayer}
            <span className="player-symbol">{symbol}</span>
            
          </span>
          <button onClick={()=> setIsEditing((editing)=> !editing)}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
  )
}

export default Player