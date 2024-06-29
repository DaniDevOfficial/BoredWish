"use client"
import { Button } from '@/app/lib/Components'
import React from 'react'
export function Landing() {

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
                    <button>wasd</button>
                </div>
            </div>
        </>
    )
}