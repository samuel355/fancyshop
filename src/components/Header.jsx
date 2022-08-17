import React from 'react'
import Logo from './images/logo.png'
import Avatar from './images/avatar.png'
import {MdShoppingBasket} from 'react-icons/md'

export const Header = () => {
  return (
    <header className='fixed z-50 w-screen  p-6 px-16'>
        {/** Desktop and Tablet  */}
        <div className='hidden md:flex w-full h-full justify-between'>
            <div className='flex items-center gap-2'>
                <img className='w-8 object-cover' src={Logo} alt=" Logo" />
                <p className='text-headingColor text-xl font-bold'> FancyShop</p>
            </div>

            <div className=' flex justify-between items-center gap-8'>
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

                <img className='w-8 h-8 cursor-pointer min-w-[40px] min-h-[40px] shadow-sm' src={Avatar} alt="User Profile" />
            </div>
        </div>

        {/** Mobile View */}
        <div className='flex md:hidden h-full w-full'>
            here we go 
        </div>
    </header>
  )
}
