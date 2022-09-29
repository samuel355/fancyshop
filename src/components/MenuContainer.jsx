import React, {useState} from 'react'
import {IoFastFood} from 'react-icons/io5'
import { categories } from '../utils/data'

const MenuContainer = () => {

    const [filter, setFilter] = useState("Chicken")
    return (
        <section className='w-full' id='menu'>
            <div className='w-full flex flex-col items-center justify-center'>
                <p className='text-2xl font-semibold  text-headingColor relative before:absolute before:rounded-lg before:w-24 before:h-1 before:-bottom-3 before:left-0 mr-auto before:bg-gradient-to-tr from-orange-300 to-orange-700 transition-all ease-in-out duration-100'> Our Hot Dishes</p>
            </div>

            <div className='w-full px-3 flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
                {
                    categories && categories.map((item)=>(
                        <div key={item.id} className={`group ${filter === item.name ? 'bg-red-600' : 'bg-bgCard'} w-24 min-w-[94px] h-28 cursor-pointer hover:bg-red-600 rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out`}>
                            <div className='w-10 h-10 rounded-full bg-red-600 group-hover:bg-bgCard flex items-center justify-center hover:bg-red-500'>
                                <IoFastFood className='text-lg text-red-100 group-hover:text-textColor' />
                            </div>
                            <p className={`text-sm ${filter === item.name ? 'text-white' : 'text-textColor'} group-hover:text-red-100`}>{item.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default MenuContainer