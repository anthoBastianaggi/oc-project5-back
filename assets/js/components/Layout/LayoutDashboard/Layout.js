import React from 'react';
import './Layout.module.scss';
import Dashboard from '../../Dashboard/Dashboard';


let Layout = (View) => {
  return (
    <div className="layout">
      <Dashboard />
      <div className="content">
        <View />
      </div>
    </div>
  );
}

export default Layout;
