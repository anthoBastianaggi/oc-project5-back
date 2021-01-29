import React from 'react';
import Flex from '../../Flex/Flex';
import './LayoutAdmin.module.scss';

let LayoutAdmin = (View) => {
  return (
    <Flex className="layout-admin" column>
      <div className="content">
        <View />
      </div>
    </Flex>
  );
}

export default LayoutAdmin;
