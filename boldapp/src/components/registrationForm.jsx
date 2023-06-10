import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const RegistrationForm = () => {
    return (
        <div className='bg-lightGray w-96 mx-auto shadow-lg rounded-lg p-5'>
            <h2 className='font-bold text-textColor text-2xl lg:justify-end'>Register</h2>
            <p className='text-xs my-4 text-textColor'>
                If you are not yet a member, register now!
            </p>
            <form action='' className='flex flex-col gap-4'>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='date'
                        name='dateOfBirth'
                        placeholder='Date of Birth'
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='email'
                        name='email'
                        placeholder='Email Address'
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='city'
                        placeholder='City'
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='country'
                        placeholder='Country'
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='zipCode'
                        placeholder='Zip Code'
                    />
                </div>
                <select
                    className='p-2 rounded-xl border'
                    name='occupation'
                    id='occupation'
                >
                    <option value=''>Select Occupation</option>
                    <option value='student'>Student</option>
                    <option value='co-founder'>Co-founder</option>
                    <option value='founder'>Founder</option>
                    <option value='freelancer'>Freelancer</option>
                </select>
                <button className='bg-navyBlue rounded-xl text-white py-2 hover:scale-105 duration-300'>
                    Register
                </button>
            </form>
            <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
                <hr className='border-gray-400' />
                <p className='text-center text-sm'>OR</p>
                <hr className='border-gray-400' />
            </div>
            <button className='bg-white border-gray border-[0.02px] w-full py-2 rounded-xl mt-5 flex justify-center text-sm hover:scale-105 duration-300 text-navyBlue'>
                <FcGoogle className='w-[25px]' />
                Register with Google
            </button>

            <div className='mt-5 text-xs border-b border-navyBlue py-4 text-navyBlue'>
                <Link to='/forgotPassword'>Forgot your password?</Link>
            </div>
            <div className='mt-3 text-xs flex justify-between items-center text-navyBlue'>
                <p>Already have an account?</p>
                <button className='py-2 px-5 bg-white rounded-xl hover:scale-110 duration-300'>
                    <Link to='/signin'> Login</Link>
                </button>
            </div>
        </div>


    )
};


export default RegistrationForm
