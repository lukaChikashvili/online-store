
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useLogoutMutation } from '../redux/api/userSlice';
import { logout } from '../redux/features/auth/authSlice';
import logo from '../assets/logo.png'
import { Menu } from 'lucide-react';

const NavBar = () => {

     const { userInfo } = useSelector(state => state.auth);
   
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

   

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);

    }

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        
    }

    const closeSidebar = () => {
        setShowSidebar(false);
    }

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


  return (
   <header className='w-full h-[5rem] flex items-center justify-between px-[4rem]   '>
       <div>
         <img src = {logo} className='w-[5rem] md:w-[7em] -ml-4 cursor-pointer' onClick={() => navigate('/')} />
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
            <Link to = "/">ჩვენს შესახებ</Link>
            <Link to = "/">სერვისები</Link>
            <Link to = "/blogs">ბლოგი</Link>
            <Link to = "/apply">შემოგვიერთდი</Link>
          </nav>
          )}
         </div>


     
         <h2 onClick={() => navigate('/profile')} className='text-blue font-bold cursor-pointer'>{userInfo?.isAdmin ? "ადმინი" : userInfo?.username}</h2>

     

       
         {userInfo ? (
           <button  onClick={logoutHandler} className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
           <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
           <span className="relative z-10 text-md">გამოსვლა</span>
         </button>
         ) : (
            <button onClick={() => navigate('/login')} className="relative group overflow-hidden px-8 py-1 bg-blue text-white rounded-md">
            <span className="absolute inset-0 bg-[#F29F58] transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 clip-path-curved"></span>
            <span className="relative z-10 text-md">შესვლა</span>
          </button>
         )}
        
       
       </div>

       <div className='absolute md:hidden right-12'>
          <Menu />
        </div>
   </header>
  )
}

export default NavBar
