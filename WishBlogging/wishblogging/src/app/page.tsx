'use client'
import Image from "next/image";
import { Button } from "./lib/Components";

export default function Home() {
  return (
    <>
      <div >
        <>
          <div className='max-w-4xl mx-auto'>
            <div className='flex flex-col items-center mt-8 sm:mt-10vh gap-5' >
              <h1 className='text-5xl font-bold text-center'>
                Explore WishBlogging to blog your experiences in tech and life
              </h1>
              <div className='text-gray-500 w-10/12 text-center'>
                  WishBlogging is a free blogging site written in Next.js and Tailwind CSS. It is a great place to share your experiences in tech and life. 
              </div>
              <Button variant={"primary"} >Start now</Button>

            </div>
          </div>
        </>
      </div>
    </>
  );
}
