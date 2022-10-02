import React, { useState } from "react";
import Logo from './images/logo.png'
import Avatar from './images/avatar.png'
import {MdShoppingBasket, MdAdd, MdLogout} from 'react-icons/md'
import {motion} from 'framer-motion'
import {Link, NavLink} from 'react-router-dom'

import {app} from '../firebase.config'
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Header = () => {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false); 

    //Login
    const login = async () => {
        if (!user) {
          const { user } = await signInWithPopup(firebaseAuth, provider);
          const { refreshToken, providerData } = user;
          console.log(refreshToken)
          localStorage.setItem("user", JSON.stringify(providerData[0]));
          dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
          });
        } else {
          setIsMenu(!isMenu);
        }

    };
  
    //Logout 
    const logout = () => {
        setIsMenu(false)
        localStorage.clear()

        dispatch({
            type: actionType.SET_USER,
            user: null,
        })
    }

  return (
    <header className='fixed z-50 w-screen bg-cardOverlay p-6 px-8 md:p-6 md:px-16'>
        {/** Desktop and Tablet  */}
        <div className='hidden md:flex w-full h-full justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                <img className='w-8 object-cover' src={Logo} alt=" Logo" />
                <p className='text-headingColor text-xl font-bold'> FancyShop</p>
            </Link>

            <div className=' flex items-center gap-8'>
                <motion.ul
                    initial={{opacity: 0, x : 200}}
                    animate={{opacity: 1, x : 1}}
                    exit={{opacity: 0, x : 200}} className='flex items-center gap-8 ml-auto hover: cursor-pointer'>
                    <Link to='/' className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>Home</Link>
                    <Link className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>Menu</Link>
                    <Link className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>About Us</Link>
                    <Link className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out'>Contact Us</Link>
                </motion.ul>

                <motion.div onClick={''} whileTap={{scale: 0.8}} className='relative flex items-center justify-center cursor-pointer'>
                    <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                    <div className='w-5 h-5 -top-1 -right-1 rounded-full bg-cartNumbg absolute flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2 </p>
                    </div>
                </motion.div>

                <div className='relative'>
                    {
                        <motion.img
                            referrerPolicy="no-referrer" 
                            whileTap={{scale : 0.6}} 
                            className='w-8 h-8 cursor-pointer min-w-[40px] min-h-[40px] shadow-sm rounded-full' 
                            src={user ? user?.photoURL : Avatar} 
                            alt={"Display Photo"} 
                            onClick={login}
                        /> 
                    }
                    {
                        isMenu && (
                            <motion.div 
                                initial={{opacity : 0, scale : 0.6}} 
                                animate={{opacity : 1, scale : 1}}
                                exit={{opacity : 0, scale : 0.8}}  className="flex flex-col w-60 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 px-2 py-2">
                                {user.email === "samueloseiboatenglistowell57@gmail.com" && (
                                    <NavLink to={"/createItem"} onClick={() => setIsMenu(false)}>
                                        <p className="px-4 py-2 cursor-pointer hover:bg-slate-200 flex items-center gap-3">
                                            New Item <MdAdd />
                                        </p>
                                    </NavLink>
                                )}
                                <p onClick = {logout} className="flex  px-4 py-2 items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor rounded-sm"> <MdLogout /> Logout</p>
                            </motion.div> 
                        )
                    }
                </div>
            </div>
        </div>

        {/** Mobile View */}
        <div className='flex items-center justify-between md:hidden h-full w-full'>
            <Link to={'/'} className='flex items-center gap-2'>
                <img className='w-8 object-cover' src={Logo} alt=" Logo" />
                <p className='text-headingColor text-xl font-bold'> FancyShop</p>
            </Link>
            <div className=' flex relative items-center gap-6'>
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                    <div className='w-5 h-5 -top-1 -right-1 rounded-full bg-cartNumbg absolute flex items-center justify-center'>
                        <p className='text-xs text-white font-semibold'>2 </p>
                    </div>
                </div>

                {
                    <motion.img 
                        whileTap={{scale : 0.6}} 
                        className='w-8 h-8 cursor-pointer min-w-[40px] min-h-[40px] shadow-sm rounded-full' 
                        src={user ? user?.photoURL : Avatar} 
                        alt={"Display Photo"} 
                        onClick={login}
                    />
                }
                {
                    isMenu && (
                        <motion.div 
                            initial={{opacity : 0, scale : 0.6}} 
                            animate={{opacity : 1, scale : 1}}
                            exit={{opacity : 0, scale : 0.8}}  className="flex flex-col w-60 bg-gray-50 shadow-xl rounded-lg absolute top-12 right-0 px-2 py-2">
                            {
                                user && user.email === "samueloseiboatenglistowell57@gmail.com" && (
                                    <Link to="/createContainer">
                                        <p className="flex px-4 py-2 items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor rounded-sm"> <MdAdd /> New Item</p>
                                    </Link>
                                )
                            }

                            <ul
                                className='flex flex-col '>
                                <li className='px-4 py-2 text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-100 transition-all ease-in-out hover: cursor-pointer'>Home</li>
                                <li className='px-4 py-2 text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out hover: cursor-pointer'>Menu</li>
                                <li className='px-4 py-2 text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-100 transition-all ease-in-out hover: cursor-pointer'>About Us</li>
                                <li className='px-4 py-2 text-base text-textColor hover:text-headingColor duration-100 hover:bg-slate-100 transition-all ease-in-out hover: cursor-pointer'>Contact Us</li>
                            </ul>
                            <p onClick = {logout} className="flex justify-center text-red-400 font-bold px-4 py-2 items-center gap-3 cursor-pointer bg-slate-200 hover:bg-slate-300 transition-all duration-100 ease-in-out rounded-sm"> <MdLogout /> Logout</p>
                        </motion.div> 
                    )
                }
            </div>
        </div>
    </header>
  )
}

export default Header