import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../JSFUNCTION/useTitle';

const UpdateToys = () => {
    const updatesToys=useLoaderData();
    const {price,description,quantity,_id}=updatesToys;   
    const handleupdateToys=(event)=>{
        event.preventDefault()
        const form=event.target;   
        const price=form.price.value;           
        const description=form.description.value;
        const quantity=form.quantity.value;
        form.reset()
        console.log(price,description)
        const updatedProduct={ 
            price,description,quantity
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
              toast("Updated information successfully")
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
             <label className="text-gray-700 font-medium">quantity</label>
             <input
               type="text"
               name='quantity'
               defaultValue={quantity}
               className="w-full border border-gray-400 rounded px-3 py-2"
               placeholder="Enter product Product category"
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