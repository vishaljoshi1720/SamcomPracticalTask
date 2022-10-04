import React from 'react';

import AuthStack from './Stacks/AuthStack';
import MainStack from './Stacks/MainStack';

export default RootStack = ({state}) => {
  if (state.token === null) return <AuthStack />;
  else return <MainStack />;
};
