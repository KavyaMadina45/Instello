import React from 'react'
import logo from '../assets/logo.svg';
import home from '../assets/home.png';
import search from '../assets/search.png';
import explore from '../assets/explore.png';
import reels from '../assets/reels.png';
import message from '../assets/message.png'
import blue_heart from '../assets/blue_heart.png'
import create from '../assets/create.png';
import profile from '../assets/profile.png';
import more from '../assets/more.png';
import meta from '../assets/meta.png';

import { Link } from "react-router-dom";

const Sidebar = () => {
  



return (

<nav className="-mt-8 flex flex-col items-start bg-black text-white text-lg font-semibold  h-[calc(100vh+40px)]
 w-60 p-2 border-r border-gray-800">
  
  {/* Logo */}
  <div className="mb-1">
    <img
      src={logo}
      alt="Logo"
      className="w-40 object-contain ml-2"
    />
  </div>


   {/* Links with icons */}
  
   <div className="space-y-6">

        <Link to="/feed" className='flex items-center gap-4'>
       <div className="flex items-center space-x-2 cursor-pointer ">
       <img src={home} alt="home" className='h-8 w-auto object-contain'/>
       <span>Home</span>
       </div>
       </Link>


      <Link to="/search" className='flex items-center gap-4'>
       <div className="flex items-center space-x-3 cursor-pointer hover:text-white">
       <img src={search} alt="Search" className='h-5 ml-2 w-auto object-contain'/>
       <span>Search</span>
       </div>
      </Link>

      <Link to="/explore" className="flex items-center gap-4">
       <div className="flex items-center space-x-3 cursor-pointer hover:text-white">
       <img src={explore} alt="explore" className='h-5 ml-2 w-auto object-contain'/>
       <span>Explore</span>
       </div>
       </Link>

      <Link to="/reels" className='flex items-center gap-4'>
       <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
       <img src={reels} alt="reels" className='h-4.5 ml-2 w-auto object-contain'/>
       <span>Reels</span>
       </div>
       </Link>

      <Link to="/messages" className='flex items-center gap-4'>
       <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
       <img src={message} alt="messages" className='h-4.5 ml-2 w-auto object-contain'/>
       <span>Messages</span>
       </div>
      </Link>

      
       <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
       <img src={blue_heart} alt="notification" className='h-4.5 ml-2 w-auto object-contain'/>
       <span>Notifications</span>
       </div>
       
      <Link className='flex items-center gap-4'>
       <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
       <img src={create} alt="create" className='h-4.5 ml-2 w-auto object-contain'/>
       <span>Create</span>
       </div>
       </Link>

      <Link to="/profile" className='flex items-center gap-4'>
        <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
       <img src={profile} alt="profile" className='h-5.5 ml-2 w-auto object-contain'/>
       <span>Profile</span>
       </div>
       </Link>

       <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
       <img src={more} alt="more" className='h-5 ml-2 w-auto object-contain'/>
       <span>More</span>
       </div>

       <div className="flex items-center space-x-4 cursor-pointer hover:text-white">
       <img src={meta} alt="meta" className=' space-y-10 h-5 ml-2 w-auto object-contain'/>
       <span>Also from Meta</span>
       </div>

   </div>
  
</nav>



  )
}

export default Sidebar
