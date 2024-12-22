
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useLogoutMutation } from '../redux/api/userSlice';
import { logout } from '../redux/features/auth/authSlice';
import logo from '../assets/logo.png'
import { Menu, User } from 'lucide-react';
import Mobile from './Mobile';
import { motion } from 'framer-motion'




const NavBar = () => {

     const { userInfo } = useSelector(state => state.auth);
   
 

    const [showMenu, setShowMenu] = useState(false);

   


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();
    
    const logoutHandler = async () => {
      try {
          
         await logoutApiCall().unwrap();
         dispatch(logout());
         localStorage.removeItem('jwt');
         navigate('/');

      } catch (error) {
         console.log(error)
      }
    }


    const handleLogin = () => {
      navigate('/login');
      setShowMenu(false);
    }

  return (
   <header className='w-full h-[5rem] flex items-center justify-between px-[4rem]   '>
       <div>
         <motion.img initial = {{ opacity: 0, translateY: 15}}
                     whileInView={{opacity: 1, translateY: 0 }} 
                     transition={{duration: 0.5, delay: 0.7}} 
          src = {logo} className='w-[5rem] md:w-[7em] -ml-4 cursor-pointer' onClick={() => navigate('/')} />
       </div>


      

       <div className='hidden md:flex items-center gap-12 text-lg'>
         <div className=''>
          {userInfo && userInfo.isAdmin ? (
            <nav className='flex gap-8'>
            <Link to = "/admin/userlist" >ყველა მომხმარებელი</Link>
            <Link to = "/admin/bloglist" >შექმენი ბლოგი</Link>
            <Link to = "/admin/allBlogs" >ყველა ბლოგი</Link>
            <Link to = "/admin/aplications" >ყველა აბონიმენტი</Link>
            </nav>
          ) : (
            <nav className='flex items-center gap-6 '>
            <motion.span initial = {{ opacity: 0, translateY: 15}}
                         whileInView={{opacity: 1, translateY: 0 }} 
                         transition={{duration: 0.5, delay: 0.2}}><Link to = "/">ჩვენს შესახებ</Link></motion.span>
            <motion.span initial = {{ opacity: 0, translateY: 15}}
                         whileInView={{opacity: 1, translateY: 0 }} 
                         transition={{duration: 0.5, delay: 0.4}}><Link to = "/">სერვისები</Link></motion.span>
             <motion.span initial = {{ opacity: 0, translateY: 15}}
                         whileInView={{opacity: 1, translateY: 0 }} 
                         transition={{duration: 0.5, delay: 0.6}}><Link to = "/blogs">ბლოგი</Link></motion.span>
            <motion.span initial = {{ opacity: 0, translateY: 15}}
                         whileInView={{opacity: 1, translateY: 0 }} 
                         transition={{duration: 0.5, delay: 0.8}}><Link to = "/apply">შემოგვიერთდი</Link></motion.span>
          </nav>
          )}
         </div>


     
         <h2 onClick={() => navigate('/profile')} className='text-blue font-bold cursor-pointer'>{userInfo?.isAdmin ? "ადმინი" : userInfo?.username}</h2>

     

       
         {userInfo ? (
           <motion.button initial = {{ opacity: 0, translateY: 15}}
           whileInView={{opacity: 1, translateY: 0 }} 
           transition={{duration: 0.5, delay: 0.9}} onClick={logoutHandler} className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
           <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
           <span className="relative z-10 text-md">გამოსვლა</span>
         </motion.button>
         ) : (
            <motion.button initial = {{ opacity: 0, translateY: 15}}
            whileInView={{opacity: 1, translateY: 0 }} 
            transition={{duration: 0.5, delay: 0.9}} onClick={() => navigate('/login')} className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md flex items-center gap-2"><User size={20} />შესვლა</span>
          </motion.button>
         )}
        
       
       </div>

       <div className='absolute md:hidden right-12' onClick={() => setShowMenu(!showMenu)} >
          <Menu />
        </div>

        {showMenu && <Mobile closeMenu={() => setShowMenu(false)} 
                             logoutHandler={logoutHandler}
                             handleLogin={handleLogin}
                             />}
   </header>
  )
}

export default NavBar
