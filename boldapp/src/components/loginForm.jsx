import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { useAuthContext } from '../hooks/useAuthContex'
import { useRef, useState } from 'react';

const LoginForm = () => {
    const { dispatch } = useAuthContext()
    const formRef = useRef()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null)

        try {
            if (!form.email || !form.password) {
                setError("Please fill in all required fields")
                throw Error('Please fill in all required fields');
            }
            setLoading(true);

            const response = await fetch('http://localhost:4000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                }),
            });

            if (response.ok) {
                const json = await response.json()

                localStorage.setItem('user', JSON.stringify(json))
                dispatch({ type: 'LOGIN', payload: json })

                setLoading(false);
                console.log('Logged in');
            } else {
                setLoading(false)
                setError("Log in failed")
            }
        } catch (error) {
            setError("Invalid credentials")
            console.error('Error:' + error.message);
        }

    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <div className='bg-lightGray w-30 shadow-lg rounded-lg flex p-5 block-inline justify-center sm:mt-3'>
            <div className=' '>
                <h2 className='font-bold text-textColor text-2xl lg:justify-end '>Log in</h2>
                <p className='text-xs mt-4 text-textColor'>If you are already a member, logging in is a breeze.</p>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4'>
                    <input
                        className='p-2 mt-8 rounded-xl border'
                        type="email" name='email'
                        placeholder='Email'
                        onChange={handleChange}
                        value={form.email} />

                    <input
                        className='p-2 rounded-xl border w-full'
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}
                        value={form.password}
                    />

                    <button className='bg-navyBlue rounded-xl text-white py-2 hover:scale-105 duration-300'>Log in</button>

                </form>

                <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
                    <hr className='border-gray-400' />
                    <p className='text-center text-sm'>OR</p>
                    <hr className='border-gray-400' />
                </div>

                <button className='bg-white border-gray border-[0.02px] py-2 w-full rounded-xl mt-5 flex justify-center text-sm hover:scale-105 duration-300 text-navyBlue'>
                    <FcGoogle className='w-[25px]' viewBox='0 0 48 48' />
                    Log in with Google
                </button>
                <div className='mt-5 text-xs border-b border-navyBlue py-4 text-navyBlue'>
                    <Link to='/forgotPassword'>Forgot your password?</Link>
                </div>
                <div className='mt-3 text-xs flex justify-between items-center text-navyBlue'>
                    <p>Don't have an account?</p>
                    <button
                        disabled={loading}
                        onClick={handleSubmit}
                        className='py-2 px-5 bg-white rounded-xl hover:scale-110 duration-300'>
                        <Link to='/register'>Register</Link>
                    </button>
                </div>
                {error && <div className='error'>{error}</div>}


            </div>

        </div>
    )
}

export default LoginForm