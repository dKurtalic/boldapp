import React from 'react'
import NavBar from '../components/navBar'
import coverPhoto from '../res/coverPhoto.png'
import ellipse1 from '../res/Ellipse 1.png'
import ellipse2 from '../res/Ellipse 2.png'
import ellipse3 from '../res/Ellipse 3.png'
import Footer from '../components/footer'

const LandingPage = () => {
    return (
        <div >
            <div className='w-[90%] justify-between items-center m-auto'>
                <div className='flex justify-center items-center bg-cover bg-center bg-no-repeat h-[30rem]  bg-lightBackground rounded-3xl mx-10 ' style={{ backgroundImage: `url(${coverPhoto})` }}>
                    <div className='text-center  '>
                        <h2 className='text-5xl text-white pb-12'>Build the perfect startup squad </h2>
                        <h3 className='text-2xl text-white font-semibold'>Connect with co-founders and teammates</h3>
                    </div>
                </div>

                <div className='px-10'>
                    <h4 className='text-xl pt-9'>How it works?</h4>
                    <h1 className='text-3xl font-bold pt-1'>It only takes a few minutes to get started on StartApp</h1>

                    <div className='flex justify-center items-center'>

                        <div className='items-center justify-center px-10 flex flex-col '>
                            <div className='m-5 '>
                                <img src={ellipse1} className='h-[8rem] max-w-full rounded-full' alt="" />
                            </div>
                            <div className='text-center'>
                                <h3 className='text-base font-semibold'>Create a Profile and Pitch</h3>
                                <h4 className='text-sm'>Showcase your startup idea, industry, and progress. Upload a pitch deck to attract co-founders.</h4>
                            </div>
                        </div>



                        <div className='items-center justify-center px-10 flex flex-col '>
                            <div className='m-5'>
                                <img src={ellipse2} className='h-[8rem]  max-w-full rounded-full' alt="" />
                            </div>
                            <div className='text-center'>
                                <h3 className='text-base font-semibold'>Discover and Connect</h3>
                                <h4 className='text-sm'>Explore startup profiles, review pitch decks, and connect with founders and teammates who align with your interests.</h4>
                            </div>
                        </div>

                        <div className='items-center justify-center px-10 flex flex-col '>
                            <div className='m-5'>
                                <img src={ellipse3} className='h-[8rem]  max-w-full' alt="" />
                            </div>
                            <div className='text-center'>
                                <h3 className='text-base font-semibold'>Collaborate and Build</h3>
                                <h4 className='text-sm'>Form a strong team. Together, build your startup and bring your vision to life</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default LandingPage;