import React, { useState } from 'react';
import face from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import tele from '../assets/telephone.png';
import PhoneModal from './PhoneModal';

const Contacts = () => {
 
  const [modal, setModal] = useState(false);

  return (
    <div className='w-full h-screen'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className="text-3xl font-bold text-blue">დაგვიკავშირდით</h1>
        <span className="w-1/2 h-[0.5px] bg-blue"></span>

        <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[10rem] mt-8 md:mt-[10rem]'>
          <a 
            href="https://www.facebook.com/Baiasports" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={face} 
              alt="Facebook" 
              className='w-[8rem] md:w-[10rem] transition-transform transform hover:scale-110 duration-300'
            />
          </a>
          <a 
            href="https://www.instagram.com/baiasportscomplex/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src={instagram} 
              alt="Instagram" 
              className='w-[8rem] md:w-[10rem] transition-transform transform hover:scale-110 duration-300'
            />
          </a>
         
            <img onClick={() => setModal(!modal)} 
              src={tele} 
              alt="Telephone" 
              className='w-[8rem] md:w-[10rem] transition-transform transform hover:scale-110 duration-300 cursor-pointer'
            />
        
        </div>
      </div>

      {modal && <PhoneModal handleClose={() => setModal(false)}/>}
    </div>
  );
};

export default Contacts;
