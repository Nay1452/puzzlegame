import React, { useState } from 'react';
import { Board } from './Board';
import { ResetButton } from './ResetButton';
import { ScoreBoard } from './ScoreBoard';
import GameResultTable from './GameResultsTable';
import './FlipGame.css';

const FlipGame = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [userChoice, setUserChoice] = useState(null); 
  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
   
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? 'X' : 'O';
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
      setGameOver(true);
    } else if (!updatedBoard.includes(null)) {
     
      setGameOver(true);
    }

    
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  
  if (gameOver) {
    const winner = checkWinner(board);
    setTimeout(() => {
      if (winner) {
        alert(`Congrats! Player ${winner} won!`);
      } else {
        alert("Oops! Reset the game.");
      }
    }, 100);
  }

  return (
    <div className="App">
      <div className="game-container">
        {userChoice ? (
          <div className="user-choice">You are playing as: {userChoice}</div>
        ) : (
          <div className="user-choice">
            <button onClick={() => setUserChoice('X')}>Play as X</button>
            <button onClick={() => setUserChoice('O')}>Play as O</button>
          </div>
        )}

        <ScoreBoard scores={scores} xPlaying={xPlaying} />
        <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
        <ResetButton resetBoard={resetBoard} />

        {gameOver && (
          <div className="game-over">
            {checkWinner(board) ? (
              <div>Congrats! Player {checkWinner(board)} won!</div>
            ) : (
              <div>It's a tie!</div>
            )}
          </div>
        )}
      </div>

      <div className="result-container">
        <GameResultTable results={scores} />
      </div>
    </div>
  );
};

export default FlipGame;
