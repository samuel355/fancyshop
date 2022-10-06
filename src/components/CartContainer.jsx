import React from 'react'
import { MdOutlineKeyboardBackspace,} from 'react-icons/md'
import {motion} from 'framer-motion'
import EmptyCart from './images/emptyCart.svg'
import {RiRefreshFill} from 'react-icons/ri'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import CartItem from './CartItem'
 
const CartContainer = () => {

    const [{cartShow, cartItems, user}, dispatch] = useStateValue();

    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }

    return (
        <motion.div 
            initial={{opacity: 0, x: 200}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 200}}
            
            className='z-[101] fixed top-[88px] w-full md:w-400 right-0 h-[75vh] bg-white drop-shadow-md flex flex-col'>
            <div className='w-full p-4 cursor-pointer'>
                <div className='flex items-center justify-between'>
                    <motion.p whileTap={{scale: 0.8}} onClick={showCart}> <MdOutlineKeyboardBackspace className='text-textColor text-3xl' /></motion.p>
                    <p className='text-lg font-semibold text-textColor'>Cart</p>
                    <motion.p whileTap={{scale: 0.8}} className='flex items-center gap-2 p-1 px-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base'>Clear Cart <RiRefreshFill color='red' /> </motion.p>
                </div>
            </div>

            {/* Cart section */}
            {
                cartItems && cartItems.length > 0 ? (
                    <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
                        <div className='w-full h-400 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                            {/* Cart Item */}

                            {
                                cartItems && cartItems.map((item) => (
                                    <CartItem item={item} />
                                ))
                            }

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
                            {
                                user ? (
                                    <div className='w-full text-center mb-4 mt-3'>
                                        <motion.button whileTap={{scale: 0.8}} className='bg-orange-400 w-full py-2 rounded-full hover:bg-zinc-900 hover:text-white'> Proceed to Checkout</motion.button>
                                    </div>
                                ) : (
                                    <div className='w-full text-center mb-4 mt-3'>
                                        <motion.button whileTap={{scale: 0.8}} className='bg-orange-400 w-full py-2 rounded-full hover:bg-zinc-900 hover:text-white'>Login to Proceed</motion.button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ) : (
                    <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                        <img src={EmptyCart} className="w-300" alt="" />
                        <p className='text-xl text-textColor font-semibold'>Add Som Items to your cart</p>
                    </div>
                )
            }
            
        </motion.div>
    )
}

export default CartContainer