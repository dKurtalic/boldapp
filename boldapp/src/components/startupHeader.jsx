import React from 'react'
import { useNavigate } from "react-router-dom";

const StartupHeader = ({ name, logo, coverPhoto }) => {
    const navigate = useNavigate();
    const url = "/startupDetails/" + name;
    return (
        <div onClick={() => { navigate(url) }}>
            {coverPhoto && <div className='flex  bg-cover bg-center bg-no-repeat h-[15rem]  bg-lightBackground  ' style={{ backgroundImage: `url(${coverPhoto})` }} />}
            <div className='flex flex-wrap gap-4 mt-10 lg:ml-[10rem] ml-10 xs:ml-[5rem] xs:justify-center  items-center'>

                {logo && <img src={logo} alt="logo" className='h-[5rem] rounded-md mr-3' />}
                <div className='text-4xl font-extrabold text-black'>{name}</div>


            </div>

        </div>

    )
}

export default StartupHeader