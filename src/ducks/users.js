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

export const getData = state => state.user.data;
export const getError = state => state.user.error;
export const getIsFetched = state => state.user.isFetched;
export const getIsFetching = state => state.user.isFetching;



