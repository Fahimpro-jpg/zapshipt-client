import React from 'react';
import { useForm } from 'react-hook-form';

const SendParcel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSendParcel = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h2 className='text-5xl font-bold'>Send Parcel</h2>

            <form className='text-black' onSubmit={handleSubmit(handleSendParcel)}>

                {/* Parcel type */}
                <div>
                    <label className='label cursor-pointer'>
                        <input
                            type="radio"
                            {...register('parcelType')}
                            value="document"
                            className="radio"
                            defaultChecked
                        />
                        <span className='ml-2'>Document</span>
                    </label>

                    <label className='label cursor-pointer'>
                        <input
                            type="radio"
                            {...register('parcelType')}
                            value="non-document"
                            className="radio"
                        />
                        <span className='ml-2'>Non-Document</span>
                    </label>
                </div>

                {/* Parcel info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                    <fieldset className="fieldset">
                        <label className="label">Parcel name</label>
                        <input type="text" className="input w-full" placeholder="Parcel name" {...register('parcelName')} />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label">Parcel Weight (kg)</label>
                        <input type="number" className="input w-full" placeholder="Parcel Weight" {...register('parcelWeight')} />
                    </fieldset>
                </div>

                {/* Sender & Receiver details (SIDE BY SIDE GRID) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-8">

                    {/* Sender Column */}
                    <div>
                        <h2 className='text-2xl text-secondary font-bold mb-4'>Sender Details</h2>

                        <fieldset className="fieldset">
                            <label className="label">Sender Name</label>
                            <input type="text" className="input w-full" placeholder="Sender Name" {...register('senderName')} />

                            <label className="label">Address</label>
                            <input type="text" className="input w-full" placeholder="Sender Address" {...register('senderAddress')} />

                            <label className="label">Phone No</label>
                            <input type="number" className="input w-full" placeholder="Sender Phone No" {...register('senderPhone')} />

                            <label className="label">District</label>
                            <input type="text" className="input w-full" placeholder="Sender District" {...register('senderDistrict')} />

                            <label className="label">Pickup Instruction</label>
                            <input type="text" className="input w-full" placeholder="Pickup Instruction" {...register('pickupInstruction')} />
                        </fieldset>
                    </div>

                    {/* Receiver Column */}
                    <div>
                        <h2 className='text-2xl text-secondary font-bold mb-4'>Receiver Details</h2>

                        <fieldset className="fieldset">
                            <label className="label">Receiver Name</label>
                            <input type="text" className="input w-full" placeholder="Receiver Name" {...register('receiverName')} />

                            <label className="label">Address</label>
                            <input type="text" className="input w-full" placeholder="Receiver Address" {...register('receiverAddress')} />

                            <label className="label">Phone No</label>
                            <input type="number" className="input w-full" placeholder="Receiver Phone No" {...register('receiverPhone')} />

                            <label className="label">District</label>
                            <input type="text" className="input w-full" placeholder="Receiver District" {...register('receiverDistrict')} />

                            <label className="label">Delivery Instruction</label>
                            <input type="text" className="input w-full" placeholder="Delivery Instruction" {...register('receiverInstruction')} />
                        </fieldset>
                    </div>

                </div>

                <input type="submit" className='btn btn-primary text-black' value="Send Parcel" />
            </form>
        </div>
    );
};

export default SendParcel;
