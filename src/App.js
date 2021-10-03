import Home from "./pages/Home"
import React, { useState, useEffect } from 'react'
import newGame from "./service/gameStateFactory"

function App() {

  useEffect(() => {
    (async () => console.log(await newGame()))()
    return () => {

    }
  }, [])

  return (
    <>
      <Home />
    </>
  );
}

export default App;
