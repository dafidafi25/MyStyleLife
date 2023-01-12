import {AppNavigator} from '@navigators/AppNavigator';
import {useNavigationPersistence} from '@navigators/NavigationUtilities';
import React from 'react';
import * as storage from '@utils/storage/index';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import {store} from '@store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

interface IAppProps {}

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

export const App: React.FC<IAppProps> = () => {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  if (!isNavigationStateRestored) return null;

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <AppNavigator
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
