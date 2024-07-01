"use client"
import { Button } from '@/app/lib/Components'
import React from 'react'
export function Landing() {

    return (
        <>
            <div className='max-w-4xl mx-auto'>
                <div className='flex flex-col items-center mt-5vh sm:mt-10vh gap-5' >
                    <h1 className='text-5xl text-text font-bold text-center'>
                        Start tracking your expenses now with WishFinance
                    </h1>   
                    <div className='text-gray-500 w-10/12 text-center'>
                        .text- WishFinance is a simple and easy to use expense tracker that helps you keep track of your expenses and income. 
                        It is designed to be simple and easy to use, so you can spend less time managing your finances and more time doing the things you love.
                    </div>
                    <Button variant={"primary"} >Primary Button</Button>

                </div>
            </div>
        </>
    )
}