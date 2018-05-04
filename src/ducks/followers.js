import { handleActions } from 'redux-actions';
import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from '../actions/followers';

export default handleActions(
	{
		[fetchFollowersRequest]: state => ({
			...state,
            data: null,
			error: false,
			isFetching: true,

		}),

		[fetchFollowersSuccess]: (state, { payload }) => ({
			...state,
			data: payload.data,
			error: false,
			isFetching: false,

		}),

		[fetchFollowersFailure]: state => ({
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

export const getData = state => state.followers.data;
export const getError = state => state.followers.error;
export const getIsFetched = state => state.followers.isFetched;
export const getIsFetching = state => state.followers.isFetching;







