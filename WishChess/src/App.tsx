


import React, { useState } from 'react';
import { Display } from './Display';
import { board } from './types/board';
import { checkIfIsAPiece } from './functionality/checks';


// chess board layout
const baseLayout: board = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
]


export default function App() {

  const [board, setBoard] = useState<board>(baseLayout)
  const [selectedPiece, setSelectedPiece] = useState<number[] | null>()
  const [madeMoves, setMadeMoves] = useState<string[] | null>()

  function selection(x: number, y: number){
    if(checkIfIsAPiece(board, [x, y])) {
      return setSelectedPiece([x, y])      
    }
  }

  return (
    <>
      <div className="board">
        {board.map((row, i) => {
          return (
            <div key={i} className="flex justify-center gap-4">
              {row.map((cell, j) => {
                return (
                  <div onClick={() => (selection(i, j))} key={j + " " + i} className="border-2 border-blue-500 w-10 h-10 m-2 rounded-lg flex justify-center items-center">
                    {cell}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>


    </>
  )
}

