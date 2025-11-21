import React, { use } from 'react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise);

    return (
        <div className='my-24'>
            <div className='text-center mb-12'>
                <h3 className="text-3xl text-center font-bold my-8 mb-12">Review</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, sint provident ratione ut qui iste harum animi quas maxime nam?</p>
            </div>

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews.map(review => (
                    <SwiperSlide key={review.id}>
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;
