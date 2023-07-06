import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';




const RegistrationForm = () => {

    const formRef = useRef()
    const [form, setForm] = useState({
        fullName: '',
        birthDate: '',
        email: '',
        city: '',
        country: '',
        zipCode: '',
        occupation: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'dateOfBirth') {
            const date = new Date(value);
            const formattedDate = date.toISOString().split('T')[0];
            setForm({ ...form, birthDate: formattedDate });
        } else {
            setForm({ ...form, [name]: value });
        }
    };





    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.fullName || !form.email || !form.password || !form.city || !form.country) {
            if (!form.fullName) console.log("name")
            if (!form.email) console.log("email")
            if (!form.password) console.log("password")
            if (!form.location) console.log("location")
            alert('Please fill in all required fields');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://boldapp.onrender.com/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName: form.fullName,
                    email: form.email,
                    password: form.password,
                    city: form.city,
                    country: form.country,
                    zipCode: form.zipCode,
                    birthDate: form.birthDate,
                    occupation: form.occupation

                }),
            });

            if (response.ok) {
                const newUser = await response.json();
                console.log('New user created:', newUser);
            } else {
                const errorData = await response.json();
                console.error('Registration failed:' + errorData.error);
            }
        } catch (error) {
            console.error('Error:' + error.message);
        }

        setLoading(false);
    };


    return (
        <div className='bg-lightGray w-96 mx-auto shadow-lg rounded-lg p-5'>
            <h2 className='font-bold text-textColor text-2xl lg:justify-end'>Register</h2>
            <p className='text-xs my-4 text-textColor'>
                If you are not yet a member, register now!
            </p>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col gap-4'>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='fullName'
                        placeholder='Full Name'
                        onChange={handleChange}
                        value={form.fullName}
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='date'
                        name='dateOfBirth'
                        placeholder='Date of Birth'
                        onChange={handleChange}
                        value={form.birthDate}
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        onChange={handleChange}
                        value={form.email}
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='city'
                        onChange={handleChange}
                        placeholder='City'
                        value={form.city}
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='country'
                        placeholder='Country'
                        onChange={handleChange}
                        value={form.country}
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='zipCode'
                        onChange={handleChange}
                        placeholder='Zip Code'
                        value={form.zipCode}
                    />
                </div>
                <select
                    className='p-2 rounded-xl border'
                    name='occupation'
                    id='occupation'
                    onChange={handleChange}
                    value={form.occupation}
                >
                    <option value=''>Select Occupation</option>
                    <option value='student'>Student</option>
                    <option value='co-founder'>Co-founder</option>
                    <option value='founder'>Founder</option>
                    <option value='freelancer'>Freelancer</option>
                </select>
                <input
                    type='password'
                    className='p-2 rounded-xl border'
                    name='password'
                    onChange={handleChange}
                    value={form.password}
                    placeholder='Password'
                />
                <button onClick={handleSubmit} className='bg-navyBlue rounded-xl text-white py-2 hover:scale-105 duration-300'>
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
