import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Shops = () => {
    const [activeSubTab, setActiveSubTab] = useState(0);

  const handleSubTabSelect = (index) => {
    setActiveSubTab(index);
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Main Category</Tab>
      </TabList>

      <TabPanel>
        <Tabs selectedIndex={activeSubTab} onSelect={handleSubTabSelect}>
          <TabList>
            <Tab>Subcategory 1</Tab>
            <Tab>Subcategory 2</Tab>
            <Tab>Subcategory 3</Tab>
          </TabList>

          <TabPanel>
            <h2>Content for Subcategory 1</h2>
            <p>Documentation and content for Subcategory 1.</p>
          </TabPanel>

          <TabPanel>
            <h2>Content for Subcategory 2</h2>
            <p>Documentation and content for Subcategory 2.</p>
          </TabPanel>

          <TabPanel>
            <h2>Content for Subcategory 3</h2>
            <p>Documentation and content for Subcategory 3.</p>
          </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
  )
};

export default Shops;