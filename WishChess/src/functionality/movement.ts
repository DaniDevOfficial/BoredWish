import { board } from "../types/board";



export function movePiece(board: board, from: number[], to: number[]) {
    const newBoard = board.map(row => [...row]);
    const piece = newBoard[from[1]][from[0]];
    newBoard[from[1]][from[0]] = ' ';
    newBoard[to[1]][to[0]] = piece;
    return newBoard;
}