/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
const ToysCard = ({toys,index}) => {
  const {name,email,img,price,description,category,ratings,_id}=toys;
  return ( 
       
    <tr>
      
      <th>
        <label>
      {index+1}
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="  w-20 h-20">
              <img src={img} />
            </div>
          </div>
         
        </div>
      </td>
      <td>
       {name}
      </td>
      <td>{category}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{ratings}</td>
      <td>{description }</td>
   
      <th>
     
       <Link to={`/details/${_id}`}><button className="btn btn-md bg-gray-700">View Details </button></Link>
      
   
      </th>
    </tr>
  
  );
};



export default ToysCard;