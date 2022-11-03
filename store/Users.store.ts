import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import IUser from '../types/User.interface'

export const getUsers: any = createAsyncThunk('users/getCartItems', async () => {
  const response = await axios.get('https://gorest.co.in/public/v2/users')
  const peopleExists = localStorage.getItem('people')
  const dateExists = peopleExists === null ? [] : JSON.parse(peopleExists)
  return [...response.data, ...dateExists] as IUser[]
})

const users = createSlice({
  name: 'users',
  initialState: {
    users: [] as IUser[],
  },
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
})

export default users.reducer