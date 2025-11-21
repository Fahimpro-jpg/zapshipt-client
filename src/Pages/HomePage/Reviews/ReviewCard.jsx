import React from 'react';
import { FaEye, FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    const {userName ,review:testimonial,user_photoURL} = review
    return (
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 relative">
      {/* Quote Icon */}
      <div className="text-secondary text-4xl mb-4">
        <FaQuoteLeft></FaQuoteLeft>
      </div>

      {/* Description */}
      <p className="text-thirdly leading-relaxed mb-6">
        {testimonial}
      </p>

      {/* Dotted separator */}
      <div className="border-b border-dotted border-accent my-4"></div>

      {/* User Info */}
      <div>
        <img className='rounded-xl' src={user_photoURL} alt="" />
        <div>
            <h3 className="text-secondary text-lg font-semibold">{userName}</h3>
        <p className="text-accent text-sm">Senior Product Designer</p>
        </div>
        
      </div>
    </div>
    );
};

export default ReviewCard;