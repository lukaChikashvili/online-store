import { Home, HomeIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
   
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


  return (
    <div style={{zIndex: 999}} className={`${showSidebar ? "hidden" : "flex"} 
    xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white 
    bg-black w-[4%] hover:w-[15%] h-[100vh] fixed`} id='navigation-container' >
        <div className='flex flex-col justify-center space-y-4'>
           <Link to = "/" className='flex items-center  transition-transform transform hover:translate-x-2'>
              <HomeIcon className='mr-2 mt-[3rem]'/>
              <span className='mt-[3rem] nav-item-name hidden'>HOME</span>{" "}
           </Link>
        
        </div>
      
    </div>
  )
}

export default NavBar
