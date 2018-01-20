import Soshi from '../../core';
import React from 'react';

const Components = new Soshi({
  dom: 'custom',
  customDom: React.createElement
})

export default Components;