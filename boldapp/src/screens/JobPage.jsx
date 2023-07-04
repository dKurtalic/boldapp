import React, { useEffect, useState } from 'react'
import StartupHeader from '../components/startupHeader'
import { useParams } from 'react-router-dom'
import { TiLocation } from 'react-icons/ti'
import '../index.css';




const makeBulletPoints = (tekst) => {

    const bulletPoints = tekst.map((line, index) => (
        <li key={index} className='items-center'><span>{line}</span></li>
    ));
    return (
        <ul className="specialBullets">
            {bulletPoints}
        </ul>
    );
};
const JobPage = () => {
    const { startupName, jobId } = useParams()


    const jobUrl = "http://localhost:4000/position/" + jobId;


    const startupurl = "http://localhost:4000/startupDetails/" + startupName;
    const [jobData, setJobData] = useState(null)
    const [startupData, setStartupData] = useState(null)

    const fetchData = async () => {
        const response = await fetch(jobUrl)
        const json = await response.json()
        const startupResponse = await fetch(startupurl)
        const startupJSON = await startupResponse.json()

        if (response.ok && startupResponse.ok) {
            setJobData(json)
            setStartupData(startupJSON)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            {startupData && jobData &&
                <div className='mb-20 '>
                    <StartupHeader name={startupName} logo={startupData.logo} coverPhoto={startupData.coverPhoto} />
                    <div className='mt-[3rem]  gap-[3rem] lg:flex justify-center  mx-10 '>

                        <div className='lg:w-[60%] '>
                            <div className='flex justify-between'>
                                <div className='font-bold text-3xl mb-[3rem] '>{jobData.jobTitle}</div>
                                <div className='flex items-start mx-5'>
                                    <div className='bottom-5 right-5'> <button className='rounded-full  mx-2 bg-blueGray px-7 text-white py-2'>{jobData.level}</button></div>
                                    <div className='bottom-5 right-5'> <button className='rounded-full mx-2 bg-lightGreen px-7 text-white py-2'>{jobData.type}</button></div>
                                </div>
                            </div>
                            <div className=''>
                                <div className=' font-bold text-lg mb-2'>Job Description</div>
                                {jobData.jobDescription}
                                <div></div>
                            </div>

                            <div className='mt-[3rem] '>
                                <div className=' font-bold text-lg mb-2'>Key responsibilities</div>
                                {makeBulletPoints(jobData.keyResponsibilities)}
                                <div></div>
                            </div>

                            <div className='mt-[3rem] '>
                                <div className=' font-bold text-lg mb-2'>Requirements</div>
                                {makeBulletPoints(jobData.requirements)}
                                <div></div>
                            </div>

                        </div>




                        <div className='border-l-2 border-gray ' />

                        <div >
                            <div className=' font-bold text-xl mb-3 sm:m-10 md:m-10'> About</div>

                            <div className='grid lg:grid-flow-row md:grid-flow-col  md:justify-center sm:justify-center gap-10'>

                                <div>
                                    <div className='flex  mb-3'>
                                        <TiLocation className='mr-2 text-xl text-black ' />
                                        <div className=' font-semibold text-xl '>Location</div>
                                    </div>
                                    <div className=' text-xl  mb-4 font-normal' >{startupData.location}</div>
                                </div>

                                <div>
                                    <div className='flex mb-3'>
                                        <TiLocation className='mr-2 text-xl text-black ' />
                                        <div className=' font-semibold text-xl '>Join date</div>
                                    </div>
                                    <div className=' text-xl  mb-4 font-normal' >05/05/2005</div>
                                </div>

                                <div>
                                    <div className='flex mb-3'>
                                        <TiLocation className='mr-2 text-xl text-black ' />
                                        <div className=' font-semibold text-xl '>No. of team members</div>
                                    </div>
                                    <div className=' text-xl  mb-4  font-normal' >{startupData.members.length != 0 ? startupData.members.length : "unknown"}</div>
                                </div>

                                <div className='bottom-5 right-5'> <button className='rounded-full mx-4 bg-googlePlava px-10 text-white py-5'>APPLY</button></div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}


export default JobPage