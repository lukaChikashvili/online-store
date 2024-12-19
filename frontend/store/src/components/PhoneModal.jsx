import React from 'react';
import { Phone } from 'lucide-react';

const PhoneModal = ({ handleClose }) => {
  return (
    <div className='w-[80%] bg-blue h-[70vh] md:h-[45vh] m-auto relative -mt-[30rem] md:-mt-[12rem] rounded-md shadow-lg flex items-center justify-center'>
      <span 
        className='absolute right-4 top-4 text-xl text-white cursor-pointer' 
        onClick={handleClose}
      >
        X
      </span>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <Phone />
          <h2 className='text-xl text-slate-800 font-bold'>დაგვიკავშირდით ტელეფონის ნომერზე:</h2>
        </div>

        <p 
          className='text-5xl text-center text-white font-bold drop-shadow-lg'
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)" }}
        >
          551 17 17 99
        </p>
      </div>
    </div>
  );
};

export default PhoneModal;
