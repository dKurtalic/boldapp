import React from 'react'
import { useState } from 'react';
import forgotPasswordPhoto from '../res/forgotPass.jpg'
import { useNavigate } from "react-router-dom";
function ForgotPassword() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();


        setEmail('');
    };

    return (

        <div className='flex justify-center items-center m-auto'>
            <div className=' w-[60%] md:w-[50%] rounded-lg flex p-5 block-inline justify-center sm:mt-3'>
                <div>
                    <h2 className='font-bold text-textColor text-2xl'>Forgot Password</h2>
                    <p className='text-xs my-4 text-textColor'>
                        Enter your email address below and we'll send you a password reset link.
                    </p>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <input
                            className='p-2 rounded-xl border'
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className='bg-navyBlue rounded-xl text-white py-2 hover:scale-105 duration-300'>
                            Reset Password
                        </button>
                    </form>
                    <div className='mt-5 text-xs border-navyBlue py-4 text-navyBlue' onClick={() => { navigate('/signin') }}>
                        Back to Login
                    </div>
                </div>
            </div>
            <div className='hidden lg:block  w-[23rem]'>
                <img
                    src={forgotPasswordPhoto}
                    alt='Filler Image'
                    className='object-cover rounded-lg'
                />
            </div>
        </div>

    );
}

export default ForgotPassword