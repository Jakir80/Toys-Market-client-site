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
            <h1 className='text-center'> lets Explore our new Blog about kids toys </h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-3'>
                {
                    blogs.map(blog=><BlogCard blog={blog} key={blog._id}></BlogCard>  )
                }
            </div>
        </div>
    );
};

export default Blog;