import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import {WINNING_COMBINATIONS} from './winning-combinations';

const boardInitialData = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";
  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    'X':'Player 1',
    'O':'Player 2'
  })
 const [gameTurns, setGameTurns] = useState([]);
//  const [playerIsActive, setPlayerIsActive]=useState("X");
 const playerIsActive = deriveActivePlayer(gameTurns);
 let gameBoardX = [...boardInitialData.map(array=>[...array])];

  for (const turn of gameTurns){
    const {square, player} = turn;
    const {row, col}= square;

    gameBoardX[row][col] = player;
  }
  let winner = false ;

 for (const combination of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoardX[combination[0].row][combination[0].column];

  const secondSquareSymbol = gameBoardX[combination[1].row][combination[1].column];
  const thirdSquareSymbol = gameBoardX[combination[2].row][combination[2].column];
   if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
     winner = players[firstSquareSymbol];
   }
  
 }
 const hasDraw = gameTurns.length === 9 && !winner;
 const handlePlayer = (rowIndex, colIndex)=>{
  // setPlayerIsActive((playerIsActive)=> playerIsActive === "X" ? "O" : "X");
  setGameTurns(prevTurns => {
   const currentPlayer =  deriveActivePlayer(prevTurns);
    const updatedTurns = [{square: {row:rowIndex, col: colIndex}, player: currentPlayer},...prevTurns];
    return updatedTurns;
  })
 }
 function handleReset() {
   setGameTurns([]);
 }

 function handlePlayerNameChanged(symbol, newName){
  setPlayers(prev =>{
    return {
      ...prev,
      [symbol]:newName
    }
  })
 }

  return (
    <main id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialPlayerName={"Player-1"} symbol={"X"} isActive={playerIsActive === "X"} onChangeName={handlePlayerNameChanged}/>
        <Player initialPlayerName={"Player-2"} symbol={"O"} isActive={playerIsActive === "O"} onChangeName={handlePlayerNameChanged}/>

      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleReset}/>}
      <GameBoard changePlayer={handlePlayer} board={gameBoardX}/>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
