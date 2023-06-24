import React, { useEffect, useState } from 'react'
import StartupHeader from '../components/startupHeader'
import { useParams } from 'react-router-dom'
import { TiLocation } from 'react-icons/ti'
import '../index.css';




const makeBulletPoints = (tekst) => {
    const text = tekst.toString();
    const lines = text.split('\n');
    const bulletPoints = lines.map((line, index) => (
        <li key={index} className='items-center'><span>{line}</span></li>
    ));
    return (
        <ul className="specialBullets">
            {bulletPoints}
        </ul>
    );
};
const JobPage = () => {
    const { startupName, jobTitle } = useParams()


    const jobUrl = "http://localhost:4000/startupDetails/" + startupName + "/" + jobTitle;

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
                <div className='mb-20 r  '>
                    <StartupHeader name={startupName} logo={startupData.logo} coverPhoto={startupData.coverPhoto} />

                    <div className='mt-[3rem]  gap-[3rem] flex justify-center  '>


                        <div className=' w-[50%]'>
                            <div className=''>
                                <div className=' font-bold text-lg mb-2'>Job Description</div>
                                {jobData[0].openPositions[0].jobDescription}
                                <div></div>
                            </div>

                            <div className='mt-[3rem] '>
                                <div className=' font-bold text-lg mb-2'>Key responsibilities</div>
                                {makeBulletPoints(jobData[0].openPositions[0].keyResponsibilities)}
                                <div></div>
                            </div>

                            <div className='mt-[3rem] '>
                                <div className=' font-bold text-lg mb-2'>Requirements</div>
                                {jobData[0].openPositions[0].requirements}
                                <div></div>
                            </div>

                        </div>




                        <div className='border-l-2 border-gray ' />

                        <div>
                            <div className='grid grid-flow-row '>
                                <div className=' font-bold text-xl mb-3'> About</div>

                                <div>
                                    <div className='flex  mb-3'>
                                        <TiLocation className='mr-2 text-xl text-black ' />
                                        <div className=' font-semibold text-xl '>Join date</div>
                                    </div>
                                    <div className=' text-xl  mb-4 font-normal' >{startupData.location}</div>
                                </div>

                                <div>
                                    <div className='flex mb-3'>
                                        <TiLocation className='mr-2 text-xl text-black ' />
                                        <div className=' font-semibold text-xl '>Join date</div>
                                    </div>
                                    <div className=' text-xl  mb-4 font-medium' >05/05/2005</div>
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