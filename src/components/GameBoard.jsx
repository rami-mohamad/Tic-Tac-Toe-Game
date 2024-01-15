import React from 'react'

const boardInitialData = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
function GameBoard() {
  return (
    <ol id='game-board'>
        {boardInitialData.map((row, rowIndex)=>{
           return <li key={rowIndex}>
            <ol>
                {row.map((col, colIndex)=>{
                   return <li key={colIndex}><button>{col}</button></li>
                })}
            </ol>
           </li>
        })}
    </ol>
  )
  
}

export default GameBoard