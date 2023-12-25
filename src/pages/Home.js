import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Content from '../component/content';
export default function Home() {
    return (
        <div>
            <Navbar/>
            <div>
                <Content/>
            </div>
            <Footer/>
        </div>
    )
}
