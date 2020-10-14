import React, { useState } from 'react';
import './jogoVelha.css';

function JogoVelha() {
  const emptyBoard = Array(9).fill('');
  const [board, setBoard] = useState(emptyBoard);
  const handleCellClick = (index: number) => {
   setBoard(board.map((item, itemIndex) => (itemIndex === index ? 'X' : item)));
  }


  return (
    <main>
      <h1 className="title">Jogo da Velha</h1>
      <div className="board">
        {board.map((item, index) => (
          <div className={`cell ${item}`} key={index} onClick={() =>handleCellClick(index)}>
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}

export default JogoVelha;
