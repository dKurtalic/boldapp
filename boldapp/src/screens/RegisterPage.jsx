import React from 'react'
import RegistrationForm from '../components/registrationForm';


const RegisterPage = () => {
    return (
        < section className='rounded-lg bg-lightMint flex lg:flex-row items-center justify-center mx-auto mb-10 w-[90%] p-8' >
            <RegistrationForm />
        </section>
    )
}

export default RegisterPage;