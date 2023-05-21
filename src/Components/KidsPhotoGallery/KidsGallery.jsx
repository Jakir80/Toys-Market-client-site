import React, { useEffect, useState } from 'react';

const KidsGallery = () => {
    const [images, setimages] = useState([])
    useEffect(() => {
        fetch('https://toys-market-server-site.vercel.app/gallery')
            .then(res => res.json())
            .then(data => setimages(data))
    }, [])
    return (
        <div>
            <h2 className='border-2 p-6 m-6 rounded-lg border-gray-400 bg-gray-200 text-center font-semibold text-3xl'>Our kids gallery . <br /> There is some kids photo look like <br /> when children playing and become happy </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    images.map(image => <>
                        <div key={image._id} className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:shadow-xl transition-shadow">
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

        </div>
    );
};

export default KidsGallery;