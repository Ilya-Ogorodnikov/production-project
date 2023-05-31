import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';
import { LoginSchema } from '../../types/loginSchema';

interface LoginByUsername extends Pick<LoginSchema, 'password' | 'username'> {}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, {rejectValue: string}>(
  'login/loginByUsername',
  async ({ username, password }, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error('error');
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      thunkApi.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue('error');
    }
  },
);
