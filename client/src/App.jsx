import React from 'react';
import Messages from './pages/Messages';
import ChatBox from './pages/ChatBox';
import Connections from './pages/Connections';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import CreatePost from './pages/CreatePost';
import Layout from './pages/Layout';

import { useUser } from '@clerk/clerk-react';
import Search from './pages/Search';
import UserProfile from './pages/UserProfile';
import Explore from './pages/Explore';
import Reels from './pages/Reels';


const App = () => {
  const { user } = useUser();




  return (
    <>
      <Routes>

        {/* ROOT */}
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/feed" replace />}
        />

        {/* LAYOUT ROUTES */}
        <Route path="/" element={user ? <Layout /> : <Login />}>
          <Route path="feed" element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="search" element={<Search/>}/>
          <Route path="/user/:username" element={<UserProfile/>} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/reels" element={<Reels/>}/>
        </Route>

      </Routes>
    </>
  );
};

export default App;
