import {AppDispatch} from './index';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import IUser from '../types/User.interface';

const users = createSlice({
	name: 'users',
	initialState: {
		users: [] as IUser[],
		created: [] as IUser[],
	},
	reducers: {
		getUsers(state, action: PayloadAction<IUser[]>) {
			state.users = [...state.created, ...action.payload];
		},
		addUsers(state, action: PayloadAction<IUser>) {
			state.created = [...state.created, action.payload];
		}
	},
});

export const {
	getUsers,
	addUsers
} = users.actions;

export default users.reducer;

export function asyncGetUsers(): any {
	return async function (dispatch: AppDispatch) {
		const response = await axios.get('https://gorest.co.in/public/v2/users');
		dispatch(getUsers(response.data as IUser[]));
	};
}
