import Home from "./pages/Home"
import React, { useEffect } from 'react'
import newGame from "./service/gameStateFactory"

function App() {

  useEffect(() => {
    (async () => console.log(await newGame()))()
  }, [])

  return (
    <>
      <Home />
    </>
  );
}

export default App;
