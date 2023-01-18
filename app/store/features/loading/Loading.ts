import {createSlice} from '@reduxjs/toolkit';

export const Loading = createSlice({
  name: 'loading',
  initialState: {isLoading: false},
  reducers: {
    // Reset Auth State to Initial State
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
  },
});

export const {showLoading, hideLoading} = Loading.actions;

export default Loading.reducer;
