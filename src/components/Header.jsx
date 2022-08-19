import React, { /* useContext, useEffect, useState */ } from "react";
import Logo from './images/logo.png'
import Avatar from './images/avatar.png'
import {MdShoppingBasket} from 'react-icons/md'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {app} from '../firebase.config'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [user, dispatch] = useStateValue();

    const login = async () =>{
        if(!user){
            const {
                user: {refreshToken, providerData}, 
            } = await signInWithPopup(firebaseAuth, provider);
    
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        }else{
            alert('User already exist logout')
        }
        
    }
 
  return (
    <header className='fixed z-50 w-screen  p-6 px-16'>
        {/** Desktop and Tablet  */}
        <div className='hidden md:flex w-full h-full justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                <img className='w-8 object-cover' src={Logo} alt=" Logo" />
                <p className='text-headingColor text-xl font-bold'> FancyShop</p>
            </Link>

            <div className=' flex items-center gap-8'>
                <ul className='flex items-center gap-8 ml-auto hover: cursor-pointer'>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>Home</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>Menu</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>About Us</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>Services</li>
                    <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>Contact Us</li>
                </ul>

                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                    <div className='w-5 h-5 -top-1 -right-1 rounded-full bg-cartNumbg absolute flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>

                <div className='relative'>
                    <motion.img 
                        whileTap={{scale : 0.6}} 
                        className='w-8 h-8 cursor-pointer min-w-[40px] min-h-[40px] shadow-sm rounded-full' 
                        src={user ? user.photoURL : Avatar} 
                        alt="User Profile" 
                        onClick={login}
                    />
                    <div className="flex flex-col w-40 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 px-5 py-2">
                        <p>New Item</p>
                        <p>Logout</p>
                    </div>
                </div>
                
            </div>
        </div>

        {/** Mobile View */}
        <div className='flex md:hidden h-full w-full'>
            here we go 
        </div>
    </header>
  )
}

export default Header