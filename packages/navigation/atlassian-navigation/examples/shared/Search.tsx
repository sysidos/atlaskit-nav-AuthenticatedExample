import React from 'react';

import { Search } from '@atlaskit/atlassian-navigation';

const onClick = (...args: any[]) => {
  console.log('search click', ...args);
};

export const DefaultSearch = () => (
  <Search onClick={onClick} text="Search..." tooltip="Search" />
);
