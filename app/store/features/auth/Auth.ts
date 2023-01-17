import {createSlice} from '@reduxjs/toolkit';
import {AuthInitialState} from './Auth.interface';

/*
  First Params Slice Name
  Second Params Initial State
  Reducers : Creating Action in Slice
  Extra Reducer, Handling Async Action (Usually for Calling Api and Waiting for the response)
    - Everytime createAsyncThunk created, we can add 3 builder in extraReducers that handling
      (1) pending : first time process started
      (2) fulfilled : process finished without errors
      (3) rejected : process failed
*/

export const auth = createSlice({
  name: 'auth',
  initialState: AuthInitialState,
  reducers: {
    // Reset Auth State to Initial State
    AuthReset(state) {
      state.isAuth = false;
    },
  },
});

export const {AuthReset} = auth.actions;

export default auth.reducer;
