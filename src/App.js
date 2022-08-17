import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, CreateContainer, MainContainer } from './components';

const App = () => {
    return (
        <AnimatePresence> {/** To make animation works perfectly */}
            <div className='w-screen h-auto flex flex-col bg-primary'>
                <Header />
                <main className='mt-24 w-full p-6 px-16'>
                    <Routes>
                        <Route path='/*' element={<MainContainer />} />
                        <Route path='/createItem' element={<CreateContainer />} />
                    </Routes>
                </main>
            </div>
        </AnimatePresence>
        
    )
}

export default App;
