import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const SendParcel = () => {

    const { register, handleSubmit, control } = useForm();

    const {user} = useAuth() 

    const axiosSecure = useAxiosSecure()

    const navigate = useNavigate()

    const serviceCenters = useLoaderData()

    const regionsDuplicate = serviceCenters.map(c=>c.region);
    const regions = [...new Set(regionsDuplicate)]

    const senderRegion = useWatch({control,name:'senderRegion'})
    const receiverRegion = useWatch({control,name:'receiverRegion'})

    const districtsByRegion = (region)=>{
        const regionDistricts = serviceCenters.filter(c=> c.region === region);

        const districts = regionDistricts.map(d=>d.district)
        return districts
    }
   

    const handleSendParcel = (data) => {
        console.log(data);

        const isDocument = data.parcelType ==='document';

        const isSameDistrict = data.senderDistrict=== data.receiverDistrict;
       const parcelWeight = parseFloat(data.parcelWeight)
        let cost = 0;
        if(isDocument){
            cost = isSameDistrict?60:80
        }
        else{
                if(parcelWeight<3){
                    cost = isSameDistrict ?110:150
                }
                else{
                    const minCharge = isSameDistrict ? 110 : 150;
                    const extraWeight = parcelWeight -3;
                    const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight *40+40;
                    cost = minCharge + extraCharge;
                }
        }

        // console.log('cost', cost)
        data.cost = cost;
        Swal.fire({
  title: "Agree with the Cost?",
  text: `You will be charged ${cost} taka! `,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, take my parcel!"
}).then((result) => {
  if (result.isConfirmed) {
    // save the parcel info to the database
    axiosSecure.post('/parcels', data)
    .then(res=>{
        console.log('after saving parcel',res.data)
        if(res.data.insertedId){
         navigate('/dashboard/my-parcels')
      Swal.fire({
        position:"top-end",
      title: "Confirmed!",
      text: "Parcel has created,Please pay",
      icon: "success",
      showConfirmButton:false,
      timer: 2500
    });
        }
    })
    
  }
});

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

                {/* Sender & Receiver details*/}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-8">

                    {/* Sender Column */}
                    <div>
                        <h2 className='text-2xl text-secondary font-bold mb-4'>Sender Details</h2>

                        <fieldset className="fieldset">
                            <label className="label">Sender Name</label>
                            <input type="text"
                            defaultValue={user?.displayName}
                            readOnly
                             className="input w-full" placeholder="Sender Name" {...register('senderName')} />

                            <label className="label">Sender Email</label>
                            <input type="email"
                             defaultValue={user?.email}
                             readOnly
                            className="input w-full" placeholder="Sender Email" {...register('senderEmail')} />
                            
                            {/* sender region */}
                            <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Region</legend>
                            <select 
                            {...register('senderRegion')}
                            defaultValue="Pick a region" className="select">
                            <option disabled={true}>Pick a region</option>
                            
                            {
                                regions.map((r,i)=><option value={r} key={i} className='text-black'>{r}</option>)
                            }
                            </select>
                            
                            </fieldset>

                            {/* sender districts */}
                            <fieldset className="fieldset">
                            <legend className="fieldset-legend">Sender Districts</legend>
                            <select 
                            {...register('senderDistrict')}
                            defaultValue="Pick a District" className="select">
                            <option disabled={true}>Pick a region</option>
                            
                            {
                                districtsByRegion(senderRegion).map((r,i)=><option value={r} key={i} className='text-black'>{r}</option>)
                            }
                            </select>
                            
                            </fieldset>

                             

                            <label className="label">Address</label>
                            <input type="text" className="input w-full" placeholder="Sender Address" {...register('senderAddress')} />

                            <label className="label">Phone No</label>
                            <input type="number" className="input w-full" placeholder="Sender Phone No" {...register('senderPhone')} />

                           

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

                             <label className="label">Receiver Email</label>
                            <input type="email" className="input w-full" placeholder="Receiver Email" {...register('ReceiverEmail')} />
                            
                            {/* receiver region */}
                            <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver Region</legend>
                            <select 
                            {...register('receiverRegion')}
                            defaultValue="Pick a region" className="select">
                            <option disabled={true}>Pick a region</option>
                            
                            {
                                regions.map((r,i)=><option value={r} key={i} className='text-black'>{r}</option>)
                            }
                            </select>
                            
                            </fieldset>


                            {/* receiver district */}
                            <fieldset className="fieldset">
                            <legend className="fieldset-legend">Receiver District</legend>
                            <select 
                            {...register('receiverDistrict')}
                            defaultValue="Pick a District" className="select">
                            <option disabled={true}>Pick a District</option>
                            
                            {
                               districtsByRegion(receiverRegion).map((r,i)=><option value={r} key={i} className='text-black'>{r}</option>)
                            }
                            </select>
                            
                            </fieldset>

                            <label className="label">Address</label>
                            <input type="text" className="input w-full" placeholder="Receiver Address" {...register('receiverAddress')} />

                            <label className="label">Phone No</label>
                            <input type="number" className="input w-full" placeholder="Receiver Phone No" {...register('receiverPhone')} />

                            

                            <label className="label">Delivery Instruction</label>
                            <input type="text" className="input w-full" placeholder="Delivery Instruction" {...register('receiverInstruction')} />
                        </fieldset>
                    </div>

                </div>

                <input type="submit" className='btn btn-primary text-black mt-8' value="Send Parcel" />
            </form>
        </div>
    );
};

export default SendParcel;
