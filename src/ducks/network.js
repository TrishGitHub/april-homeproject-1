import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

import {clearNetworkErrors, networkError} from '../actions/network';

const error = handleActions(
	{
		[clearNetworkErrors]: () => null,
		[networkError]: (state, action) => action.payload,
	},
	null,
);

const message = handleActions(
	{
		[clearNetworkErrors]: () => null,
		[networkError]: (state, action) => action.payload.response.data.message,
	},
	null,
);

export default combineReducers({
	error,
	message,
});

export const getNetworkErrors = state => state.network.error;
export const getErrorMessage = state => state.network.message;
