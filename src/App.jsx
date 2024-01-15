import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
 

  return (
    <main id="game-container">
      <h1>hi</h1>
      <ol id="players">
        <Player initialPlayerName={"Player-1"} symbol={"X"}/>
        <Player initialPlayerName={"Player-2"} symbol={"O"}/>

      </ol>
      <GameBoard />

    </main>
  )
}

export default App
