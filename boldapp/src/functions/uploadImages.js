import { useState, useRef } from 'react';


export default function uploadImages() {
    const [images, setImages] = useState()
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef()

    function selectFiles() {
        fileInputRef.current.click()
    }
    function onChangeSelect(event) {
        const files = event.target.files;
        if (files.length == 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] != 'image') continue;
            if (!images.some((e) => { e.name === files[i].name }))
                setImages((prevImages) => [
                    ...prevImages, {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i])
                    }
                ])
        }
    }


    function deleteImage(index) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        )
    }
    return (
        <div className='drag-area'>

            <input
                className='p-2 rounded-xl h-[13rem] m-3 border-dashed border-gray border-[2px] bg-slate-200 flex justify-center items-center select-none mt-[10px]'
                type='file'
                name='logo'
                placeholder='Drag and drop your logo'

                value={form.logo}
                multiple ref={fileInputRef}
                onChange={onChangeSelect}
            />

            <div>
                {images.map((image, index) => {
                    <div className='image' key={index}>
                        <span className='delete' onClick={() => { deleteImage(index) }}>&times;</span>
                        <img src={image.url} />
                    </div>
                })}
            </div>
        </div>
    );
}