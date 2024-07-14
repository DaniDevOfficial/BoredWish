import { board } from "../types/board";
import pieceMovements from '../data/pieces.json'
import { PieceMovements } from "../types/moves";
const movement: PieceMovements = pieceMovements
export function checkIfIsAPiece(board: board, location: number[]) {
    const currentTile = board[location[0]][location[1]];
    if (currentTile == " ") return false;
    return true;
}

export function whoseMove(moves: string[]) {
    if (moves.length % 2 == 0) {
        return "white"
    }
    return "black"
}

export function getPieceColor(piece: string) {
    if (piece == piece.toUpperCase()) return "white"
    return "black"
}


export function checkIfIsFriendlyPiece(board: board, location: number[], playerColor: string) {
    const pieceColor = getPieceColor(board[location[0]][location[1]])
    if (playerColor == pieceColor) return true;
    return false;
}

function getPieceType(piece: string) {
    const pieceToFind = piece.toLowerCase();
    const pieceMapping: { [key: string]: string } = {
        "p": 'pawn',
        "k": 'king',
        "q": 'queen',
        "b": 'bishop',
        "r": 'rook',
        "n": 'knight'
    };
    return pieceMapping[pieceToFind];
}

function pawnMovement(board: board, location: number[], goal: number[]) {
    return true;
}


// TODO: Implement if king is in check
function checkIfIsValidMove(board: board, location: number[], goal: number[]) {
    const tmpPiece = board[location[0]][location[1]]
    const goalPiece = board[goal[0]][goal[1]]
    const pieceColor = getPieceColor(tmpPiece)
    const pieceType = getPieceType(tmpPiece)
    if (pieceType == "pawn") return pawnMovement(board, location, goal)
    if (goalPiece == " ") return true
    if (pieceColor == getPieceColor(goalPiece)) return false
    console.log("--------------------")
    console.log("PieceColor: " + getPieceColor(tmpPiece))
    console.log("GoalPiece: " + goalPiece)
    console.log("goalcolor: " + getPieceColor(goalPiece))
    console.log("goal " + goal)
    return true
}

export function calculatePossibleMoves(board: string[][], location: number[]) {
    const tmpPiece = board[location[0]][location[1]];
    const pieceType = getPieceType(tmpPiece);
    const moves = movement[pieceType].moves;
    const possibleMoves: number[][] = [];
    const [x, y] = location;

    for (const move of moves) {
        switch (move.direction) {
            case 'forward':
                addMoves(x, y, -1, 0, move.steps as number);
                break;
            case 'backward':
                addMoves(x, y, 1, 0, move.steps as number);
                break;
            case 'horizontal-left':
                addMoves(x, y, 0, -1, move.steps as number);
                break;
            case 'horizontal-right':
                addMoves(x, y, 0, 1, move.steps as number);
                break;
            case 'diagonal-left':
                addMoves(x, y, -1, -1, move.steps as number);
                break;
            case 'diagonal-right':
                addMoves(x, y, -1, 1, move.steps as number);
                break;
            case 'L':
                addKnightMoves(x, y, move.positions as number[][]);
                break;
            case 'horizontal':
                addMoves(x, y, 0, -1, move.steps as number);
                addMoves(x, y, 0, 1, move.steps as number);
                break;
            case 'vertical':
                addMoves(x, y, -1, 0, move.steps as number);
                addMoves(x, y, 1, 0, move.steps as number);
                break;
        }
    }

    return possibleMoves;

    function addMoves(startX: number, startY: number, dx: number, dy: number, maxSteps: number) {
        for (let step = 1; step <= maxSteps; step++) {
            const newX = startX + step * dx;
            const newY = startY + step * dy;
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                if (checkIfIsValidMove(board, location, [newX, newY])) {
                    possibleMoves.push([newX, newY]);
                }
                if (board[newX][newY] !== ' ') break;
            } else {
                break;
            }
        }
    }

    function addKnightMoves(startX: number, startY: number, positions: number[][]) {
        for (const pos of positions) {
            const newX = startX + pos[0];
            const newY = startY + pos[1];
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && checkIfIsValidMove(board, location, [newX, newY])) {
                possibleMoves.push([newX, newY]);
            }
        }
    }
}

export function checkIfPathIsFree(board: board, location: number[], goal: number[], moves: string[]) {
    const piece = getPieceType(board[location[0]][location[1]]);
    const pieceMovement = movement[piece];

}
