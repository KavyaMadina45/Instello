// import React, { useState } from 'react'
// import Sidebar from '../components/Sidebar'
// import { Outlet } from 'react-router-dom'
// import {Menu, X} from 'lucide-react';

// import { useUser } from '@clerk/clerk-react'
// const Layout = () => {


// const { isLoaded, isSignedIn } = useUser();
// const [sidebarOpen,setSidebarOpen]=useState(false)

// if (!isLoaded) {
//     return <Loading />;
//   }

//  // 🔥 If loaded & user NOT signed in → redirect to login
//   if (isLoaded && !isSignedIn) {
//     return <Navigate to="/" replace />;
//   }

//   return (
// <div className='flex h-screen w-full overflow-hidden'>
//    <Sidebar />
//        <div className='flex-1 bg-black overflow-y-auto'>
//           <Outlet/>
//        </div>
       
//     {
//       sidebarOpen ?
//       <X  className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={()=>setSidebarOpen(false)}/>
//       :
//       <Menu className='absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden' onClick={()=>setSidebarOpen(true)}/>
//     }

// </div>

//   )
// }

// export default Layout



// import React, { useState } from 'react'
// import Sidebar from '../components/Sidebar'
// import Suggestions from '../components/Suggestions'
// import { Outlet, Navigate } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'
// import { useUser } from '@clerk/clerk-react'

// const Layout = () => {
//   const { isLoaded, isSignedIn } = useUser();
//   const [sidebarOpen, setSidebarOpen] = useState(false)

//   if (!isLoaded) return <div>Loading...</div>;
//   if (!isSignedIn) return <Navigate to="/" replace />;

//   return (
//     <div className="flex h-screen w-full overflow-hidden bg-black">
      
//       {/* LEFT SIDEBAR */}
//       <Sidebar />

//       {/* CENTER FEED AREA */}
//       <div className="w-1/2 overflow-y-auto hide-scrollbar">
//         <Outlet />
//       </div>

//       {/* RIGHT SUGGESTIONS PANEL */}
//       <div className="w-1/2 hidden lg:block w-[320px] mt-10 overflow-y-auto border-l-0 border-gray-800 hide-scrollbar">
//         <Suggestions />
//       </div>

//       {/* MOBILE MENU TOGGLE */}
//       {
//         sidebarOpen ?
//           <X className='absolute top-3 right-3 p-2 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
//              onClick={() => setSidebarOpen(false)} />
//           :
//           <Menu className='absolute top-3 right-3 p-2 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden'
//              onClick={() => setSidebarOpen(true)} />
//       }

//     </div>
//   )
// }

// export default Layout




import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Suggestions from '../components/Suggestions'
import { Outlet, Navigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useUser } from '@clerk/clerk-react'

import { useLocation } from "react-router-dom";


const Layout = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false)


const location = useLocation();
const hideRightSection =
  location.pathname.startsWith("/messages") ||
  location.pathname.startsWith("/profile") ||
  location.pathname.startsWith("/search")||
  location.pathname.startsWith("/user")||
  location.pathname.startsWith("/explore")||
  location.pathname.startsWith("/reels");




  if (!isLoaded) return <div>Loading...</div>;
  if (!isSignedIn) return <Navigate to="/" replace />;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black">

      {/* LEFT SIDEBAR — HIDE ON MOBILE */}
      <div className="hidden md:block border-r border-gray-800">
        <Sidebar />
      </div>

     {/* MOBILE DRAWER SIDEBAR */}
