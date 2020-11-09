import React from 'react'

const ScoreBoard = (props) => {

  return (
    <div>
      <div className="scoreboard">
        <div>Score: {props.score}</div>
        <div>Best: {props.highScore}</div>
      </div>
    </div>
  )
}

export default ScoreBoard
