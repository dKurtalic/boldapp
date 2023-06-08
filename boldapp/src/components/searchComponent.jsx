import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrUserManager, GrLocation } from 'react-icons/gr'

const SearchComponent = () => {
    return (
        <div className="bg-lightMint grid p-[3rem] rounded-xl w-[90%] m-auto gp-10 gap-5 items-center ">

            <form action="">
                <div className="m-auto p-[1rem] justify-between flex flex-wrap bg-slate-100 shadow-md gap-10 shadow-slate-400 rounded-lg">

                    <div className='flex items-center gap-2'>
                        <BsSearch className='tapIcon  text-[25px]' />
                        <input type='text' className='text-midnightBlue bg-transparent focus:outline-none mx-2 w-[100%]' placeholder="Search startups" />
                        <AiOutlineCloseCircle className='tapIcon text-[25px] text-gray hover:text-vibrantCoral icon' />
                    </div>

                    <div className='flex items-center gap-2'>
                        <GrUserManager className='tapIcon text-[25px]' />
                        <input type='text' className='text-midnightBlue bg-transparent focus:outline-none mx-2 w-[100%]' placeholder="Search positions" />
                        <AiOutlineCloseCircle className='tapIcon text-[25px] text-gray hover:text-vibrantCoral icon' />
                    </div>

                    <div className='flex items-center gap-2'>
                        <GrLocation className='tapIcon text-[25px]' />
                        <input type='text' className='text-midnightBlue bg-transparent focus:outline-none mx-2 w-[100%]' placeholder="Search by location" />
                        <AiOutlineCloseCircle className='tapIcon text-[25px] text-gray hover:text-vibrantCoral icon' />
                    </div>
                    <button className="bg-googlePlava rounded-lg px-10 py-5 text-white cursor-pointer hover:bg-navyBlue"> Search  </button>
                </div>


            </form>


            <div className='flex flex-wrap items-center justify-center gap-16'>
                <div>
                    <label htmlFor='relevance' className='text-midnightBlue font-semibold'>Sort by</label>
                    <select name="" id="relevance" className="rounded-[10px] outline-none mx-5 px-5">
                        <option value="">Relevance</option>
                        <option value="">Date</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='relevance' className='text-midnightBlue font-semibold'>Type</label>
                    <select name="" id="relevance" className="rounded-[10px] outline-none mx-5 px-5">
                        <option value="">Co-founder</option>
                        <option value="">Teammate</option>
                        <option value="">Contract</option>
                    </select>
                </div>

                <div >
                    <label htmlFor='relevance' className='text-midnightBlue font-semibold'>Level</label>
                    <select name="" id="relevance" className="rounded-[10px] outline-none mx-5 px-5">
                        <option value="">No prior experience</option>
                        <option value="">Junior</option>
                        <option value="">Medior</option>
                        <option value="">Senior</option>
                    </select>
                </div>

                <div className="text-gray cursor-pointer">Clear all</div>
            </div>
        </div>
    )
}

export default SearchComponent