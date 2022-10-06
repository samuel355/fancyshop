import React, { useState, useEffect } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import {motion} from 'framer-motion'
import { useRef } from 'react'
import NotFound from './images/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({flag, data, scrollValue}) => {
    
    const rowContainer = useRef()

    const [items, setItems] = useState([]);
    const [{cartItems}, dispatch] = useStateValue()

    const addToCart = (item) => {
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items
        })
        // Add cart details to LocalStorage
        localStorage.setItem("cartItems", JSON.stringify(items))
    }

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue;
    },[scrollValue])

    useEffect(() => {
        addToCart();
    },[items]);

    return (
        <div  
            ref={rowContainer}
            className={`w-full flex items-center gap-3 catBack my-10 scroll-smooth ${
                flag ? 'overflow-x-scroll scrollbar-none' 
                : 'overflow-x-hidden flex-wrap justify-center'
            } `}>
            {
                data && data.length > 0 ? data.map((item) => (
                    <div key={item.id} className='w-300 min-w-[300px] md:min-w-[340px] mx-3 md:w-340 h-auto rounded-lg p-2  my-3 bg-cardOverlay shadow-sm backdrop-blur-lg hover:drop-shadow-lg'>
                        <div className='w-full flex items-center justify-between'>
                            <motion.img whileHover={{scale: 1.2}} className='w-40 h-40 -mt-4 drop-shadow-2xl object-contain' src={item?.imageURL} alt={item?.title} />
                            <motion.div 
                                whileTap={{scale: 0.7}} 
                                className='w-7 h-7 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:shadow-md'>
                                <MdShoppingBasket onClick={()=> setItems([...cartItems, item])} className='text-white' />
                            </motion.div>
                        </div>
                        <div className='w-full flex flex-col items-end justify-end'>
                            <p className='text-textColor font-semibold text-base md:text-lg'>{item?.title}</p>
                            <p className='mt-1 text-sm text-gray-500'> {item?.calories} Calories</p>
                            <div className='flex items-center gap-8'>
                                <p className='text-base text-headingColor font-semibold'>$ <span className='text-sm text-red-500'>{item?.price}</span></p>
                            </div>
                        </div>
                    </div> 
                )) : (
                    <div className='w-full flex-col flex items-center justify-center'>
                        <img className='w-40 h-40' src={NotFound} alt="" />
                        <p className='mb-5 mt-3 text-xl font-semibold capitalize '>No Food found for this menu </p>
                    </div>
                )
            }
        </div>
    )
}

export default RowContainer