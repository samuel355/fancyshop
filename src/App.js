import React from 'react';
import { Header } from './components/Header';

const App = () => {
    return <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        <main className='mt-24 w-full p-6 px-16'>
            Main Content 
        </main>
    </div>
}

export default App;
