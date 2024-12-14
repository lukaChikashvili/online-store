import { MessageSquare } from 'lucide-react'
import React from 'react'

const Comments = () => {
  return (
    <div className='w-full  h-screen flex mt-12 justify-center'>
        <div className='flex flex-col gap-4 w-full px-[10rem]'>
            <h1 className='flex items-center gap-2  text-2xl text-slate-500'><MessageSquare /> კომენტარები</h1>
            <span className='w-full bg-blue h-[0.5px]'></span>
          
            <textarea className='w-[30rem] border shadow-md outline-none h-[4rem]' placeholder='დაწერეთ კომენტარი...' />

            <button  className=" w-[14.5rem] relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">გამოქვეყნება</span>
          </button>
        </div>
    </div>
  )
}

export default Comments
