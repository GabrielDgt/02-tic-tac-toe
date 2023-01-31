import React, { useState } from "react";
import { TURN } from "../../models/turn.js";
import { checkWinner, checkEndGame } from "./../../models/checkGame.js";
import WinnerModal from "./WinnerModal.jsx";
import GameBoard from "../pure/GameBoard.jsx";
import PlayerTurn from '../pure/PlayerTurn.jsx';
import confetti from "canvas-confetti";

const BoardContainer = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(TURN.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn(TURN.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = playerTurn;
    setBoard(newBoard);

    const nextTurn = playerTurn === TURN.X ? TURN.O : TURN.X;
    setPlayerTurn(nextTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
    }else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  };

  return (
    <main className="board">
      <h1>Tic-Tac Toe</h1>
      <button className="boardBtn" onClick={resetGame}>Reset Game</button>
      <GameBoard
        gameBoard={board}
        updateBoard={updateBoard}
      ></GameBoard>
      <PlayerTurn
        player={playerTurn}
        turnX={TURN.X}
        turnO={TURN.O}
      ></PlayerTurn>
      <WinnerModal winPlayer={winner} restartGame={resetGame}></WinnerModal>
    </main>
  );
};

export default BoardContainer;
