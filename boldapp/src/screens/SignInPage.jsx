import React from 'react'
import LoginForm from '../components/loginForm';
import sideGraphic from '../res/startapp.png'
import { useState } from 'react';


const SignInPage = () => {
    const [fullName, setFullName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [selectedRole, setSelectedRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
    };

    return (
        < section className='rounded-lg bg-lightMint flex lg:flex-row items-center justify-center mx-auto w-[90%] p-8' >

            <LoginForm />
            <div className='w-[40%] md:block hidden mr-[2rem] ml-[5rem]'>
                <img src={sideGraphic} alt='side graphic' className='bg-transparent ' />
            </div>

        </section >
    );

}

export default SignInPage;