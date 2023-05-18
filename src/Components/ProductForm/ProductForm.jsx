import React, { useContext } from 'react';
import { AUthContext } from '../Shared/AuthProvider/AuthProvider';

const ProductForm = () => {
    const {user}=useContext(AUthContext)
    const handleaddedProduct=event=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
       const email=user?.email;
       const img=form.img.value;
       const ratings=form.rating.value;
        const price=form.price.value;
        const photo=form.img.value;
        const category=form.category.value;
        const description=form.description.value;
        form.reset()
        console.log(name,email,price,ratings,category)
        const productAdded={ 
            name,
            email,
            price,                   
            img,
            ratings ,
            photo,
            category,
            description

        }
        console.log(productAdded)
        fetch('http://localhost:5000/toysDetails',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(productAdded)
           
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert("booking added successfully")
            }
            
        })
        // JSON.stringify(bookings)
    }

  return (
    <div className=" bg-gray-200 p-10 rounded-lg shadow-lg">
     <form onSubmit={handleaddedProduct}>

     <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
          <label className="text-gray-700 font-medium">Category</label>
          <input
            type="text"
            name='category'
            className="w-full border border-gray-400 rounded px-3 py-2"
            placeholder="Enter product Product category"
          />
        </div>
      <div>
          <label className="text-gray-700 font-medium">Phot Url</label>
          <input
            type="text"
            name='img'
            className="w-full border border-gray-400 rounded px-3 py-2"
            placeholder="Enter product phot url"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-gray-700 font-medium">User Email</label>
          <input
            type="text"
        value={user?.email}
            className="w-full border border-gray-400 rounded px-3 py-2"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Price</label>
          <input
            type="text"
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
          className="w-full border border-gray-400 rounded px-3 py-2"
          placeholder="Enter product Name"
          name='name'
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-700 font-medium">Rating</label>
        <input
          type="number"
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

export default ProductForm;