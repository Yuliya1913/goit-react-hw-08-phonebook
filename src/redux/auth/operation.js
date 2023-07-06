import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/regicter',
  async (registerUser, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', registerUser);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (loginUser, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', loginUser);
      setAuthHeader(data.token);

      toast.success(`Congratulations you are login`, {
        position: 'top-right',
        duration: 3000,
        icon: '👏',
        style: {
          border: '5px solid #e5ccfd',
          borderRadius: '50px',
          background: '#ebffeb',
          color: '#1a01d4',
          fontSize: '19px',
        },
      });

      return data;
    } catch (error) {
      toast.success(
        `Enter the email and password you entered during registration`,
        {
          icon: '😕',
          position: 'top-right',
          duration: 3000,

          style: {
            border: '5px solid #e5ccfd',
            borderRadius: '50px',
            background: 'red',
            color: '#1a01d4',
            fontSize: '19px',
          },
        }
      );

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // получаем токен из глобального стэйт
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
