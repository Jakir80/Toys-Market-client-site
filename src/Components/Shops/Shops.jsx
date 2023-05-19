/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Shops = () => {
  
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [categorytoys, setCategoryToys] = useState([])
  const handleSubTabSelect = (index) => {
    setActiveSubTab(index);
  };
  useEffect(()=>{
 fetch("https://toys-market-server-site.vercel.app/toysDetails/Science")
 .then(res => res.json())
 .then(data => setCategoryToys(data))
  },[])
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
        <Tabs className="text-center">
          <TabList>
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

<div>all data{ categorytoys.length}</div>
                <div className='grid grid-cols-3'>
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
                         <p> Ratings :{category.ratings}</p>
                         <p>{category.description}</p>
                       </div>
                     </div>
                    }
                    </>)
                  }

                </div>
              </TabPanel>

              <TabPanel>

               <div className='grid grid-cols-3'>
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
                         <p> Ratings :{category.ratings}</p>
                         <p>{category.description}</p>
                       </div>
                     </div>

                    </>)
                  }
                </div>
              </TabPanel>

              <TabPanel>
              <div className='grid grid-cols-3'>
           
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
                         <p> Ratings :{category.ratings}</p>
                         <p>{category.description}</p>
                       </div>
                     </div>
                     {/* <h1> all data{category.length}</h1> */}
                    </>)
                  }
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      )
    };

    export default Shops;