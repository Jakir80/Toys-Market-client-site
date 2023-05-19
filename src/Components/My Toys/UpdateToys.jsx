import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../JSFUNCTION/useTitle';

const UpdateToys = () => {
    const updatesToys=useLoaderData();
    const {name,email,img,price,description,photo,category,ratings,_id}=updatesToys;   
    const handleupdateToys=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value; 
        const price=form.price.value;     
        const category=form.category.value;
        const description=form.description.value;
        form.reset()
        console.log(name,price,category,description)
        const updatedProduct={ 
            name,price,category,description
        }
        console.log(updatedProduct)
        fetch(`https://toys-market-server-site.vercel.app/updateToys/${_id}`,{
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatedProduct)
      })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount){
              alert("updated data ")
            }
              console.log(data)})
    }
    console.log(updatesToys)
    useTitle("Update Toys")
    
    return (
        <div className=" bg-gray-200 p-10 rounded-lg shadow-lg">
        <form onSubmit={handleupdateToys} >
   
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
         {/* <div>
             <label className="text-gray-700 font-medium">Phot Url</label>
             <input
               type="text"
               name='img'
               defaultValue={photo}
               className="w-full border border-gray-400 rounded px-3 py-2"
               placeholder="Enter product phot url"
             />
           </div> */}
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
         {/* <div className="mb-4">
           <label className="text-gray-700 font-medium">Rating</label>
           <input
             type="number"
             defaultValue={ratings}
             className="w-full border border-gray-400 rounded px-3 py-2"
             placeholder="Enter rating"
             name='rating'
           />
         </div> */}
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