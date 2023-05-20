/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ToysTable = ({ toys, index, setToys, allToys }) => {
  const { name, email, img, price, description, photo, category,quantity, ratings, _id } = toys;
  const handledelete = (id) => {
    console.log(id)

    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure want to delete this ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed){
        fetch(`https://toys-market-server-site.vercel.app/delete/${id}`, {
          method: "DELETE",
          headers:{
            "content-type":"application/json"
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            const remaining = allToys.filter(toy => toy._id !=id);
            setToys(remaining)
          })

      }})

    
    
  }
  return (
    <tr>
      <th>
        <label>
          {index + 1}
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
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
      <td>{quantity}</td>
      <td>{description}</td>

      <th>
        <div className="flex gap-4">
          <Link to={`/updateToys/${_id}`}><button className="btn btn-md bg-gray-700">update </button></Link>
          <button onClick={() =>  handledelete(_id)} className='btn btn-md bg-gray-600'>Delete</button>
        </div>
      </th>
    </tr>

  );
};

export default ToysTable;