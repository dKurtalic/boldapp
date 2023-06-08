import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
import slika from '../res/paypalLogo.jpg'

const startupData = [
    {
        id: 1,
        image: slika,
        title: "PayPal",
        time: "2 days ago",
        location: "Sarajevo, BiH",
        descr: "An American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers, and serves as an electronic alternative to traditional paper methods such as checks and money orders. ",
        positions: ["Web Developer", "Marketing Manager", "Finance officer", "UX/UI"]
    },
    {
        id: 2,
        image: slika,
        title: "FacebookFacebook",
        time: "20.03.2023",
        location: "New York City, New York, USA",
        descr: "An American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers, and serves as an electronic alternative to traditional paper methods such as checks and money orders. ",
        positions: ["Web Developer"]
    },
    {
        id: 2,
        image: slika,
        title: "FacebookFacebook",
        time: "20.03.2023",
        location: "New York City, New York, USA",
        descr: "An American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers, and serves as an electronic alternative to traditional paper methods such as checks and money orders. ",
        positions: ["Web Developer"]
    },
    {
        id: 2,
        image: slika,
        title: "FacebookFacebookkkkkFacebboook",
        time: "20.03.2023",
        location: "New York City, New York, USA",
        descr: "An American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers, and serves as an electronic alternative to traditional paper methods such as checks and money orders. ",
        positions: ["Web Developer"]
    },
    {
        id: 2,
        image: slika,
        title: "FacebookFacebook",
        time: "20.03.2023",
        location: "New York City, New York, USA",
        descr: "An American multinational financial technology company operating an online payments system in the majority of countries that support online money transfers, and serves as an electronic alternative to traditional paper methods such as checks and money orders. ",
        positions: ["Web Developer"]
    }
]

const StartupContainer = () => {
    return (
        <div className='m-auto grid grid-cols-[repeat(auto-fit,minmax(410px,1fr))] gap-2 justify-items-center w-[95%]'>

            {
                startupData.map(({ id, image, title, time, location, descr, positions }) => {
                    return (


                        <div className='group inline-block w-[400px] m-7 p-5 shadow-lg shadow-slate-400 rounded-lg hover:bg-googlePlava'>
                            <div className='flex'>

                                <img src={image} alt="logo" className='h-20 w-20 rounded-md mr-3' />

                                <div className='flex justify-between w-full'>
                                    <div className=''>
                                        <div className='flex justify-between items-center'>
                                            <h1 className='font-bold text-textColor group-hover:text-white text-[1.5rem] break-all'>{title}</h1>
                                        </div>
                                        <h6 className='text-gray group-hover:text-white text-[15px]'>{location}</h6>
                                    </div>
                                    < AiOutlineHeart className='text-[30px] hover:text-white' />
                                </div>

                            </div>
                            <div className="border-t-2 border- mt-8 border-gray group-hover:text-white"></div>
                            <div className='text-gray group-hover:text-white mt-3 ' >
                                {descr.length > 100 ? descr.slice(0, 100) + "..." : descr}
                            </div>


                            <div className='positions pt-3 space-x-2 space-y-2 text-[13px] font-semibold text-gray'>

                                {positions.map((element) => {
                                    return (
                                        <div className='rounded-md bg-lightGray inline-block p-2'>
                                            {element}
                                        </div>)
                                })}



                            </div>
                            <div className='pt-4 flex justify-between items-center relative bottom-0'>
                                <div className='text-gray group-hover:text-white'>Posted: {time}</div>
                                <button className='border-[0.5px]  border-gray rounded-[10px] block p-2 font-semibold text-textColor  hover:bg-white'>Apply</button>
                            </div>

                        </div>)
                })
            }
        </div>
    )
}

export default StartupContainer