<div
  className={`
    fixed top-0 left-0 h-full w-64 bg-black z-50 p-4 border-r border-gray-800 md:hidden
    transform transition-transform duration-400 ease-out
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
>
  <Sidebar />
</div>


      {/* MAIN FEED — FULL WIDTH ON MOBILE */}
      <div className="flex-1 overflow-y-auto hide-scrollbar max-w-5xl mx-auto w-full px-6">

        <Outlet />
      </div>

      {/* RIGHT SUGGESTIONS — ONLY SHOW ON LARGE SCREENS */}
      {!hideRightSection && (
  <div className="mr-10 hidden lg:block w-[320px] mt-10 overflow-y-auto border-l-0 hide-scrollbar">
    <Suggestions />
  </div>
)}

      {/* MOBILE TOGGLE BUTTON */}
      {
        sidebarOpen ?
          <X
            className='absolute top-3 right-3 p-2 bg-black rounded-md shadow w-10 h-10 text-sky-300 md:hidden'
            onClick={() => setSidebarOpen(false)}
          />
          :
          <Menu
            className='absolute top-3 right-3 p-2 bg-black rounded-md shadow w-10 h-10 text-sky-300 md:hidden'
            onClick={() => setSidebarOpen(true)}
          />
      }

    </div>
  )
}

export default Layout








































// import React from "react";
// import { Home, Search, Eye, Video, MessageCircle, Heart, Plus, User, MoreHorizontal, Download, Send } from "lucide-react";
// import logo from '../assets/logo.svg';
// // Sample data
// const stories = [
//   { id: 1, name: "richare_12", img: "/assets/story1.jpg" },
//   { id: 2, name: "raju_farm", img: "/assets/story2.jpg" },
//   { id: 3, name: "suhas", img: "/assets/story3.jpg" },
//   { id: 4, name: "jr_tiger", img: "/assets/story4.jpg" },
//   { id: 5, name: "sodier_kiran", img: "/assets/story5.jpg" },
// ];

// const posts = [
//   {
//     id: 1,
//     username: "siri@fashiondesign",
//     location: "Hyderabad",
//     time: "1w",
//     img: "/assets/post1.jpg",
//   },
// ];

// const suggestions = [
//   { username: "@vaishu.m" },
//   { username: "rajiv_143" },
//   { username: "kavya_606" },
//   { username: "sudheer@345" },
//   { username: "@Chandhu_78" },
// ];

// const FeedPage = () => {
//   return (
//     <div className="flex bg-[#1E1E1E] text-white min-h-screen font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 flex flex-col justify-between p-6 border-r border-gray-700">
//         <div>
//           <img
//          src={logo}
//          alt="Logo"
//          className="h-27  w-auto object-contain"
//         />
//           <nav className="flex flex-col gap-6">
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><Home /> Home</a>
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><Search /> Search</a>
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><Eye /> Explore</a>
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><Video /> Reels</a>
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><MessageCircle /> Messages</a>
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><Heart /> Notifications</a>
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><Plus /> Create</a>
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><User /> Profile</a>
//             <a href="#" className="flex items-center gap-3 hover:text-blue-500"><MoreHorizontal /> More</a>
//           </nav>
//           <div className="mt-8 flex items-center gap-2 text-gray-400">
//             <span>Also from Meta</span>
//           </div>
//         </div>
//       </aside>

//       {/* Main feed */}
//       <main className="flex-1 p-6">
//         {/* Stories */}
//         <div className="flex gap-4 mb-6 overflow-x-auto">
//           {stories.map(story => (
//             <div key={story.id} className="flex flex-col items-center">
//               <img src={story.img} alt={story.name} className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover" />
//               <span className="text-xs mt-2">{story.name}</span>
//             </div>
//           ))}
//         </div>

//         {/* Posts */}
//         {posts.map(post => (
//           <div key={post.id} className="bg-[#2A2A2A] mb-6 rounded-lg overflow-hidden">
//             <div className="flex items-center p-4 gap-4">
//               <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
//               <div className="flex-1">
//                 <p className="font-semibold">{post.username}</p>
//                 <p className="text-xs text-gray-400">{post.location} · {post.time}</p>
//               </div>
//               <MoreHorizontal className="text-gray-400" />
//             </div>
//             <img src={post.img} alt="post" className="w-full object-cover" />
//             <div className="flex items-center gap-4 p-4 text-gray-300">
//               <Heart className="hover:text-red-500 cursor-pointer" />
//               <MessageCircle className="hover:text-blue-500 cursor-pointer" />
//               <Send className="hover:text-blue-500 cursor-pointer" />
//               <Download className="ml-auto hover:text-blue-500 cursor-pointer" />
//             </div>
//           </div>
//         ))}
//       </main>

//       {/* Right suggestions panel */}
//       <aside className="w-80 p-6 border-l border-gray-700 flex flex-col justify-between">
//         <div>
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <p className="font-semibold">kanna_123</p>
//               <p className="text-gray-400 text-sm">Karthik</p>
//             </div>
//             <button className="text-blue-500 text-sm">Switch</button>
//           </div>

//           <div className="flex justify-between text-gray-400 mb-2">
//             <p>Suggested for you</p>
//             <p className="cursor-pointer">See all</p>
//           </div>

//           {suggestions.map((s, idx) => (
//             <div key={idx} className="flex items-center justify-between mb-3">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
//                 <p className="text-sm">{s.username}</p>
//               </div>
//               <button className="text-blue-500 text-sm">Follow</button>
//             </div>
//           ))}
//         </div>

//         <div className="text-gray-500 text-xs mt-4">
//           <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language · Meta verified</p>
//           <p className="mt-2">© 2025 Instello. All Rights Reserved.</p>
//         </div>
//       </aside>
//     </div>
//   );
// };

// export default FeedPage;
