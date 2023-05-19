import React, { useEffect, useState } from 'react';

const KidsGallery = () => {
    const [images, setimages] = useState([])
    useEffect(() => {
        fetch('https://toys-market-server-site.vercel.app/gallery')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div  className='grid grid-cols-2 lg:grid-cols-3'>
            {
                images.map(image => <>
                    <div key={image._id}  className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:shadow-xl transition-shadow">
                        <div className="relative">
                            <img
                                className="w-full h-auto transition-all duration-300"
                                src={image.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-300 to-gray-500 opacity-0 hover:opacity-75 transition-opacity"></div>
                        </div>

                    </div>



                </>)
            }
        </div>
    );
};

export default KidsGallery;