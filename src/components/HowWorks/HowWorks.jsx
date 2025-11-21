import React from 'react';
import iconImage from "../../assets/fi_9618754.png"
const HowWorks = () => {
    return (
        
        <div>
            <h2 className='font-bold text-3xl mb-4 text-secondary mt-[100px]'>How it works</h2>
            <div className='grid grid-cols-4 '> 
                {/* card-1 */}
                <div className='w-[300px] h-[230px] bg-white rounded-xl mb-20'>
                    <img className='ml-5 mt-5' src={iconImage} alt="" />
                    <h2 className='ml-5 text-secondary font-semibold mt-3'>Booking Pick & Drop</h2>
                    <p className='ml-5 mt-3 text-accent'>From personal packages to <br /> business shipments — we deliver on time, every time.</p>
                </div>
                {/* card-2 */}
                <div className='w-[300px] h-[230px] bg-white rounded-xl mb-20'>
                    <img className='ml-5 mt-5' src={iconImage} alt="" />
                    <h2 className='ml-5 text-secondary font-semibold mt-3'>Cash On Delivery</h2>
                    <p className='ml-5 mt-3 text-accent'>From personal packages to <br />business shipments — we deliver on time, every time.</p>
                </div>
                {/* card-3 */}
                <div className='w-[300px] h-[230px] bg-white rounded-xl mb-20'>
                    <img className='ml-5 mt-5' src={iconImage} alt="" />
                    <h2 className='ml-5 text-secondary font-semibold mt-3'>Delivery Hub</h2>
                    <p className='ml-5 mt-3 text-accent'>From personal packages to <br />business shipments — we deliver on time, every time.</p>
                </div>
                {/* card-4 */}
                <div className='w-[300px] h-[230px] bg-white rounded-xl mb-20'>
                    <img className='ml-5 mt-5' src={iconImage} alt="" />
                    <h2 className='ml-5 text-secondary font-semibold mt-3'>Booking SME & Corporate</h2>
                    <p className='ml-5 mt-3 text-accent'>From personal packages to <br />business shipments — we deliver on time, every time.</p>
                </div>
               
            </div>

        </div>
    );
};

export default HowWorks;