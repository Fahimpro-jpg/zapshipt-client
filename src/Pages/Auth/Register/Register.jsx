import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Register = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()

    const{registerUser,updateUserProfile}= useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()


    const handleRegistration = (data)=>{
       
        const profileImg = data.photo[0]
        registerUser(data.email,data.password)
        .then(()=>{
            
            // store the image get the photo url

            const formData = new FormData();
formData.append('image', profileImg);

const imageApiUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

axios.post(imageApiUrl, formData)
.then(res => {

const photoURL = res.data.data.url

// create user in the database 
const userInfo = {
  email: data.email,
  displayName: data.name,
  photoURL: photoURL
}

axiosSecure.post('/users',userInfo)
.then(res=>{
  if(res.data.insertedId){
    console.log('user created in the database')
  }
})

  // update user profile
  
  const userProfile = {
    displayName:data.name,
    photoURL: photoURL
  }
  updateUserProfile(userProfile)
  .then(()=>{
    console.log('user profile updated done')
    navigate(location?.state || '/')
  })
  .catch(error=>{
    console.log(error)
  })

})
.catch(err => {
  console.log("imgbb upload error", err);
});

          
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl  mx-auto">
        <h3 className="text-3xl text-center">Create an Account</h3>
        <p className='text-center'>Please Register</p>
      <div className="card-body">
        
            <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
           
            {/*Name Field*/}

          <label className="label">Name</label>
          <input type="text"
          {...register('Name',{required:true})}
          className="input" placeholder="Your Name" />

          {errors.email?.type==='required' && <p className='text-red-500'>Name is required</p>}

           {/*photo image field*/}

          <label className="label">Photo</label>
          
          <input type="file"
          {...register('photo',{required:true})}
          className="file-input" placeholder="Your Photo" />

          {errors.email?.type==='required' && <p className='text-red-500'>Photo is required</p>}
            {/* email */}

          <label className="label">Email</label>
          <input type="email"
          {...register('email',{required:true})}
          className="input" placeholder="Email" />

          {errors.email?.type==='required' && <p className='text-red-500'>Email is required</p>}
          {/* password */}

          <label className="label">Password</label>
          <input type="password"
          {...register('password',{
            required:true,
            minLength:6,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
          })}
          className="input" placeholder="Password" />

            {errors.password?.type==='required'&& <p className='text-red-500'>password is required</p>}
            {
                errors.password?.type==='minLength' && <p className='text-red-500'>password must be 6 characters or longer</p>
            }

            {
                errors.password?.type==='pattern' && <p className='text-red-500'>Password Must have at least one uppercase,at least one lowercase,  at least one number, and at least one special characters</p>
            }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral bg-black text-white mt-4">Register</button>
         
        </fieldset>
        <p>Already have an account<Link
        state={location.state}
        className='text-blue-400 underline'
        to={'/login'}>Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
         </div>
    </div>
    );
};

export default Register;