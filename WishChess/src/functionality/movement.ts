import { board } from "../types/board";



export function movePiece(board: board, from: number[], to: number[]) {
    const newBoard = board.map(row => [...row]);
    newBoard[to[0]][to[1]] = newBoard[from[0]][from[1]];
    newBoard[from[0]][from[1]] = ' ';
    return newBoard;
}