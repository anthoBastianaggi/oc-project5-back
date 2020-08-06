import React from 'react';
import './Layout.module.scss';

let Layout = (View) => {
  return (
    <div className="layout">
      <div className="content">
        <View />
      </div>
    </div>
  );
}

export default Layout;
