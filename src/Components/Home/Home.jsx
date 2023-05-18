import React from 'react';
import Blog from '../Blogs/Blog';
import Gallery from '../Gallery/Gallery';
import Banner from '../Shared/Banner/Banner';
import Shops from '../Shops/Shops';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <Shops></Shops>
        <Blog/>
        </div>
    );
};

export default Home;