import styled from 'styled-components';
import StartGame from './components/StartGame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';
// Here we'll be using styled components
// We make a component as Button and  can write it as jsx
// It can be kept as bottom as well


// Hwre we need to go to gameplay page on clicking on play now button therefore we ned to use a function say toggle and if true go to gameplay page else startgame page

// this will be sent as prop to stratgame since that needs to be taking toggle in button

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !(prev));
  }
  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle = {toggleGamePlay}/>}

      {/* We have given the funcition togglePlay as function to startGame */}
    </>
  )
}

export default App