import { fetchUserSuccess, fetchUserFailure } from "../../actions/users";
import { put } from "redux-saga/effects";
import { FetchUserRequest } from "../users";

describe('Saga users:', () => {
	it('dispatch action fetchUserSuccess with user from call on success call', () => {
		const action = { payload: 'test_login' };
		const user =  { login: 'test', id: '1' };
		const saga = FetchUserRequest(action);

		saga.next();
		expect(saga.next(user).value).toEqual(put(fetchUserSuccess(user)));
	});

	it('dispatch action fetchUserFailure with user from call on success call', () => {
		const action = { payload: 'test_login' };
		const error  =  new Error('test_error');
		const saga = FetchUserRequest(action);

		saga.next();
		expect(saga.throw(error).value).toEqual(put(fetchUserFailure(error)));
	});
});
