import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="bg-gray-200">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 py-8 lg:p-4 mt-8">
        <div className="lg:w-1/2">
          <img src="https://media.istockphoto.com/id/1182187147/photo/baby-kid-toys-collection-on-blue-and-yellow-background.jpg?s=612x612&w=0&k=20&c=IDh4tPyoCZGkc-FgIOKpDlaXzYWmFBMG4PRYrQ4wNF8=" alt="Banner" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Welcome to the Toy`s World</h2>
          <p className="text-xl lg:text-2xl text-gray-700 mb-6 font-semibold">Find your toys for Your child . Lots of toys is available on our website </p>
          {/* <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">Explore Now</button> */}
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;