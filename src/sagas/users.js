import { fetchUserRequest, fetchUserSuccess, fetchUserFailure, fetchTokenRequest } from "../actions/users";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUserInformation, getTokenOwner } from "../api";

export function* FetchUserRequest({ type, payload }) {
	try {
		let response;
		if (fetchTokenRequest.toString() === type) {
			response = yield call(getTokenOwner, payload);
		} else {
			response = yield call(getUserInformation, payload);
		}
		yield put(fetchUserSuccess(response));
	} catch (error) {
		yield put(fetchUserFailure(error));
	}
}

export function* fetchUserWatch() {
	yield takeLatest(
		[fetchUserRequest, fetchTokenRequest],
		FetchUserRequest
	);
}