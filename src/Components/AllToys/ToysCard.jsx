/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
const ToysCard = ({toys,index}) => {
  const {name,email,img,price,description,category,ratings,quantity,_id}=toys;
  return ( 
       
    <tr>
      
      <th>
        <label>
      {index+1}
        </label>
      </th>
     
    
      <td>
       {name}
      </td>
      <td>{category}</td>
   
      <td>${price}</td>
      <td>available quantity: {quantity}</td>
      <td>{ratings}</td>
      <td>{description }</td>
   
      <th>
     
       <Link to={`/details/${_id}`}><button className="btn btn-md bg-gray-700">View Details </button></Link>
      
   
      </th>
    </tr>
  
  );
};



export default ToysCard;