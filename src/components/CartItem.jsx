import React from 'react'
import {motion} from 'framer-motion'
import {BiPlus, BiMinus} from 'react-icons/bi'
import { MdClose } from 'react-icons/md'

const CartItem = ({item}) => {
    return (
        <div className='w-full p-1 px-2 rounded-lg bg-cartItem flex justify-center items-center flex-col'>
            <div className='flex items-center justify-between gap-4'>
                <img className='w-20 h-20 max-w-[60px] rounded-full object-contain' src={item.imageURL} alt="" />
                <p className='text-base text-gray-50 Chocolate Vanilla'>{item?.title}</p>
                <p className='block text-gray-300 text-lg font-semibold'>$ {item?.price}</p>
                <p ><MdClose size={20} color='red' /> </p>
            </div>

            {/*Quantity button */}
            <div className='group flex justify-center items-center gap-4 m-auto -mt-2 mb-2 cursor-pointer'>
                <motion.div whileTap={{scale: 0.75}}>
                    <BiMinus size={20} className='text-gray-50' />
                </motion.div>
                <p className='w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'> {item?.qty} </p>
                <motion.div whileTap={{scale: 0.75}}>
                    <BiPlus size={20} className='text-gray-50' />
                </motion.div>
            </div>
        </div>
    )
}

export default CartItem