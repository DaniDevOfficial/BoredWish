"use client"
import { Button } from '@/app/lib/Components'
import React from 'react'
export function Landing() {
    const BUTTON_VARIANTS = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        danger: "bg-red-500 hover:bg-red-600 text-white"
      };
    return (
        <>
            <div className='max-w-4xl mx-auto'>
                <div className='flex flex-col items-center mt-5vh sm:mt-10vh gap-10' >
                    <h1 className='text-5xl font-bold text-center'>
                        Start tracking your expenses now with WishFinance
                    </h1>
                    <Button variant={"primary"}>Primary Button</Button>
                    <Button variant={"secondary"}>Secondary Button</Button>
                    <Button variant={"danger"}>Danger Button</Button>

                </div>
            </div>
        </>
    )
}