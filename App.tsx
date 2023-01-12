import {AppNavigator} from '@navigators/AppNavigator';
import React from 'react';

interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  return <AppNavigator />;
};

export default App;
