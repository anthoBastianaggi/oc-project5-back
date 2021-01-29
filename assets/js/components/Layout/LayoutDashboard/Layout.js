import React from 'react';
import './Layout.module.scss';
import Dashboard from '../../Dashboard/Dashboard';
import Flex from '../../Flex/Flex';

let Layout = (View) => {
  return (
    <Flex className="layout" column>
      <Dashboard />
      <div className="content">
        <View />
      </div>
    </Flex>
  );
}

export default Layout;
