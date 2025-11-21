import React from 'react';
import supportImage from "../../../assets/live-tracking.png"
import deliveryImage from "../../../assets/safe-delivery.png"
const Support = () => {
    return (
        <div className='mt-20 mb-20 '>
            <div className='flex items-center gap-10 bg-white rounded-lg mb-5 h-[300px]'>
                <img className='ml-4' src={supportImage} alt="" />
                <div>
                    <div class="border-l-2 border-dotted  h-40"></div>
                </div>
                <div>
                    <h2 className='text-secondary font-semibold text-xl'>Live Parcel Tracking</h2>
                    <p className='text-accent'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get <br />instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='flex items-center gap-10 bg-white rounded-lg mb-5 h-[300px]'>
                <img className='ml-4' src={deliveryImage} alt="" />
                <div>
                    <div class="border-l-2 border-dotted  h-40"></div>
                </div>
                <div>
                    <h2 className='text-secondary font-semibold text-xl'>100% Safe Delivery</h2>
                    <p className='text-accent'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process <br /> guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            <div className='flex items-center gap-10 bg-white rounded-lg mb-5 h-[300px]'>
                <img className='ml-4' src={deliveryImage} alt="" />
                <div>
                    <div class="border-l-2 border-dotted  h-40"></div>
                </div>
                <div>
                    <h2 className='text-secondary font-semibold text-xl'>24/7 Call Center Support</h2>
                    <p className='text-accent'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery <br /> concerns—anytime you need us.</p>
                </div>
            </div>
        </div>
    );
};

export default Support;