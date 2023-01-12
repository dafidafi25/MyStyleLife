import {AppNavigator} from '@navigators/AppNavigator';
import {useNavigationPersistence} from '@navigators/NavigationUtilities';
import React from 'react';
import * as storage from '@utils/storage/index';

interface IAppProps {}

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

export const App: React.FC<IAppProps> = () => {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  if (!isNavigationStateRestored) return null;

  return (
    <AppNavigator
      initialState={initialNavigationState}
      onStateChange={onNavigationStateChange}
    />
  );
};

export default App;
