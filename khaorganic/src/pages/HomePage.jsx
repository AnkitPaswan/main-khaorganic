import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Products from '../components/products'
import Philosophybanner from '../components/Philosophybanner'
import Whywe from '../components/Whywe'
import Newsletter from '../components/Newsletter'

const HomePage = () => {
    return (
        <div>
            <Announcement />
            <Header />
            <Banner />
            <Products headingText="Our Products" />
            <Philosophybanner />
            <Whywe headTag="Our Features" />
            {/* <Whywe headTag="SHOP TO MAKE A DIFFERENCE" /> */}
            <Newsletter />
            <Footer />
        </div>
    )
}

export default HomePage
