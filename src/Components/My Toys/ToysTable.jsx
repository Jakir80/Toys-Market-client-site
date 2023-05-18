import { Link } from "react-router-dom";

const ToysTable = ({toys,index}) => {
   
    const {name,email,img,price,description,photo,category,ratings,_id}=toys;
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
        <td>{description}</td>
     
        <th>
          <Link to={`updateToys/${_id}`}><button className="btn btn-md bg-gray-700">update </button></Link>
        </th>
      </tr>
    
    );
};

export default ToysTable;