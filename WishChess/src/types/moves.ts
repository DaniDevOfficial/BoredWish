// Define the interface for a single move
export interface Move {
    direction: string;
    steps?: number | string;
    capture?: boolean;
    initial?: boolean;
    positions?: number[][];
  }
  
  // Define the interface for a piece
export interface Piece {
    name: string;
    moves: Move[];
  }
  
  // Define the interface for the entire piece movements
export interface PieceMovements {
      [key: string]: Piece;
  }
  