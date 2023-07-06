import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from '../hooks/useAuthContex'

const RegisterStartupForm = () => {
    const [image, setImage] = useState()
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef()
    const [error, setError] = useState(null)

    function selectFiles() {
        event.preventDefault()
        fileInputRef.current.click()
    }
    const { user } = useAuthContext()
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        description: '',
        founders: '',
        location: '',
        logo: '',
        foundingDate: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'foundingDate') {
            const date = new Date(value);
            const formattedDate = date.toISOString().split('T')[0];
            setForm({ ...form, foundingDate: formattedDate });
        } else {
            setForm({ ...form, [name]: value });
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name || !form.location || !form.description) {
            if (!form.name) console.log("name")
            if (!form.location) console.log("location")
            if (!form.description) console.log("description")
            setError('Please fill in all required fields');
            return;
        }
        else setError(null)

        setLoading(true);

        try {


            const founderUrl = 'https://boldapp.onrender.com/userByEmail/' + user.email;
            console.log("Founder url " + founderUrl)
            let founder = null;
            const founderResponse = await fetch(founderUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (founderResponse.ok) {
                founder = await founderResponse.json();
                console.log("Founder je ", founder);
            } else {
                console.log("ejoj");
            }

            const response = await fetch('https://boldapp.onrender.com/startup/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    description: form.description,
                    members: [{ user: founder, position: "Founder" }],
                    logo: image
                }),
            });

            if (response.ok) {
                const newStartup = await response.json();
                const url = '/startupDetails/' + newStartup.name
                window.location.href = url

            } else {
                const errorData = await response.json();
                console.error('Registration failed:' + errorData.error);
            }
        } catch (error) {
            console.error(error.message);
        }

        setLoading(false);
    };

    function onFileSelect(event) {
        if (!image) setImage(null)
        const files = event.target.files;
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);

        var reader = new FileReader()
        reader.readAsDataURL(files[0])
        reader.onload = () => {
            setImage(reader.result)
            console.log("IMAGE : " + image)

        }
        reader.onerror = error => {
            console.log("Error " + error);
        }

    };


    function checkFiles(files) {
        if (files.length == 0) { setError("Invalid image"); return false; }
        if (files[0].type.split('/')[0] != 'image') { setError("Invalid image"); return false; }
        return true;
    }

    function deleteImage(index) {
        setImage(null)
        setError(null)
    }
    function onDragOver(event) {

        event.preventDefault()
        setIsDragging(true)
        event.dataTransfer.dropEffect = 'copy'
    }
    function onDragLeave(event) {
        event.preventDefault()
        setIsDragging(false)
    }
    function onDrop(event) {

        event.preventDefault()
        if (!image) setImage(null)
        setError(null)
        setIsDragging(false)

        const files = event.dataTransfer.files
        if (!checkFiles(files)) setError("Invalid image")
        else {
            var reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = () => {
                console.log(reader.result)
                setImage(reader.result)
            }
            reader.onerror = error => {
                console.log("Error " + error);
            }

            console.log(files[0])

        }
    }

    return (
        <div className='bg-lightGray lg:w-[55%] lg:h-[50%]   lg:pr-10 mx-auto shadow-lg rounded-lg p-5'>
            <h2 className='font-bold text-textColor text-2xl lg:justify-end mb-7'>Register your startup</h2>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='flex flex-col flex-wrap gap-4'>
                <div className='flex flex-row flex-wrap'>
                    <div>
                        <div className="grid grid-cols-2 ">
                            <input
                                className='p-2 rounded-xl border m-3'
                                type='text'
                                name='name'
                                placeholder='Name'
                                onChange={handleChange}
                                value={form.name}
                            />
                            <input
                                className='p-2 rounded-xl border m-3'
                                type='date'
                                name='foundingDate'
                                placeholder='Founding date'
                                onChange={handleChange}
                                value={form.foundingDate}
                            />
                        </div>


                        <input
                            className='p-2 rounded-xl border m-3'
                            type='text'
                            name='location'
                            onChange={handleChange}
                            placeholder='Location'
                            value={form.location}
                        />

                        <textarea
                            className='p-2 rounded-xl h-[5rem] sm:w-[100%]  lg:w-[95%] border m-3 '
                            name='description'
                            placeholder='Describe your startup'
                            onChange={handleChange}
                            value={form.description}
                        />
                    </div>
                    <div className=''>
                        <div className='drag-area  p-2 none rounded-xl h-[90%] w-[100%] m-3 border-dashed border-gray border-[2px] bg-slate-200 flex justify-center items-center select-none mt-[10px]' onDrop={onDrop}
                            onDragLeave={onDragLeave}
                            onDragOver={onDragOver} >
                            {
                                isDragging ? (
                                    <div>Drop image here</div>
                                ) : (
                                    <div className='text-center  lg:block md:flex sm:flex'>
                                        <div className='m-2'>Drag & Drop your logo here</div>
                                        <div className='m-2'>or</div>
                                        <button className='select m-2 border-[1px] border-gray p-2 rounded-xl' role='button' onClick={selectFiles}>
                                            Browse
                                        </button>
                                    </div>
                                )
                            }
                            <input
                                id='myFileInput'
                                accept='image/*'
                                className='dragndrop '
                                type='file'
                                name='logo'
                                value={form.logo}
                                multiple ref={fileInputRef}
                                onChange={onFileSelect}

                            />
                        </div>

                        <div className='p-2'>

                            {image && error == null && <div>
                                <div>Uploaded image:</div>
                                <div className='flex justify-between'>
                                    <img src={image} className='h-[2rem]' />
                                    <button onClick={deleteImage}>Delete image</button>
                                </div>
                            </div>}
                            {error && (
                                <div>{error}</div>
                            )}
                        </div>
                    </div>

                </div>

                <div className=' text-center'>
                    <button onClick={handleSubmit} className='bg-navyBlue my-3  rounded-xl w-[30%] text-white py-2 hover:scale-105 duration-300'>
                        Register
                    </button>
                </div>
            </form>



        </div>


    )
}

export default RegisterStartupForm