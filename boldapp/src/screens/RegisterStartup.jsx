import React from 'react'
import RegisterStartupForm from '../components/registerStartupForm'
import rocket from '../res/rocket.png'
import '../clouds.css'

const RegisterStartup = () => {
    return (
        <div>
            <div id="clouds">
                <div className='flex' >
                    <RegisterStartupForm />
                    <img src={rocket} alt='rocket' className="hidden lg:block h-[30rem] pt-10" />
                </div>
                <div class="cloud x1"></div>
                <div class="cloud x2"></div>
                <div class="cloud x3"></div>
                <div class="cloud x4"></div>
                <div class="cloud x5"></div>

            </div>

        </div>


    )
}

export default RegisterStartup