import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [alldetails, setdetails] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/toysDetails')
            .then(res => res.json())
            .then(data => setdetails(data))
    }, [])
    return (
        <div>
            <h2 className='text-center bg-gray-200 p-6 rounded-lg text-2xl font-semibold mt-10'>In which toys You can be like from this photo Gallery ?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-5  rounded-lg border-gray-800 border p-4 mt-20 '>
                {
                    alldetails.map(details =>

                        <img className=' p-2 card w-96  bg-base-100 shadow-xl mt-6  border-2 hover:bg-gray-200 translate-x-2 delay-100 transform-cpu' src={details.img} key={details._id} alt="" />


                    )
                }
            </div>

        </div>
    );
};

export default Gallery;