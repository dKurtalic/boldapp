import React, { useEffect, useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import slika from '../res/paypalLogo.jpg'
import { TfiLocationPin } from 'react-icons/tfi'
import createDateFromString from '../functions/dateFromString';
import { useNavigate } from "react-router-dom";



const StartupCard = ({ _id, name, description, openPositions, createdAt, logo, location }) => {

    const [positions, setPositions] = useState(null)
    const date = createDateFromString(createdAt);
    const url = "/startupDetails/" + name;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(url);
    };

    const getPositionsAtStartup = async () => {
        try {
            const response = await fetch(`https://long-tan-firefly-tam.cyclic.app/startup/${_id}/positions`)
            if (response.ok) {
                const positions = await response.json()
                console.log("e ovdje sad imam ")
                console.log(positions)
                setPositions(positions)
            }
        }
        catch (error) {
            console.error("Error")
        }
    }

    useEffect(() => {
        getPositionsAtStartup()
    }, [])

    return (

        <div className='group inline-block m-7 p-5 shadow-md shadow-slate-400 rounded-lg hover:bg-googlePlava'>

            <div className='flex' onClick={handleNavigation}>
                {logo ? <img src={logo} alt="logo" className='h-20 w-20 rounded-md mr-3' /> : <img src={slika} alt="logo" className='h-20 w-20 rounded-md mr-3' />
                }
                <div className='flex justify-between w-full'>
                    <div className=''>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-textColor group-hover:text-white text-[1.5rem] break-all'>{name}</h1>
                        </div>
                        <div className='flex '>
                            <TfiLocationPin className='text-gray mr-2 mt-1 text-[15px] items-center' />
                            <h6 className='text-gray group-hover:text-white text-[15px]'>{location}</h6>
                        </div>
                    </div>
                    < AiOutlineHeart className='text-[30px] hover:text-white m-1' />
                </div>

            </div>
            <div className="border-t-2 mt-8 border-gray group-hover:border-white"></div>
            <div className='text-gray group-hover:text-white mt-3 ' >
                {description.length > 100 ? description.slice(0, 100) + "..." : description}
            </div>


            <div className='positions pt-3 space-x-2 space-y-2 text-[13px] font-semibold text-gray'>
                {
                    positions && positions.length > 0 && positions.map((element, index) => {
                        return (
                            <button key={index}
                                className='rounded-md bg-lightGray inline-block p-2'
                                onClick={() => { navigate(`/startupDetails/${startupData.name}/${position._id}`) }}>
                                {element.jobTitle}
                            </button>)

                    })
                }
            </div>
            <div className='pt-4 flex justify-between items-center relative bottom-0'>
                <div className='text-gray group-hover:text-white'>Posted: {date}</div>
                <button className='border-[0.5px]  border-navyBlue rounded-[10px] block p-2 font-semibold text-textColor  hover:bg-navyBlue group-hover:text-white'>Apply</button>
            </div>

        </div>

    )
}

export default StartupCard