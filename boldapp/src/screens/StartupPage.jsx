import React, { useState } from 'react'
import StartupHeader from '../components/startupHeader'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { TiLocation } from 'react-icons/ti'
import createDateFromString from '../functions/dateFromString';

console.log("dosla")
const StartupPage = () => {
    const { startupName } = useParams()

    const url = "http://localhost:4000/startupDetails/" + startupName;
    const [startupData, setStartupData] = useState(null);

    const fetchStartupData = async () => {
        const response = await fetch(url)
        const json = await response.json()

        if (response.ok) {
            const { _id, name, description, coverPhoto, location } = json
            setStartupData(json)
        }
    }
    useEffect(() => {
        fetchStartupData()
    }, [])



    if (startupData != null) console.log("Members: " + startupData.members.length)
    else console.log("still null")

    return (

        <div className='justify-center'>
            {startupData &&
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
                                    <div className=' font-semibold text-xl '>Join date</div>
                                </div>
                                <div className=' text-xl  mb-4 font-normal' >{startupData.location}</div>
                            </div>

                            <div>
                                <div className='flex items-center mb-3'>
                                    <TiLocation className='mr-2 text-xl text-black ' />
                                    <div className=' font-semibold text-xl '>Join date</div>
                                </div>
                                <div className=' text-xl  mb-4 font-medium' >05/05/2005</div>
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


                    <div className=' ml-[10rem]'>
                        <div className='mt-10 text-xl font-semibold mb-5'>Positions needed:</div>
                        {
                            startupData.openPositions &&
                            startupData.openPositions.map((position) => {
                                return <button className='rounded-full mx-4 bg-googlePlava px-5 py-5' onClick={() => { window.location.href = `/startupDetails/${startupData.name}/${position.jobTitle}` }}>
                                    {position.jobTitle}
                                </button>
                            })
                        }
                    </div>




                    <div style={{ position: 'relative' }}>
                        <div className='flex justify-end items-end  bottom-0 right-0 mb-5 mr-5'>
                            <div className='bottom-5 right-5'> <button className='rounded-full mx-4 bg-googlePlava px-10 text-white py-5'>APPLY</button></div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default StartupPage