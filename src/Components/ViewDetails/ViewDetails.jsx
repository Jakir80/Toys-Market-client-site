import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const Details = useLoaderData()
    console.log(Details)
    const { name, email, img, price, description, category, ratings } = Details;
    return (
        <div className='mt-8 '>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <div>
                    <p> Category :{category}</p></div>
                    <p> price$ {price}</p>
                    <p>ratings {ratings}</p>
                    <p> Description:{description}</p>
                    <div className="card-actions justify-start">
                        <button className="btn bg-gray-600">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;