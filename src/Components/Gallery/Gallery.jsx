import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [alldetails, setdetails] = useState([])
    useEffect(() => {
        fetch('https://toys-market-server-site.vercel.app/toysDetails')
            .then(res => res.json())
            .then(data => setdetails(data))
    }, [])
    return (
        <div>
            <h2 className='text-center bg-gray-200 p-6 rounded-lg text-2xl font-semibold mt-10'>In which toys You can be like from this photo Gallery ?</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5  rounded-lg border-gray-800 border p-4 mt-20 '>
                {
                    alldetails.map(details =><>
 <div key={details._id} className="flex flex-wrap justify-center">
        <div className="w-full p-2">
          <div className="relative group">
            <div className="aspect-w-1 aspect-h-1">
              <img
                className="object-cover p-2 border-gray-500 border-2 w-full h-full transition-all duration-300 transform-gpu hover:scale-110"
                src={details.img}
                alt="Your Image"
              />
            </div>
          </div>
        </div>
        {/* Add more images with the same structure */}
      </div>
</>

                    )
                }
            </div>

        </div>
    );
};

export default Gallery;