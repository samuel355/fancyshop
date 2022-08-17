import React from 'react'

export const Header = () => {
  return (
    <div className='fixed z-50 w-screen bg-slate-300 p-6 px-16'>
        {/** Desktop and Tablet  */}
        <div className='hidden md:flex w-full h-full'>
            
        </div>

        {/** Mobile View */}
        <div className='flex md:hidden h-full w-full'>
            here we go 
        </div>
    </div>
  )
}
