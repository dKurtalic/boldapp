import React from 'react'

const StartupHeader = ({ name, logo, coverPhoto }) => {
    const url = "/startupDetails/" + name;
    return (
        <div>
            <a href={url}>
                {coverPhoto && <div className='flex  bg-cover bg-center bg-no-repeat h-[15rem]  bg-lightBackground  ' style={{ backgroundImage: `url(${coverPhoto})` }} />}
                <div className='flex flex-wrap gap-4 mt-10 lg:ml-[10rem] xs:ml-[5rem] xs:justify-center  items-center'>

                    <img src={logo} alt="logo" className='h-[5rem] rounded-md mr-3' />
                    <div className='text-4xl font-extrabold text-black'>{name}</div>


                </div>
            </a>
        </div>

    )
}

export default StartupHeader