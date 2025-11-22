import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()

    const{registerUser}= useAuth()

    const handleRegistration = (data)=>{
        console.log('after register',data)
        registerUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
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
        className='text-blue-400 underline'
        to={'/login'}>Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
         </div>
    </div>
    );
};

export default Register;