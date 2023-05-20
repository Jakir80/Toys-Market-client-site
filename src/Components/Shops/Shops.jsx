/* eslint-disable no-undef */
import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import '@smastrom/react-rating/style.css';
const Shops = () => {

  const [activeSubTab, setActiveSubTab] = useState(0);
  const [categorytoys, setCategoryToys] = useState([])
  const handleSubTabSelect = (index) => {
    setActiveSubTab(index);
  };
  const [ratings,setRating]=useState(0)
  useEffect(() => {
    fetch("https://toys-market-server-site.vercel.app/toysDetails/Science")
      .then(res => res.json())
      .then(data => setCategoryToys(data))
  }, [])
  console.log(categorytoys)
  const HandleSubone = (categoryone) => {
    fetch(`https://toys-market-server-site.vercel.app/toysDetails/${categoryone}`)
      .then(res => res.json())
      .then(data => setCategoryToys(data))
  }
  const HandleSubtwo = (categorytwo) => {
    // setCategory(categorytwo)    
    fetch(`https://toys-market-server-site.vercel.app/toysDetails/${categorytwo}`)
      .then(res => res.json())
      .then(data => setCategoryToys(data))
  }

  const HandleSubthree = (categorythree) => {
    //  setCategory(categorythree)
    fetch(`https://toys-market-server-site.vercel.app/toysDetails/${categorythree}`)
      .then(res => res.json())
      .then(data => setCategoryToys(data))
  }
  // const {name,email,img,price,description,category,ratings}=categorys;

  return (
    <div className='text-center'>
      <Tabs className="">
      <TabList className='tex-center'>
        <Tab>Educational and Learning </Tab>
      </TabList>

      <TabPanel>
        <Tabs selectedIndex={activeSubTab} onSelect={handleSubTabSelect}>
          <TabList>
            <Tab> <button onClick={() => HandleSubone('Science')}>Science</button> </Tab>
            <Tab><button onClick={() => HandleSubtwo('Language')}>Language</button></Tab>
            <Tab><button onClick={() => HandleSubthree('Math')}> </button>Math </Tab>
          </TabList>

          <TabPanel>

            <div>all data{categorytoys.length}</div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                categorytoys.map(category => <>
                  {
                    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:scale-105 transition-transform">
                      <div className="relative">
                        <img
                          className="w-full h-auto"
                          src={category.img}
                          alt="Card Image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-red-500 opacity-0 hover:opacity-75 transition-opacity"></div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                        <p className="text-gray-600"> price ${category.price}</p>
                        <p>{category.category}</p>
                        <p>{category.description}</p>
                        <p> Quantity -: {category.quantity}</p>
                    
                        <Rating
                                style={{ maxWidth: 150 }}
                                value={category.ratings}
                                readOnly
                            /> 
                      </div>
                      <Link to={`/details/${category._id}`}><button className="btn m-4 btn-md bg-gray-600">View Details </button></Link>
                    </div>
                  }
                </>)
              }

            </div>
          </TabPanel>

          <TabPanel>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                categorytoys.map(category => <>
                  <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:scale-105 transition-transform">
                    <div className="relative">
                      <img
                        className="w-full h-auto"
                        src={category.img}
                        alt="Card Image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-red-500 opacity-0 hover:opacity-75 transition-opacity"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                      <p className="text-gray-600"> price ${category.price}</p>
                      <p>{category.category}</p>
                      <p>{category.description}</p>
                      <p> Quantity -: {category.quantity}</p>
                      <Rating
                                style={{ maxWidth: 150 }}
                                value={category.ratings}
                                readOnly
                            />
                    </div>
                    <Link to={`/details/${category._id}`}><button className="btn m-4 btn-md bg-gray-600">View Details </button></Link>
                  </div>

                </>)
              }
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

              {

                categorytoys.map(category => <>

                  <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:scale-105 transition-transform">

                    <div className="relative">
                      <img
                        className="w-full h-auto"
                        src={category.img}
                        alt="Card Image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-red-500 opacity-0 hover:opacity-75 transition-opacity"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
                      <p className="text-gray-600"> price ${category.price}</p>
                      <p>{category.category}</p>
                      <p>{category.description}</p>
                      <p> Quantity -: {category.quantity}</p>
                      <Rating
                                style={{ maxWidth: 150 }}
                                value={category.ratings}
                                readOnly
                            />
                    </div>
                    <Link to={`/details/${category._id}`}><button className="btn btn-md m-4 bg-gray-600">View Details </button></Link>
                  </div>

                </>)
              }
            </div>
          </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
    </div>
  )
};

export default Shops;