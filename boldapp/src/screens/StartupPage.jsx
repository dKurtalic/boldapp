import React, { useState } from 'react'
import StartupHeader from '../components/startupHeader'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TiLocation } from 'react-icons/ti'
import createDateFromString from '../functions/dateFromString';


const StartupPage = () => {
    const { startupName } = useParams()

    const url = "https://boldapp.onrender.com/startupDetails/" + startupName;
    const [startupData, setStartupData] = useState(null);
    const [positions, setPositions] = useState(null);
    const [date, setDate] = useState(null)

    const fetchStartupData = async () => {
        const response = await fetch(url)
        const json = await response.json()

        if (response.ok) {
            const { _id, name, description, coverPhoto, location, createdAt } = json
            console.log(createdAt)
            setStartupData(json)
            setDate(createDateFromString(createdAt))

        }
    }

    const getPositionsAtStartup = async () => {

        if (startupData) {
            const response = await fetch(`https://boldapp.onrender.com/startup/${startupData._id}/positions`)
            if (response.ok) {
                const positions = await response.json()
                console.log("e ovdje sad imam ")
                console.log(positions)
                setPositions(positions)
            }
        }
    }


    useEffect(() => {
        fetchStartupData()

    }, [])

    useEffect(() => {
        getPositionsAtStartup()
    }, [startupData])

    return (

        <div className='justify-center'>
            {startupData && positions &&
                <div className='mb-20 justify-center items-center'>
                    <StartupHeader coverPhoto={startupData.coverPhoto} name={startupData.name} logo={startupData.logo} />

                    <div className='mt-10 gap-[3rem] flex justify-center'>
                        <div className='flex  w-[50%]'>
                            <div>
                                <div className=' font-medium text-lg mb-4'>Description</div>
                                <div>{startupData.description}</div>
                            </div>
                        </div>

                        <div className=' border-l-2 border-gray ' />

                        <div className='grid grid-flow-row gap-5'>
                            <div className=' font-bold text-xl mb-3'> About</div>

                            <div>
                                <div className='flex items-center mb-3'>
                                    <TiLocation className='mr-2 text-xl text-black ' />
                                    <div className=' font-semibold text-xl '>Location</div>
                                </div>
                                <div className=' text-xl  mb-4 font-normal' >{startupData.location}</div>
                            </div>

                            <div>
                                <div className='flex items-center mb-3'>
                                    <TiLocation className='mr-2 text-xl text-black ' />
                                    <div className=' font-semibold text-xl '>Join date</div>
                                </div>
                                <div className=' text-xl  mb-4 font-normal' >{date}</div>
                            </div>

                            <div>
                                <div className='flex items-center mb-3'>
                                    <TiLocation className='mr-2 text-xl text-black ' />
                                    <div className=' font-semibold text-xl '>No. of team members</div>
                                </div>
                                <div className=' text-xl  mb-4  font-normal' >{startupData.members.length != 0 ? startupData.members.length : "unknown"}</div>
                            </div>

                        </div>
                    </div>


                    {startupData.photos && startupData.photos.length > 0 &&
                        <div className=' mt-10'>
                            <div className='gap-4 px-8  flex pb-5 justify-center items-center '>
                                <div className=' w-[80%] overflow-x-scroll gap-8 flex cursor-pointer relative group  mb-2 bg-neutral-800  rounded-md p-4'>
                                    {startupData.photos.map((slika) => {
                                        return (
                                            <img className='lg:h-[23rem]  mb-4 rounded-xl' src={slika} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    }

                    {positions && positions.length > 0 ? (
                        < div className=' ml-[10rem]'>
                            <div className='mt-10 text-xl font-semibold mb-5'>Positions needed:</div>
                            {

                                positions.map((position) => {
                                    return <button className='rounded-full mx-4 bg-googlePlava px-5 py-5' onClick={() => { window.location.href = `/startupDetails/${startupData.name}/${position._id}` }}>
                                        {position.jobTitle}
                                    </button>
                                })
                            }
                        </div>) : (
                        <div className='mt-10 ml-[10rem] text-lg font-semibold mb-5'>There are currently no open positions available.</div>
                    )
                    }



                    <div style={{ position: 'relative' }}>
                        <div className='flex justify-end items-end  bottom-0 right-0 mb-5 mr-5'>
                            <div className='bottom-5 right-5'> <button className='rounded-full mx-4 bg-googlePlava px-10 text-white py-5'>APPLY</button></div>
                        </div>
                    </div>
                </div>
            }

        </div >
    )
}

export default StartupPage

/* {
                            positions &&
                            positions.map((position) => {
                                return <button className='rounded-full mx-4 bg-googlePlava px-5 py-5' onClick={() => { window.location.href = `/startupDetails/${startupData.name}/${position.jobTitle}` }}>
                                    {position.jobTitle}
                                </button>
                            })
                        } */