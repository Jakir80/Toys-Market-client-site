/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AUthContext } from '../Shared/AuthProvider/AuthProvider';
const ToysCard = ({ toys, index }) => {
  const { name, price, description, category, ratings, quantity, _id } = toys;
  const { user } = useContext(AUthContext)
  const navigate = useNavigate()
  const toasts = () => {
    if (!user) {
      toast('Please Login first')
      navigate('/login')
    }
  }
  return (
    <tr>
      <th>
        <label>
          {index + 1}
        </label>
      </th>
      <td>
        {name}
      </td>
      <td>{category}</td>
      <td>${price}</td>
      <td>available quantity: {quantity}</td>
      <td>{ratings}</td>
      <td>{description}</td>
      <th>
        {user ?

          <Link to={`/details/${_id}`}><button className="btn m-4 btn-md bg-gray-600">View Details </button></Link> : <button className="btn m-4 btn-md bg-gray-600" onClick={toasts}>View Details </button>
        }
      </th>
    </tr>
  );
};



export default ToysCard;