import React from 'react'
import HomeContainer from './HomeContainer'
import {motion} from 'framer-motion'

const MainContainer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
        <HomeContainer />

        <section className='w-full my-6'>
            <div className='w-full flex items-center justify-between'>
                <p className='text-2xl font-semibold  text-headingColor relative before:absolute before:rounded-lg before:w-24 before:h-1 before:-bottom-3 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-700 transition-all ease-in-out duration-100'> Our Fresh & Healthy Fruits</p>
                <div className='hidden md:flex gap-3 items-center'>
                    <motion.div 
                        whileTap={{scale : 0.75}}
                        className='w-8 h-8 rounded-2xl bg-orange-300 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg hover:bg-orange-600 flex items-center justify-center'></motion.div>
                    <motion.div 
                        whileTap={{scale : 0.75}}
                        className='w-8 h-8 rounded-2xl bg-orange-300 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg hover:bg-orange-600 flex items-center justify-center'></motion.div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MainContainer