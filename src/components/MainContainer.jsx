import HomeContainer from './HomeContainer'
import {motion} from 'framer-motion'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import { useState } from 'react'
import MenuContainer from './MenuContainer'

const MainContainer = () => {

    const [{foodItems}, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);
     
    return (
        <div className="w-full h-full flex flex-col items-center">
            <HomeContainer />

            <section className='w-full my-6 check400'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-2xl font-semibold  text-headingColor relative before:absolute before:rounded-lg before:w-24 before:h-1 before:-bottom-3 before:left-0 before:bg-gradient-to-tr from-orange-300 to-orange-700 transition-all ease-in-out duration-100'> Our Fresh & Healthy Fruits</p>
                    <div className='hidden md:flex gap-3 items-center'>
                        <motion.div 
                            onClick={()=> setScrollValue(-600)}
                            whileTap={{scale : 0.75}}
                            className='w-8 h-8 rounded-2xl bg-orange-300 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg hover:bg-orange-600 flex items-center justify-center'>
                                <MdChevronLeft className='text-white text-lg' />
                        </motion.div>
                        <motion.div 
                            onClick={()=> setScrollValue(600)}
                            whileTap={{scale : 0.75}}
                            className='w-8 h-8 rounded-2xl bg-orange-300 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg hover:bg-orange-600 flex items-center justify-center'>
                                <MdChevronRight className='text-white text-lg' />
                        </motion.div>
                    </div>
                </div>
                <RowContainer 
                    scrollValue={scrollValue}
                    flag={true} 
                    data={foodItems?.filter((n) => n.category ==='fried_rice')} 
                />
            </section>

            <MenuContainer />
        </div>
    )
}

export default MainContainer