import React from 'react'
import Square from './Square.jsx';

const PlayerTurn = ({ player, turnX, turnO }) => {
  return (
    <section className="turn">
        <h1 className="playerText">Player Turn:</h1>
        <Square isSelected={player === turnX}>
        {turnX}
        </Square>
        <Square isSelected={player === turnO}>
        {turnO}
        </Square>
    </section>
  )
}

export default PlayerTurn