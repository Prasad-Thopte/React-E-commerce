import React from 'react';
import Header from './Header';
import HomeCover from './HomeCover';
import Slider from './Slider';
import Productslider from './Productslider';
import Footer from './Footer';


function Home() {
    return (
        <>
            <Header />
            <HomeCover />
            <Slider />
            <Productslider />
            <Footer />

        </>
    )
}

export default Home