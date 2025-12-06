
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const ApproveRider = () => {


    const axiosSecure = useAxiosSecure()

    const {data: riders =[]} =useQuery({
        queryKey: ['riders','pending'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/riders')
            return res.data

        }
    })
    
    return (
        <div>
            <h2 className="text-5xl text-center">Rider Pending Approval: {riders.length()}</h2>
        </div>
    );
};

export default ApproveRider;