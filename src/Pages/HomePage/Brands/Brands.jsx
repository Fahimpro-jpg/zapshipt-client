import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from "../../../assets/brands/amazon.png"
import amazonVector from "../../../assets/brands/amazon_vector.png"
import casio from "../../../assets/brands/casio.png"
import moonStar from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import star from "../../../assets/brands/star.png"
import starPeople from "../../../assets/brands/start_people.png"
import { Autoplay } from 'swiper/modules';

const brandLogos = [amazon,amazonVector,casio,moonStar,randstad,star,starPeople]

const Brands = () => {
    return (
        

       <div>
        <h2 className='text-center font-bold text-secondary text-2xl mb-15'>We've helped thousands of sales teams</h2>
         <Swiper
        loop={true}
         slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
         delay:1000,
         disableOnInteraction:false,
        }}

        >
               
            {
                brandLogos.map((logo,index)=>
                    <SwiperSlide key={index}><img src={logo} alt="" /></SwiperSlide>
                )
            }
        
        
        </Swiper>
       </div>
    );
};

export default Brands;

 