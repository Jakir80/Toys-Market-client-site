/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Shops = () => {
  
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [categorytoys, setCategoryToys] = useState([])
  const handleSubTabSelect = (index) => {
    setActiveSubTab(index);
  };
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


{/* <div>
  {categorytoys.map(singleCategory=>console.log(singleCategory))}
</div> */}
                <div className='grid grid-cols-3'>
                  {
                    categorytoys.map(category => <>
                      <div key={category._id} className="card w-96 p-4 bg-base-100 shadow-xl mt-6">
                        <figure><img src={category.img} alt="Shoes" className='border-gray-500 border-2 p-2 mt-4   hover:bg-gray-200 ' /></figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            {category.name}
                          </h2>
                          <p>price :${category.price}</p>
                          <div className='flex justify-between'><p> {category.category}</p>
                            <p>Ratings :{category.ratings}</p></div>
                          <p>seller {category.email}</p>
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
                      <div key={category._id} className="card w-96 p-4 bg-base-100 shadow-xl mt-6">
                        <figure><img src={category.img} alt="Shoes" className='border-gray-500 border-2 p-2 mt-4   hover:bg-gray-200 ' /></figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            {category.name}
                          </h2>
                          <p>price :${category.price}</p>
                          <div className='flex justify-between'><p> {category.category}</p>
                            <p>Ratings :{category.ratings}</p></div>
                          <p>seller {category.email}</p>
                          <p>{category.description}</p>
                        </div>
                      </div>

                    </>)
                  }
                </div>
              </TabPanel>

              <TabPanel>
              <div className='grid grid-cols-3'>
              <h2>all data math{categorytoys.length}</h2>
                  {
                    
                    categorytoys.map(category => <>
                  
                      <div key={category._id} className="card w-96 p-4 bg-base-100 shadow-xl mt-6">
                        <figure><img src={category.img} alt="Shoes" className='border-gray-500 border-2 p-2 mt-4   hover:bg-gray-200 ' /></figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            {category.name}
                          </h2>
                          <p>price :${category.price}</p>
                          <div className='flex justify-between'><p> {category.category}</p>
                            <p>Ratings :{category.ratings}</p></div>
                          <p>seller {category.email}</p>
                          <p>{category.description}</p>
                        </div>
                      </div>

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