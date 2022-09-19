import { AppDispatch } from './index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import IUser from '../types/User.interface'

const users = createSlice({
  name: 'users',
  initialState: {
    users: [] as IUser[],
  },
  reducers: {
    getUsers(state, action: PayloadAction<IUser[]>) {
      state.users = action.payload
    },
  },
})

export const { getUsers } = users.actions

export default users.reducer

export function asyncGetUsers(): any {
  return async function (dispatch: AppDispatch) {
    const response = await axios.get('https://gorest.co.in/public/v2/users')
    const peopleExists = localStorage.getItem('people')
    const dateExists = peopleExists === null ? [] : JSON.parse(peopleExists)
    dispatch(getUsers([...response.data, ...dateExists] as IUser[]))
  }
}
