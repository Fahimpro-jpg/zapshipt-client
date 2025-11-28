import React from 'react';
import { Link } from 'react-router';

const PaymentCanceled = () => {
    return (
        <div>
            <h2 className='text-4xl text-center'>Payment is canceled,please try again</h2>
            <Link to={'/dashboard/my-parcels'}><button className='btn btn-primary text-black'>Try again</button></Link>
        </div>
    );
};

export default PaymentCanceled;