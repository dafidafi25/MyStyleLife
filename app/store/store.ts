import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

import authReducer from './features/auth/Auth';
import LoadingReducer from './features/loading/Loading';

const reducers = combineReducers({
  auth: authReducer,
  Loading: LoadingReducer,
});

/*
  There is two types for choose which reducers to persist
  1. Blacklist : persist all reducers except for listed reducers
  2. whitelist : persist all reducers inside listed reducers
*/
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'], //comment to disable persist Auth Reducers
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
