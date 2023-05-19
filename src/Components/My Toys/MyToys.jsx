import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../JSFUNCTION/useTitle';
import { AUthContext } from '../Shared/AuthProvider/AuthProvider';
import ToysTable from './ToysTable';

const MyToys = () => {
  const {user}=useContext(AUthContext)
  const [allToys,setToys]=useState([])
  useTitle('My Toys')
  useEffect(()=>{
   fetch(`https://toys-market-server-site.vercel.app/myToys/${user?.email}`)
   .then(res=>res.json())
   .then(data=>setToys(data))
  },[user])
    return (
      <div className="overflow-x-auto w-full">
      <table className="table w-full">     
        <thead>
          <tr>
            <th>
              <label>
                #
              </label>
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Email</th>
            <th>Price</th>
          
            <th>Ratings</th>
            <th>Details</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody> 
          {
            allToys.map((toys,index)=><ToysTable key={toys._id} toys={toys}index={index}></ToysTable>

              
            )
          }  
         
       </tbody>
        
      </table>
    </div>
    );
};

export default MyToys;