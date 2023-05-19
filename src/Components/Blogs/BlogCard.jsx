import 'aos/dist/aos.css';
import React from 'react';


const BlogCard = ({blog}) => {
    // console.log(blog)
    const {date,kidsName,description,productImage}=blog;
    return (
        <div className="card w-96 p-4 bg-base-100 shadow-xl mt-6 " data-aos="fade-right" >
        <figure><img src={productImage} alt="Shoes" className='hover:bg-gray-200 ' /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {kidsName}
            <p>{date}</p>
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="btn btn-link">Read More</div>
            
          </div>
        </div>
      </div>
    );
};

export default BlogCard;