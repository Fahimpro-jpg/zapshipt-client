import React from 'react';
import headerImage from "../../../assets/be-a-merchant-bg.png"
import rightImage from "../../../assets/location-merchant.png"
const Merchant = () => {
    return (
        <div className='h-[500px] border border-green-300 bg-secondary'>
            <img src={headerImage} alt="" />
        <div className='flex gap-10'> 
            <div>
            <h2 className='text-white font-bold text-4xl -mt-20 ml-34'>Merchant and Customer Satisfaction <br />is Our First Priority</h2>
             <p className='text-white ml-34 mt-10'>We offer the lowest delivery charge with the highest value along <br />with 100% safety of your product. Pathao courier delivers your parcels in every <br />corner of Bangladesh right on time.</p>
             <div>
                <button className='btn bg-[#CAEB66] ml-34 mt-10 rounded-3xl border-0'>Become a Merchant</button>
                <button className='btn bg-secondary text-[#CAEB66] mt-10 ml-3  border border-[#CAEB66] rounded-3xl'>Earn with ZapShift Courier</button>
            </div>
            </div>
            
            <div>
                <img className='mr-5 mb-5'  src={rightImage} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Merchant;