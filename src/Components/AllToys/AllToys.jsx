import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../JSFUNCTION/useTitle';
import { AUthContext } from '../Shared/AuthProvider/AuthProvider';
import ToysCard from './ToysCard';

const AllToys = () => {
  const [alltoys, SetAallToys] = useState([])
  const [search, setsearch] = useState("")
  const { loading } = useContext(AUthContext)
  useEffect(() => {
    fetch('https://toys-market-server-site.vercel.app/toysDetails')
      .then(res => res.json())
      .then(data => SetAallToys(data))
  }, [])
  const handlesearch = (event) => {
    event.preventDefault()
    if (loading) {
      return <p>Loading.....</p>
    }

    if (search.length < 1) {
      return Swal.fire({
        title: 'Please write something on search box',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }
    else {

      event.preventDefault()
      fetch(`https://toys-market-server-site.vercel.app/toysSearch/${search}`)
        .then(res => res.json())
        .then(data => SetAallToys(data))
    }
  }
  useTitle('All Toys')

  return (
    <div>
      <form >

        <div className='flex justify-center text-center mb-4 gap-8'>
          <div>
            <input onChange={(event) => setsearch(event.target.value)} className='rounded p-2 border-gray-500 border-2' type="text" name="search" id="" placeholder='search' />
          </div>
          <div>
            <button onClick={handlesearch} className='btn bg-gray-400'> Search</button>
          </div>
        </div>
      </form>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  #
                </label>
              </th>

              <th>Name</th>
              <th>Sub Category</th>

              {/* <th>Quantity</th> */}
              <th>Price</th>
              <th></th>
              <th>Ratings</th>
              <th>Details</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>


            {
              alltoys.map((toys, index) => <ToysCard key={toys._id} toys={toys} index={index}></ToysCard>)
            }
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default AllToys;