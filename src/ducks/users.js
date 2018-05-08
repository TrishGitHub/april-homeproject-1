import { handleActions } from 'redux-actions';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from '../actions/users';

export default handleActions(
	{
		[fetchUserRequest]: state => ({
			...state,
			data: null,
			error: false,
			isFetching: true,


		}),
		[fetchUserSuccess]: (state, { payload }) => ({
			...state,
			data: payload.data,
			error: false,
			isFetching: false,

		}),
		[fetchUserFailure]: state => ({
			...state,
            data: null,
			error: true,
			isFetching: false,
		})
	},
	{
		data: null,
		error: false,
		isFetching: false,
	}
);

export const getUserData = state => state.users.data;
export const getError = state => state.users.error;
export const getIsFetched = state => state.users.isFetched;
export const getIsFetching = state => state.users.isFetching;



