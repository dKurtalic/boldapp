import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrUserManager, GrLocation } from 'react-icons/gr'

const ExplorePage = () => {
  return (

    <div className="bg-lightMint p-[3rem] rounded-md w-[90%] m-auto gp-10">

      <form action="">
        <div className="m-auto p-[1rem]  justify-between flex bg-slate-100 shadow-md gap-10 shadow-slate-400 rounded-md">

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
          <button className="bg-vibrantCoral rounded-[10px] px-10 py-5 text-white cursor-pointer hover:bg-darkVibrantCoral"> Search  </button>
        </div>


      </form>

      <div className='flex items-center justify-center gap-10'>

      </div>
    </div>


  )
}

export default ExplorePage;