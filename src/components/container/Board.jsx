import React, { useState } from "react";
import { TURN } from "../../models/turn.js";
import { checkWinner, checkEndGame } from "./../../models/checkGame.js";
import WinnerModal from "./WinnerModal.jsx";
import GameBoard from "../pure/GameBoard.jsx";
import PlayerTurn from '../pure/PlayerTurn.jsx';
import confetti from "canvas-confetti";

const BoardContainer = () => {
  const [board, setBoard] = useState(() => {
    const storedBoard = window.localStorage.getItem('board')
    if(storedBoard) return JSON.parse(storedBoard)
      return Array(9).fill(null)
  });
  const [playerTurn, setPlayerTurn] = useState(() => {
    const storedTurn = window.localStorage.getItem('turn')
      return storedTurn ?? TURN.X
  });
  //setting draw if there is no winner
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayerTurn(TURN.X);
    setWinner(null);
    //reset local storage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  };

  const updateBoard = (index) => {
    //don't update if not null
    if (board[index] || winner) return;
    //reset board
    const newBoard = [...board];
    newBoard[index] = playerTurn;
    setBoard(newBoard);
    //switch turn
    const nextTurn = playerTurn === TURN.X ? TURN.O : TURN.X;
    setPlayerTurn(nextTurn);
    //saving current movements
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', nextTurn)
    //check if theres is a winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
    }else if (checkEndGame(newBoard)){
      setWinner(false) //draw
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
