import React, { useState } from 'react'


function GameBoard({changePlayer, board}) {
  
  // const [gameBoardX, setGameBoardX]= useState(boardInitialData);

  // const handleBoardClick = (rowIndex, colIndex)=>{
  //       setGameBoardX((prevState)=>{
  //         const updatedBoard = [...prevState.map((innerArray)=>[...innerArray])];
  //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //         return updatedBoard;
  //       })
  //   changePlayer();
  // }
  return (
    <ol id='game-board'>
        {board.map((row, rowIndex)=>{
           return <li key={rowIndex}>
            <ol>
                {row.map((col, colIndex)=>{
                   return <li key={colIndex}><button onClick={()=>changePlayer(rowIndex, colIndex)} disabled={col !== null}>{col}</button></li>
                })}
            </ol>
           </li>
        })}
    </ol>
  )
  
}

export default GameBoard