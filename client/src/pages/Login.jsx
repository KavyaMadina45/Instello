import React from 'react';
import logo from '../assets/logo.svg';
import left_home from '../assets/left_home.png';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>

      {/* LOGO - bigger + closer on mobile, normal on desktop */}
      <img 
        src={logo} 
        alt="logo" 
        className='h-50 mt-1 ml-2 mb-[-90px] object-contain md:h-40 md:mt-4 md:ml-4 md:mb-0'
      />

      {/* LEFT IMAGE - hidden on mobile */}
      <img 
        src={left_home} 
        alt="group_users" 
        className='hidden md:block max-w-[350px] w-full object-contain ml-10'
      />

      {/* RIGHT SIDE LOGIN FORM */}
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
        <SignIn forceRedirectUrl="/feed"
          appearance={{
            elements: {
              rootBox: "scale-90 w-[320px]",
              card: "w-full",
            }
          }}
        />
      </div>

    </div>
  );
}

export default Login;
