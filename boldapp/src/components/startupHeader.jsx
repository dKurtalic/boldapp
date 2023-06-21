import React from 'react'

const StartupHeader = ({ name, logo, coverPhoto }) => {
    return (
        <div>
            <div className='flex justify-center items-center bg-cover bg-center bg-no-repeat h-[15rem]  bg-lightBackground ' style={{ backgroundImage: `url(${coverPhoto})` }} />
            <div className='flex gap-4 mt-10 ml-[10rem] items-center   '>
                <img src={logo} alt="logo" className='h-[5rem] rounded-md mr-3' />
                <div className='text-4xl font-extrabold text-black'>{name}</div>


            </div>
        </div>

    )
}

export default StartupHeader