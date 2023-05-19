import React from 'react';
import Blog from '../Blogs/Blog';
import Gallery from '../Gallery/Gallery';
import useTitle from '../JSFUNCTION/useTitle';
import KidsGallery from '../KidsPhotoGallery/KidsGallery';
import Banner from '../Shared/Banner/Banner';
import Shops from '../Shops/Shops';

const Home = () => {
  useTitle("Home")
    return (
        <div>
          <Banner></Banner>
          <Gallery></Gallery>
          <Shops></Shops>
          <KidsGallery></KidsGallery>
        <Blog/>
        </div>
    );
};

export default Home;