import React from 'react'
import Square from './Square.jsx';

const GameBoard = ({ gameBoard, updateBoard}) => {
  return (
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
  )
}

export default GameBoard