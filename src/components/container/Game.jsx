import React from 'react'
import Square from '../pure/Square.jsx';


const Game = ({ gameBoard, updateBoard, player, turnX, turnO }) => {
  return (
    <>
    <section className="game">
        {
        gameBoard.map((square, index) => {
        return (
            <Square 
            key={index} 
            index={index}
            updateBoard={updateBoard}
            >
            {square}
            </Square>
        );
        })
        }
    </section>
    <section className="turn">
        <h1 className="playerText">Player Turn:</h1>
        <Square isSelected={player === turnX}>
        {turnX}
        </Square>
        <Square isSelected={player === turnO}>
        {turnO}
        </Square>
    </section>
    </>
  )
}

export default Game