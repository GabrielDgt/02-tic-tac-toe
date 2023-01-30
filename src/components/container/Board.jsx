import React, { useState } from "react";
import Square from "../pure/square.jsx";
import { TURN } from "../../models/turn.enum.js";
import { checkWinner } from './../../models/checkWinner.js';
import WinnerModal from "./WinnerModal.jsx";

const BoardContainer = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(TURN.X);
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setPlayerTurn(TURN.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = playerTurn
    setBoard(newBoard)

    const nextTurn = playerTurn === TURN.X ? TURN.O : TURN.X
    setPlayerTurn(nextTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }
  }

  return (
    <main className="board">
      <h1>Tic-Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square 
              key={index} 
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={playerTurn === TURN.X}>
          {TURN.X}
        </Square>
        <Square isSelected={playerTurn === TURN.O}>
          {TURN.O}
        </Square>
      </section>

      {
        winner !== null && (
          <WinnerModal winPlayer={winner} restartGame={resetGame}></WinnerModal>
        )
      }

    </main>
  );
};

export default BoardContainer;
