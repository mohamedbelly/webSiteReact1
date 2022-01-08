import React from 'react';
import {Footer, Possibility, Features, WathGPT3, Header} from './containers';
import {CTA, Brand,Navbar} from './components';
import './App.css';
export const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WathGPT3 />
            <Features />
            <Possibility />
            <CTA />
            {/* <Blog /> */}
            <Footer />
            
        </div>
    )
}
export default App
