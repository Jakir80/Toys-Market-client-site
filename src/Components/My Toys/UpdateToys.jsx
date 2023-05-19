import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../JSFUNCTION/useTitle';

const UpdateToys = () => {
    const updatesToys=useLoaderData();
    useTitle("Update Toys")
    console.log(updatesToys)
    const {name,email,img,price,description,photo,category,ratings,_id}=updatesToys;
    return (
        <div className=" bg-gray-200 p-10 rounded-lg shadow-lg">
        <form >
   
        <div className="grid grid-cols-2 gap-4 mb-4">
         <div>
             <label className="text-gray-700 font-medium">Category</label>
             <input
               type="text"
               name='category'
               defaultValue={category}
               className="w-full border border-gray-400 rounded px-3 py-2"
               placeholder="Enter product Product category"
             />
           </div>
         <div>
             <label className="text-gray-700 font-medium">Phot Url</label>
             <input
               type="text"
               name='img'
               defaultValue={photo}
               className="w-full border border-gray-400 rounded px-3 py-2"
               placeholder="Enter product phot url"
             />
           </div>
         </div>
         <div className="grid grid-cols-2 gap-4 mb-4">
          
           <div>
             <label className="text-gray-700 font-medium">Price</label>
             <input
               type="text"
               defaultValue={price}
               className="w-full border border-gray-400 rounded px-3 py-2"
               placeholder="Enter price"
               name='price'
             />
           </div>
         </div>
       <div className='grid grid-cols-2 gap-4 mb-4'>
   
       <div>
           <label className="text-gray-700 font-medium">Product Name</label>
           <input
             type="name"
             defaultValue={name}
             className="w-full border border-gray-400 rounded px-3 py-2"
             placeholder="Enter product Name"
             name='name'
           />
         </div>
         <div className="mb-4">
           <label className="text-gray-700 font-medium">Rating</label>
           <input
             type="number"
             defaultValue={ratings}
             className="w-full border border-gray-400 rounded px-3 py-2"
             placeholder="Enter rating"
             name='rating'
           />
         </div>
       </div>
       <div className="mb-4">
           <label className="text-gray-700 font-medium">Description</label>
           <input
             type="text"
             defaultValue={description}
             className="w-full border border-gray-400 rounded px-3 py-2"
             placeholder="Enter Description"
             name='description'
           />
         </div>
         <button className="bg-gray-600 btn-block btn  text-white px-4 py-2 rounded hover:bg-gray-800">
         Submit
         </button>
        </form>
       </div>
    );
};

export default UpdateToys;