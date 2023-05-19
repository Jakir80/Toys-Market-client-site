import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysCard from './ToysCard';

const AllToys = () => {
    const alltoys=useLoaderData()   
    return (
        <div>
         {/* <div className='grid md:grid-cols-3 lg:grid-cols-3'>
            {
                alltoys.map(toys=><ToysCard key={toys._id} toys={toys}></ToysCard>)
            }
         </div>   */}


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
        {/* {
                alltoys.map(toys,index=><ToysCard key={toys._id} toys={toys} index={index}></ToysCard>
            }
          */}

          {
            alltoys.map((toys,index)=><ToysCard key={toys._id} toys={toys} index={index}></ToysCard>)
          }
       </tbody>
        
      </table>
    </div>

        </div>
    );
};

export default AllToys;