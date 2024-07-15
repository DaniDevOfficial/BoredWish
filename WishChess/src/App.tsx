import React, { useState } from 'react';
import { Display } from './Display';
import { board } from './types/board';
import { calculatePossibleMoves, checkIfIsAPiece, checkIfIsFriendlyPiece, checkIfPathIsFree } from './functionality/checks';


// chess board layout
const baseLayout: board = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'K', ' ', ' ', ' ', ' '],
  [' ', 'r', ' ', ' ', 'p', ' ', ' ', ' '],
  ['P', ' ', ' ', ' ', 'p', ' ', ' ', ' '],
  ['P', 'R', 'P', 'P', 'P', 'P', ' ', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
]



export default function App() {

  const [board, setBoard] = useState<board>(baseLayout)
  const [selectedPiece, setSelectedPiece] = useState<number[]>()
  const [madeMoves, setMadeMoves] = useState<string[]>(["wasd"])
  const [possibleMoves, setPossibleMoves] = useState<number[][]>([])

  function selection(y: number, x: number) {
    const location = [y, x]
    console.log("possible Moves: ", possibleMoves)

    let playerColor = "black"
    if (madeMoves.length % 2 == 0) playerColor = "white"
    if (checkIfIsAPiece(board, location)) {
      // console.log(calculatePossibleMoves(board, location))
      const tmp = calculatePossibleMoves(board, location)
      // console.log("tmp: ", tmp)
      setPossibleMoves(tmp)
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
                let borderColor = "";

                if (selectedPiece && selectedPiece[0] === i && selectedPiece[1] === j) {
                  backgroundColor = isEven ? "bg-amber-100" : "bg-amber-200";
                  borderColor = "border-amber-500";
                }

                const isPossibleMove = possibleMoves.some(move => move[0] === i && move[1] === j);
                if (isPossibleMove) {
                  backgroundColor = "bg-green-300"; // TODO: Maybe make it like other chess apps with a circle in the middle
                }

                return (
                  <div
                    onClick={() => selection(i, j)}
                    key={j + " " + i}
                    className={`border-2 w-10 h-10 m-0 rounded-lg flex justify-center items-center ${backgroundColor} ${borderColor}`}
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

