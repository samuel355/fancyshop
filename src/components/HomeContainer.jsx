import React, {useEffect} from 'react'
import { useStateValue } from '../context/StateProvider'
import { heroData } from '../utils/data'
import { getAllFoodItems } from '../utils/firebaseFunctions'
import Delivery from './images/delivery.png'
import HeroImage from './images/heroBg.png'
import { actionType } from '../context/reducer'

const HomeContainer = () => {

    const [{}, dispatch] = useStateValue()
    const fetchData = async () => {
        await getAllFoodItems().then(data => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data
            })
        })
    };

    useEffect(()=> {
        fetchData()
    }, []);

    return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full' id='home'>
        <div className='py-2 flex-1 flex flex-col items-start justify-center  gap-6'>
            <div className='flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full shadow-sm'>
                <p className='text-base text-orange-500 font-bold px-2 py-1'>Bike Delivery</p>
                <div className='w-8 h-8 rounded-full overflow-hidden'>
                    <img className='w-full h-full object-contain bg-white' src={Delivery} alt="Bike Delivery" />
                </div>
            </div>
            <p className='text-[2.5rem] md:text-[3.5rem] font-bold tracking-wide text-headingColor'>The fastest Delivery in <span className='text-orange-600 text[3rem]'>Your City</span></p>
            <p className='text-base text-textColor md:text-[1.2rem] md:text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus beatae aliquam consectetur dignissimos quaerat impedit distinctio. Quasi velit nihil magnam distinctio iste temporibus alias quis, architecto ratione possimus, aliquam voluptate?</p>
            <button className='bg-gradient-to-br from-orange-600 to-orange-500 px-6 py-2 rounded-full text-white font-semibold w-full hover:shadow-lg transition-all ease-in-out duration-100 md:w-60' type='button'> Order Now</button>
        </div>

        <div className='py-2 flex-1 flex items-center relative'>
            <img className='h-420 ml-auto w-full lg:w-auto lg:h-650' src={HeroImage} alt="Background" />
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center flex-wrap py-16 gap-2 '>
                {
                    heroData && heroData.map(staticData =>(
                        <div key={staticData.id} className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center min-w-[190px] shadow-xl my-4'>
                            <img className='lg:w-40 w-24 -mt-16 lg:-mt-20' src={staticData.imageSrc} alt="Ice Cream" />
                            <p className='mt-2 text-lg font-semibold text-textColor'>{staticData.name}</p>
                            <p className='mt-1 text-center text-sm text-gray-500'>{staticData.description}</p>
                            <p className='mt-2 text-sm font-semibold text-headingColor'><span className='text-md text-orange-600 font-bold'>$ </span> {staticData.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default HomeContainer