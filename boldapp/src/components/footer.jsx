import React from 'react'
import logo from '../res/network.png'
import { AiOutlineSend } from 'react-icons/ai'
import network2020 from '../res/network2020.png'
import { TfiLocationPin } from 'react-icons/tfi'

const Footer = () => {
    return (
        <div className='bg-googlePlava w-[90%] rounded-xl p-[2rem] my-[2rem] mx-auto justify-between flex flex-wrap'>
            <div className='w-[40%]'>
                <h1 className='text-[2rem] font-bold text-white'>Let's start something great</h1>
                <div className='text-lightGray mt-6'>
                    Connect with co-founders and teammates for your startup journey. Find the perfect match for your startup's success. Join our platform and collaborate with like-minded individuals, turning ideas into reality.
                </div>
            </div>

            <div className='grid'>
                <span className='text-[18px] font-bold text-lightGray pt-3'>Who are we?</span>
                <div className='grid gap-1'>
                    <li className='text-lightGray opacity-[.7] hover:opacity-1'>About us</li>
                </div>
                <div className='flex items-center'>
                    <TfiLocationPin className='text-lightGray mr-2' />
                    <div className='text-lightGray '>
                        Sarajevo, BiH
                    </div>
                </div>
            </div>
            <div className='text-[18px] font-bold text-lightGray pt-3'>
                Supported by
                <img src={network2020} className='w-100% h-[3.5rem] mt-7' />
            </div>

            <div className=''>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='w-[4rem] h-[4rem]' />
                    <h1 className='logo text-[25px] text-textColor pl-3'>
                        <strong>Start</strong>App
                    </h1>
                </div>

                <div className="email-input flex items-center justify-end mt-4">
                    <input className='rounded-md p-2' type="email" placeholder="Enter your email" />
                    <button className='rounded-md text-[2rem] text-white p-2'><AiOutlineSend /></button>
                </div>
            </div>
        </div>
    )
}

export default Footer