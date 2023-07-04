import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContex'

const RegisterStartupForm = () => {
    const { user } = useAuthContext()
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        description: '',
        founders: '',
        location: '',
        logo: '',
        foundingDate: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'foundingDate') {
            const date = new Date(value);
            const formattedDate = date.toISOString().split('T')[0];
            setForm({ ...form, foundingDate: formattedDate });
        } else {
            setForm({ ...form, [name]: value });
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.location || !form.description) {
            if (!form.name) console.log("name")
            if (!form.location) console.log("location")
            if (!form.description) console.log("description")
            alert('Please fill in all required fields');
            return;
        }

        setLoading(true);

        try {


            const founderUrl = 'http://localhost:4000/userByEmail/' + user.email;
            console.log("Founder url " + founderUrl)
            let founder = null;
            const founderResponse = await fetch(founderUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (founderResponse.ok) {
                founder = await founderResponse.json();
                console.log("Founder je ", founder);
            } else {
                console.log("ejoj");
            }


            const response = await fetch('http://localhost:4000/startup/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    description: form.description,
                    members: [{ user: founder, position: "Founder" }],
                    logo: form.logo
                }),
            });

            if (response.ok) {
                const newStartup = await response.json();
                const url = '/startupDetails/' + newStartup.name
                window.location.href = url

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
            <h2 className='font-bold text-textColor text-2xl lg:justify-end mb-7'>Register your startup</h2>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col gap-4'>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        className='p-2 rounded-xl border'
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChange}
                        value={form.name}
                    />
                    <input
                        className='p-2 rounded-xl border'
                        type='date'
                        name='foundingDate'
                        placeholder='Founding date'
                        onChange={handleChange}
                        value={form.foundingDate}
                    />
                </div>
                <textarea
                    className='p-2 rounded-xl h-[13rem] border resize-none'
                    name='description'
                    placeholder='Describe your startup'
                    onChange={handleChange}
                    value={form.description}
                />
                <input
                    className='p-2 rounded-xl border'
                    type='text'
                    name='location'
                    onChange={handleChange}
                    placeholder='Location'
                    value={form.location}
                />
                <input
                    className='p-2 rounded-xl border'
                    type='text'
                    name='logo'
                    placeholder='Your logo'
                    onChange={handleChange}
                    value={form.logo}
                />

                <button onClick={handleSubmit} className='bg-navyBlue rounded-xl text-white py-2 hover:scale-105 duration-300'>
                    Register
                </button>
            </form>



        </div>


    )
}

export default RegisterStartupForm