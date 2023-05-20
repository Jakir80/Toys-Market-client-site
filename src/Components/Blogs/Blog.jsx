import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
// ..
AOS.init();
const Blog = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('https://toys-market-server-site.vercel.app/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            <h1 className='border-2 p-6 m-6 rounded-lg border-gray-400 bg-gray-200 text-center font-semibold text-3xl'> Lets Explore our new Blog about <br /> kids toys and kids Health </h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-3'>
                {
                    blogs.map(blog=><BlogCard blog={blog} key={blog._id}></BlogCard>  )
                }
            </div>
        </div>
    );
};

export default Blog;