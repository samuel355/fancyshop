import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import {motion} from 'framer-motion'

const RowContainer = ({flag, data}) => {
    console.log(data)
    return (
        <div className={`w-full flex items-center catBack my-10 ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'} `}>
            {
                data && data.map((item) => (
                    <div key={item.id} className='w-300 min-w-[300px] md:min-w-[340px] ml-3 md:w-340 h-auto rounded-lg p-2  my-12 bg-cardOverlay shadow-sm backdrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full flex items-center justify-between'>
                            <motion.img whileHover={{scale: 1.2}} className='w-40 h-40 -mt-8 drop-shadow-2xl' src={item.imageURL} alt={item.title} />
                            <motion.div 
                                whileTap={{scale: 0.7}} 
                                className='w-7 h-7 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:shadow-md'>
                                <MdShoppingBasket className='text-white' />
                            </motion.div>
                        </div>
                        <div className='w-full flex flex-col items-end justify-end'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>{item.title}</p>
                            <p className='mt-1 text-sm text-gray-500'> {item.calories} Calories</p>
                            <div className='flex items-center gap-8'>
                                <p className='text-base text-headingColor font-semibold'>$ <span className='text-sm text-red-500'>{item.price}</span></p>
                            </div>
                        </div>
                    </div> 
                ))
            }
        </div>
    )
}

export default RowContainer