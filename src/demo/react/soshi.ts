import Soshi from '../../core';
import componentList from 'components/componentList'
import React from 'react';

const Components = new Soshi({
  dom: 'custom',
  customDom: React.createElement
})
Components.load(componentList);
export default Components;
