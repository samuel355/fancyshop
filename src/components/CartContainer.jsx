import React from 'react'
import { MdOutlineKeyboardBackspace, MdDeleteOutline, MdClose } from 'react-icons/md'
import {motion} from 'framer-motion'
import {RiRefreshFill} from 'react-icons/ri'
import {BiPlus, BiMinus} from 'react-icons/bi'
 

const CartContainer = () => {
    return (
        <div className='z-[101] fixed top-[88px] w-full md:w-400 right-0 h-[90vh] bg-white drop-shadow-md flex flex-col'>
            <div className='w-full p-4 cursor-pointer'>
                <div className='flex items-center justify-between'>
                    <motion.p whileTap={{scale: 0.8}}> <MdOutlineKeyboardBackspace className='text-textColor text-3xl' /></motion.p>
                    <p className='text-lg font-semibold text-textColor'>Cart</p>
                    <motion.p whileTap={{scale: 0.8}} className='flex items-center gap-2 p-1 px-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base'>Clear Cart <RiRefreshFill /> </motion.p>
                </div>
            </div>

            {/* Cart section */}
            <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
                <div className='w-full h-375 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                    {/* Cart Item */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex justify-center items-center flex-col'>
                        <div className='flex items-center justify-between gap-4'>
                            <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src="https://firebasestorage.googleapis.com/v0/b/fancyshop-f9c6f.appspot.com/o/images%2F1664376158548_r5.png?alt=media&token=5242e99c-6a53-4b8c-bea6-3007f8cf097e" alt="" />
                            <p className='text-base text-gray-50 Chocolate Vanilla'>Chocolate Vanilla</p>
                            <p className='block text-gray-300 text-lg font-semibold'>$ 5.09 </p>
                            <p ><MdClose size={20} color='red' /> </p>
                        </div>

                        {/*Quantity button */}
                        <div className='group flex justify-center items-center gap-4 m-auto -mt-2 mb-2 cursor-pointer'>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiMinus size={20} className='text-gray-50' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'> 2 </p>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiPlus size={20} className='text-gray-50' />
                            </motion.div>
                        </div>
                    </div>

                    {/* Cart Item */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex justify-center items-center flex-col'>
                        <div className='flex items-center justify-between gap-4'>
                            <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src="https://firebasestorage.googleapis.com/v0/b/fancyshop-f9c6f.appspot.com/o/images%2F1664376158548_r5.png?alt=media&token=5242e99c-6a53-4b8c-bea6-3007f8cf097e" alt="" />
                            <p className='text-base text-gray-50 Chocolate Vanilla'>Chocolate Vanilla</p>
                            <p className='block text-gray-300 text-lg font-semibold'>$ 5.09 </p>
                            <p ><MdClose size={20} color='red' /> </p>
                        </div>

                        {/*Quantity button */}
                        <div className='group flex justify-center items-center gap-4 m-auto -mt-2 mb-2 cursor-pointer'>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiMinus size={20} className='text-gray-50' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'> 2 </p>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiPlus size={20} className='text-gray-50' />
                            </motion.div>
                        </div>
                    </div>

                    {/* Cart Item */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex justify-center items-center flex-col'>
                        <div className='flex items-center justify-between gap-4'>
                            <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src="https://firebasestorage.googleapis.com/v0/b/fancyshop-f9c6f.appspot.com/o/images%2F1664376158548_r5.png?alt=media&token=5242e99c-6a53-4b8c-bea6-3007f8cf097e" alt="" />
                            <p className='text-base text-gray-50 Chocolate Vanilla'>Chocolate Vanilla</p>
                            <p className='block text-gray-300 text-lg font-semibold'>$ 5.09 </p>
                            <p ><MdClose size={20} color='red' /> </p>
                        </div>

                        {/*Quantity button */}
                        <div className='group flex justify-center items-center gap-4 m-auto -mt-2 mb-2 cursor-pointer'>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiMinus size={20} className='text-gray-50' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'> 2 </p>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiPlus size={20} className='text-gray-50' />
                            </motion.div>
                        </div>
                    </div>

                    {/* Cart Item */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex justify-center items-center flex-col'>
                        <div className='flex items-center justify-between gap-4'>
                            <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src="https://firebasestorage.googleapis.com/v0/b/fancyshop-f9c6f.appspot.com/o/images%2F1664376158548_r5.png?alt=media&token=5242e99c-6a53-4b8c-bea6-3007f8cf097e" alt="" />
                            <p className='text-base text-gray-50 Chocolate Vanilla'>Chocolate Vanilla</p>
                            <p className='block text-gray-300 text-lg font-semibold'>$ 5.09 </p>
                            <p ><MdClose size={20} color='red' /> </p>
                        </div>

                        {/*Quantity button */}
                        <div className='group flex justify-center items-center gap-4 m-auto -mt-2 mb-2 cursor-pointer'>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiMinus size={20} className='text-gray-50' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'> 2 </p>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiPlus size={20} className='text-gray-50' />
                            </motion.div>
                        </div>
                    </div>

                    {/* Cart Item */}
                    <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex justify-center items-center flex-col'>
                        <div className='flex items-center justify-between gap-4'>
                            <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src="https://firebasestorage.googleapis.com/v0/b/fancyshop-f9c6f.appspot.com/o/images%2F1664376158548_r5.png?alt=media&token=5242e99c-6a53-4b8c-bea6-3007f8cf097e" alt="" />
                            <p className='text-base text-gray-50 Chocolate Vanilla'>Chocolate Vanilla</p>
                            <p className='block text-gray-300 text-lg font-semibold'>$ 5.09 </p>
                            <p ><MdClose size={20} color='red' /> </p>
                        </div>

                        {/*Quantity button */}
                        <div className='group flex justify-center items-center gap-4 m-auto -mt-2 mb-2 cursor-pointer'>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiMinus size={20} className='text-gray-50' />
                            </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'> 2 </p>
                            <motion.div whileTap={{scale: 0.75}}>
                                <BiPlus size={20} className='text-gray-50' />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Bottom Cart Total Buttons */}
                <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center px-8'>
                    <div className='w-full flex items-center justify-between mt-24'>
                        <p className='text-gray-400 text-lg'>Sub Total</p>
                        <p className='text-gray-400 text-lg'>$ 44.5</p>
                    </div>
                    <div className='w-full flex items-center justify-between mt-5'>
                        <p className='text-gray-400 text-lg'>Delivery</p>
                        <p className='text-gray-400 text-lg'>$ 2 </p>
                    </div>

                    <div className='w-full border-b border-gray-600 my-2 mt-8'> </div>

                    <div className='w-full flex items-center justify-between mt-10'>
                        <p className='text-gray-400 text-xl'>Total</p>
                        <p className='text-gray-400 text-lg'>$ 46.5 </p>
                    </div>
                    <div className='w-full mt-10 text-center'>
                        <motion.button whileTap={{scale: 0.8}} className='bg-white w-full py-3 rounded-lg hover:bg-zinc-900 hover:text-white'> Proceed to Checkout</motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer