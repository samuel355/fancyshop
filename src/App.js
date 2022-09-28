import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, CreateContainer, MainContainer } from './components';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer';

const App = () => {
    const [{}, dispatch] = useStateValue()

    const fetchData = async () => {
        await getAllFoodItems().then(data => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data
            })
        })
    };

    useEffect(() =>{
        fetchData();
    }, []);

    return (
        <AnimatePresence existBeforeEnter> {/** To make animation works perfectly */}
            <div className='w-screen h-auto flex flex-col bg-primary'>
                <Header />
                <main className='mt-20 w-full md:mt-24 py-4 md:px-22 px-8 md:px-16'>
                    <Routes>
                        <Route path='/' element={<MainContainer />} />
                        <Route path='/createItem' element={<CreateContainer />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
        
    )
}

export default App;
