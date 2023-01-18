import {createAsyncThunk} from '@reduxjs/toolkit';
import {MockFetch} from '@services/main';
import {RootState} from '@store/store';
import {hideLoading, showLoading} from '../loading/Loading';

export const mockAuthLoading = createAsyncThunk<void, void, {state: RootState}>(
  'company/getcompanyList',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(showLoading());

    await MockFetch();
    thunkAPI.dispatch(hideLoading());
  },
);
