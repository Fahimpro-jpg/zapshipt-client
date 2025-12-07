import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { VscCheckAll } from 'react-icons/vsc';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlinePageview } from 'react-icons/md';

const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [], refetch } = useQuery({
    queryKey: ['riders', 'pending'],
    queryFn: async () => {
      const res = await axiosSecure.get('/riders');
      return res.data;
    },
  });

  
  const updateRidersStatus = async (status, rider) => {
    const updateInfo = { status : status, email: rider.riderEmail};

    try {
      const res = await axiosSecure.patch(`/riders/${rider._id}`, updateInfo);

      if (res.data.modifiedCount) {
        
        Swal.fire({
          title: `Rider status set to ${status}!`,
          position: 'top-end',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });

        refetch(); // ✅ Auto refresh data
      }
    } catch (error) {
      Swal.fire({
        title: 'Approval Failed',
        icon: 'error',
      });
      console.error('AXIOS ERROR:', error);
    }
  };

  
  const handleApproval = (rider) => {
    updateRidersStatus('approved', rider);
  };

  const handleRejection = (rider) => {
    updateRidersStatus('rejected', rider);
  };

  return (
    <div>
      <h2 className="text-5xl text-center mb-6">
        Rider Pending Approval: {riders.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>District</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.riderName}</td>
                <td>{rider.riderEmail}</td>

                {/* ✅ FIXED: Proper <td> usage */}
                <td
                  className={`${
                    rider.status === 'approved'
                      ? 'text-green-800'
                      : 'text-red-500'
                  } font-semibold`}
                >
                  {rider.status}
                </td>

                <td>{rider.riderDistrict}</td>

                <td>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-success btn-sm"
                  >
                    <VscCheckAll />
                  </button>

                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn bg-red-600 text-white btn-sm ml-3"
                  >
                    <RxCross2 />
                  </button>
                  <button
                  
                    className="btn bg-blue-600 text-white btn-sm ml-3"
                  >
                    <MdOutlinePageview />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRider;
