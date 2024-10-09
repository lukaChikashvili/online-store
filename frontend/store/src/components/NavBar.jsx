import { Heart, Home, HomeIcon, KeyRound, ShoppingBag, ShoppingCart, UserPlus } from 'lucide-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLoginMutation } from '../redux/api/userSlice';
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

    const [logoutApiCall] = useLoginMutation();
    
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
    <div style={{zIndex: 999}} className={`${showSidebar ? "hidden" : "flex"} 
    xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white 
    bg-black w-[4%] hover:w-[15%] h-[100vh] fixed`} id='navigation-container' >
        <div>
        <div className='flex flex-col justify-center space-y-4'>
           <Link to = "/" className='flex items-center  transition-transform transform hover:translate-x-2'>
              <HomeIcon className='mr-2 mt-[3rem]'/>
              <span className='mt-[3rem] nav-item-name hidden '>HOME</span>{" "}
           </Link>
        
        </div>

        <div className='flex flex-col justify-center space-y-4'>
           <Link to = "/cart" className='flex items-center  transition-transform transform hover:translate-x-2'>
              <ShoppingBag className='mr-2 mt-[3rem]'/>
              <span className='mt-[3rem] nav-item-name hidden'>SHOP</span>{" "}
           </Link>
        
        </div>
      

        <div className='flex flex-col justify-center space-y-4'>
           <Link to = "/" className='flex items-center  transition-transform transform hover:translate-x-2'>
              <ShoppingCart className='mr-2 mt-[3rem]'/>
              <span className='mt-[3rem] nav-item-name hidden'>CART</span>{" "}
           </Link>
        
        </div>

            

        <div className='flex flex-col justify-center space-y-4'>
           <Link to = "/favorite" className='flex items-center  transition-transform transform hover:translate-x-2'>
              <Heart className='mr-2 mt-[3rem]'/>
              <span className='mt-[3rem] nav-item-name hidden'>Favorite</span>{" "}
           </Link>
        
        </div>
        </div>


     <div className='relative'>
       <button onClick={toggleDropdown}
        className='flex items-center text-gray-8000 focus:outline-none'
            
        > {userInfo ? (
           <span className='text-white'>{userInfo.username}</span>
        ) : (
           <></>
        )} </button>
     </div>




        <ul>
            <li>
            <Link to = "/login" className='flex items-center  transition-transform transform hover:translate-x-2'>
              <KeyRound className='mr-2 mt-[3rem]'/>
              <span className='mt-[3rem] nav-item-name hidden'>Login</span>{" "}
           </Link>
            </li>

            <li>
            <Link to = "/register" className='flex items-center  transition-transform transform hover:translate-x-2'>
              <UserPlus className='mr-2 mt-[3rem]'/>
              <span className='mt-[3rem] nav-item-name hidden'>Register</span>{" "}
           </Link>
            </li>
        </ul>
  
      
    </div>
  )
}

export default NavBar
