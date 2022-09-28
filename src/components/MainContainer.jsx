import React from 'react'
import HomeContainer from './HomeContainer'

const MainContainer = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
        <HomeContainer />

        <section className='w-full'>
            <div className='w-full flex items-center justify-between'>
                <p className='text-2xl font-semibold  text-headingColor relative before:absolute before:rounded-lg before:w-24 before:h-1 before:-bottom-3 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-700 transition-all ease-in-out duration-100'> Our Fresh & Healthy Fruits</p>
            </div>
        </section>
    </div>
  )
}

export default MainContainer