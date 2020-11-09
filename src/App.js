import React, { useState, useEffect } from 'react'
import ImageBoard from './components/ImageBoard'
import ScoreBoard from './components/ScoreBoard'
import Header from './components/Header'

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    if (gameOver) {
      alert('you lose');
      setScore(0)
      setGameOver(false)
    }
  }, [gameOver])

  useEffect(() => {
    if (score === 12) {
      alert('you win!');
      setScore(0);
    }
  }, [score]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  }, [score, highScore])

  const addPoint = () => {
    setScore(score + 1);
  }

  return (
    <div>
      <Header />
      <ScoreBoard 
        score={ score } 
        highScore={ highScore } 
      />
      <ImageBoard 
        addPoint={ addPoint } 
        gameOver={ setGameOver }
      />
    </div>
  )
}

export default App