import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../../../components/HowWorks/HowWorks';
import OurServices from '../../../components/OurServices/OurServices';
import Brands from '../Brands/Brands';
import Support from '../Support/Support';
import Reviews from '../Reviews/Reviews';
import Merchant from '../Merchant/Merchant';

const reviewsPromise = fetch('/reviews.json')
.then(res=>res.json());


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <OurServices></OurServices>
            <Brands></Brands>
            <Support></Support>
            <Merchant></Merchant>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>

        </div>
    );
};

export default Home;