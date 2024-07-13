


import React, { useState } from 'react';
import { Display } from './Display';
import { board } from './types/board';
import { checkIfIsAPiece, checkIfIsFriendlyPiece } from './functionality/checks';


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
  const [selectedPiece, setSelectedPiece] = useState<number[]>()
  const [madeMoves, setMadeMoves] = useState<string[]>([])

  function selection(x: number, y: number) {
    const location = [x, y]
    console.log("selection")
    if (checkIfIsAPiece(board, location) && checkIfIsFriendlyPiece(board, location, madeMoves)) {
      return setSelectedPiece(location)
    }
    if (!selectedPiece) return;
    



  }

  return (
    <>
      <div className="board">
        {board.map((row, i) => {
          return (
            <div key={i} className="flex justify-center">
              {row.map((cell, j) => {
                const isEven = (i + j) % 2 === 0;
                let backgroundColor = isEven ? 'bg-white' : 'bg-gray-300';
                let borderColor = ""
                if (selectedPiece && selectedPiece[0] == i && selectedPiece[1] == j) {
                  backgroundColor = isEven ? "bg-amber-100": "bg-amber-200"
                  borderColor = "border-amber-500"
                }
                return (
                  <div
                    onClick={() => selection(i, j)}
                    key={j + " " + i}
                    className={`border-2  w-10 h-10 m-0 o rounded-lg flex justify-center items-center ${backgroundColor} ${borderColor}`}
                  >
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

