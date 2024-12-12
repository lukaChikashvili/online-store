import { ArrowDown, ChevronDown, Heart, Home, HomeIcon, KeyRound, LogOut, ShoppingBag, ShoppingCart, UserPlus } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useLogoutMutation } from '../redux/api/userSlice';
import { logout } from '../redux/features/auth/authSlice';

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
         navigate('/login');

      } catch (error) {
         console.log(error)
      }
    }


  return (
   <header className='w-full h-[5rem] flex items-center justify-between px-[4rem]   '>
       <div>
         <h1 className='text-[#81BFDA] font-bold text-3xl' >BAIA</h1>
       </div>


      

       <div className='flex items-center gap-12 text-lg'>
         <div>
         <nav className='flex items-center gap-6 '>
         <Link to = "/">ჩვენს შესახებ</Link>
         <Link to = "/">სერვისები</Link>
         <Link to = "/">ბლოგი</Link>
         <Link to = "/">სიახლეები</Link>
       </nav>
         </div>
     

       
         
         <Link to = "/login"  className='bg-[#81BFDA] px-12 py-0.5 rounded-md shadow-lg text-[16px] text-white font-bold'>შესვლა</Link>
       </div>
   </header>
  )
}

export default NavBar
