import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { LoginSchema } from '../../types/loginSchema';

interface LoginByUsername extends Pick<LoginSchema, 'password' | 'username'> {}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkConfig<string>>(
  'login/loginByUsername',
  async ({ username, password }, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error('error');
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      // extra.navigate('/about');

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('error');
    }
  },
);
