import React from 'react'
import { board } from './types/board'

export function Display(board) {


    return (
        <>
            {board.map((row, i) => {
                return (
                    <div key={i} className="flex justify-center gap-4">
                        {row.map((cell, j) => {
                            return (
                                <div key={j + " " + i} className="border-2 border-blue-500 w-10 h-10 m-2 rounded-lg flex justify-center items-center">
                                    {cell}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    )
}