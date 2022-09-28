import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import {motion} from 'framer-motion'

const RowContainer = ({flag, data}) => {
    console.log(data)
    return (
        <div className={`w-full catBack my-10 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'} `}>
            {
                data && data.map((item) => (
                    <div key={item.id} className='w-300 ml-3 md:w-340 h-auto rounded-lg p-2  my-12 bg-cardOverlay shadow-sm backdrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full flex items-center justify-between'>
                            <motion.img whileHover={{scale: 1.2}} className='w-40 -mt-8 drop-shadow-2xl' src="https://firebasestorage.googleapis.com/v0/b/fancyshop-f9c6f.appspot.com/o/images%2F1664376158548_r5.png?alt=media&token=5242e99c-6a53-4b8c-bea6-3007f8cf097e" alt="" />
                            <motion.div 
                                whileTap={{scale: 0.7}} 
                                className='w-7 h-7 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:shadow-md'>
                                <MdShoppingBasket className='text-white' />
                            </motion.div>
                        </div>
                        <div className='w-full flex flex-col items-end justify-end'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>Chocolate & Vanilla</p>
                            <p className='mt-1 text-sm text-gray-500'> 5 Calories</p>
                            <div className='flex items-center gap-8'>
                                <p className='text-base text-headingColor font-semibold'>$ <span className='text-sm text-red-500'>5.25</span></p>
                            </div>
                        </div>
                    </div> 
                ))
            }
        </div>
    )
}

export default RowContainer