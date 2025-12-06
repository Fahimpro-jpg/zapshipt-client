import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLoaderData } from 'react-router';
import riderImage from "../../assets/agent-pending.png"
import Swal from 'sweetalert2';

const Rider = () => {

    const { register, handleSubmit, control } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const serviceCenters = useLoaderData();

    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];

    const senderRegion = useWatch({ control, name: 'riderRegion' });

    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    };

    const handleRiderApplication = (data) => {
        console.log(data);
        axiosSecure.post('/riders',data)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                  title: "Your application is submitted, we will reach to you in 1 week",
                  position:"top-end",
                  icon: "success",
                  showCancelButton: true,
                  confirmButtonText: "Yes, take my parcel!",
                  timer: 2500
                })
            }
        })
    };

    return (
        <div>
            <h2 className='text-4xl text-primary mb-6'>Be a Rider</h2>

            <form className='text-black w-full' onSubmit={handleSubmit(handleRiderApplication)}>

                {/* Sender & Rider Details */}
                <div className="flex flex-col lg:flex-row border p-6 gap-5">

                    {/* Left Form Column */}
                    <div className="w-full lg:w-1/2">
                        <h2 className='text-2xl text-secondary font-bold mb-4'>Rider Details</h2>

                        <fieldset className="fieldset w-full">

                            <label className="label">Rider Name</label>
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                className="input w-full"
                                placeholder="Rider Name"
                                {...register('riderName')}
                            />

                            <label className="label">Rider Email</label>
                            <input
                                type="email"
                                defaultValue={user?.email}
                                readOnly
                                className="input w-full"
                                placeholder="rider Email"
                                {...register('riderEmail')}
                            />

                            {/* sender region */}
                            <legend className="fieldset-legend mt-3">Rider Region</legend>
                            <select
                                {...register('riderRegion')}
                                defaultValue="Pick a region"
                                className="select w-full"
                            >
                                <option disabled={true}>Pick a region</option>
                                {
                                    regions.map((r, i) =>
                                        <option value={r} key={i} className='text-black'>{r}</option>
                                    )
                                }
                            </select>

                            {/* sender districts */}
                            <legend className="fieldset-legend mt-3">Rider Districts</legend>
                            <select
                                {...register('riderDistrict')}
                                defaultValue="Pick a District"
                                className="select w-full"
                            >
                                <option disabled={true}>Pick a District</option>
                                {
                                    districtsByRegion(senderRegion).map((r, i) =>
                                        <option value={r} key={i} className='text-black'>{r}</option>
                                    )
                                }
                            </select>

                            <label className="label">NID No</label>
                            <input
                                type="number"
                                className="input w-full"
                                placeholder="Rider NID No"
                                {...register('riderNID')}
                            />

                            <label className="label mt-3">Address</label>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="rider Address"
                                {...register('riderAddress')}
                            />

                            <label className="label">Phone No</label>
                            <input
                                type="number"
                                className="input w-full"
                                placeholder="riderPhone No"
                                {...register('riderPhone')}
                            />

                            <label className="label">Pickup Instruction</label>
                            <input
                                type="text"
                                className="input w-full"
                                placeholder="Pickup Instruction"
                                {...register('pickupInstruction')}
                            />

                        </fieldset>
                    </div>

                    {/* Right Image Column */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img className="max-w-full" src={riderImage} alt="" />
                    </div>

                </div>

                <input
                    type="submit"
                    className='btn btn-primary text-black mt-8'
                    value="Apply as a Rider"
                />
            </form>
        </div>
    );
};

export default Rider;
