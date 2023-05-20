import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const Details = useLoaderData()
    console.log(Details)
    const { name,img, price, description, category, ratings,quantity } = Details;
    return (
        <div className='mt-8 '>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" className='p-4' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <div>
                    <p> Sub Category :{category}</p></div>
                    <p> price $ {price}</p>
                    <p> quantity: {quantity}</p>
                    <p> Description:{description}</p>
                    <Rating
                                style={{ maxWidth: 150 }}
                                value={ratings}
                                readOnly
                            />
                    <div className="card-actions justify-start">
                        <button className="btn bg-gray-600">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;