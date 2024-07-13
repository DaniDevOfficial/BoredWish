import { board } from "../types/board";

export function checkIfIsAPiece(board: board, location: number[]) {
    const currentTile = board[location[0]][location[1]];
    if (currentTile == " ") return false;
    return true;
}

export function whoseMove(moves: string[]){
    if (moves.length % 2 == 0 ) {
        return "white"
    }
    return "black"
}

export function getPieceColor(piece: string) {
    if (piece == piece.toUpperCase()) return "white"
    return "black"
}


export function checkIfIsFriendlyPiece(board: board, location: number[], moves: string[]) {
    const yourColor = whoseMove(moves)
    const pieceColor = getPieceColor(board[location[0]][location[1]])
    if (yourColor == pieceColor) return true;
    return false;
}