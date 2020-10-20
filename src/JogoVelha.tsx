import React, { useState, useEffect } from 'react';
import './jogoVelha.css';

const _X = 'X';
const _O = 'O';

function JogoVelha() {
  const emptyBoard = Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState(_X); //hook
  const [winner, setWinner] = useState('');

  const handleCellClick = (index: number) => {
    if (board[index] !== '') {
      return null;
    }

    if (winner !== '') {
      return null;
    }

    setBoard(
      board.map((item, itemIndex) =>
        itemIndex === index ? currentPlayer : item
      )
    );
    setCurrentPlayer(currentPlayer === _X ? _O : _X);
  };

  const checkWinner = () => {
    console.log('atualizou a variavel board');
    const possibiles = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],
      [board[6], board[4], board[2]],
    ];

    possibiles.forEach((cells) => {
      if (cells.every((cell) => cell === _X)) {
        setWinner('X');
      }
      if (cells.every((cell) => cell === _O)) {
        setWinner('O');
      }
    });
  };

  const resetGame = () => {
    setCurrentPlayer(_X);
    setBoard(emptyBoard);
    setWinner('');
  };

  const check = () => {
    if (board.every((item) => item !== '') && winner !== '') {
      setWinner('E');
      console.log('Entrouuuuuuu')
    }
  };

  
  useEffect(checkWinner, [board]);

  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>
      <div className={`board ${winner !== '' ? 'game-over' : ''}`}>
        {board.map((item, index) => (
          <div
            className={`cell ${item}`}
            key={index}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {winner !== '' && (
        <footer>
          <h2 className="winner-message">
            <span className={winner}>{winner}</span> venceu!
          </h2>
          <button onClick={resetGame}>Recomeçar Jogo!</button>
        </footer>
      )}
    </main>
  );
}

export default JogoVelha;
