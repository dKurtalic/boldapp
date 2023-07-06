import React, { useEffect, useState } from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import slika from '../res/paypalLogo.jpg'
import { TfiLocationPin } from 'react-icons/tfi'
import createDateFromString from '../functions/dateFromString'
import StartupCard from './startupCard'



const StartupContainer = () => {

    const [startupData, setStartupData] = useState(null)
    const fetchStartupData = async () => {
        const response = await fetch("https://boldapp.onrender.com/startups")
        const json = await response.json()

        if (response.ok) {
            setStartupData(json)
        }
    }

    useEffect(() => {
        fetchStartupData()
    }, [])


    return (
        <div className='m-auto grid grid-cols-[repeat(auto-fit,minmax(410px,1fr))] gap-2 justify-items-center w-[95%]'>
            {
                startupData && startupData.map(({ _id, name, description, openPositions, createdAt, logo, location }) => {
                    return <StartupCard _id={_id} name={name} description={description} openPositions={openPositions} createdAt={createdAt} logo={logo} location={location} />
                })
            }
        </div>
    )
}

export default StartupContainer