import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../JSFUNCTION/useTitle';
import { AUthContext } from '../Shared/AuthProvider/AuthProvider';
import ToysTable from './ToysTable';

const MyToys = () => {
  const { user, loading } = useContext(AUthContext)
  const [allToys, setToys] = useState([])
  useTitle('My Toys')
  useEffect(() => {
    fetch(`https://toys-market-server-site.vercel.app/myToys/${user.email}`)
      .then(res => res.json())
      .then(data => setToys(data))
  },[user] )
  const handleAssending = () => {
    if (loading) {
      return <p>loading...</p>
    }
    fetch(`https://toys-market-server-site.vercel.app/myToys/${user.email}`)
      .then(res => res.json())
      .then(data => {
        const sortToys = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setToys(sortToys)
      })
  }
  const handleDescending = () => {
    if (loading) {
      return <p>loading...</p>
    }
    fetch(`https://toys-market-server-site.vercel.app/myToys/${user.email}`)
      .then(res => res.json())
      .then(data => {
        const sortDescendingToys = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        setToys(sortDescendingToys)
      })
  }
  return (
    <div>
      <div className='flex gap-4 justify-center mb-4'>
        <button onClick={handleAssending} className='btn text-white btn-md bg-gray-500'>Ascending</button>
        <button onClick={handleDescending} className='btn text-white btn-md bg-gray-500'>Descending</button>
      </div>
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
              <th>Quantity</th>
              <th>Details</th>
              <th>Edit</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {
              allToys.map((toys, index) => <ToysTable key={toys._id} toys={toys} index={index} allToys={allToys} setToys={setToys}></ToysTable>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;