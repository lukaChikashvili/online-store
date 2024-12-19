import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Mobile = ({closeMenu, logoutHandler, handleLogin}) => {

    const { userInfo } = useSelector(state => state.auth);
   
    let navigate = useNavigate();

  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-blue z-10 flex items-center justify-center'>
       <span onClick={closeMenu} className='absolute right-12 top-4 text-2xl text-slate-700 font-bold'>X</span>


       <div>
       {userInfo ? (
           <button  onClick={logoutHandler} className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
           <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
           <span className="relative z-10 text-md">გამოსვლა</span>
         </button>
         ) : (
            <button onClick={handleLogin} className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">შესვლა</span>
          </button>
         )}
       </div>
    </div>
  )
}

export default Mobile
