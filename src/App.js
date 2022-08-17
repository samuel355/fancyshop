import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, CreateContainer, MainContainer } from './components';

const App = () => {
    return <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        <main className='mt-24 w-full p-6 px-16'>
            <Routes>
                <Route path='/*' element={<MainContainer />} />
                <Route path='/createItem' element={<CreateContainer />} />
            </Routes>
        </main>
    </div>
}

export default App;
