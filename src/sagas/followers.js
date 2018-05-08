import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from "../actions/followers";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUserFollowers  } from "../api";

export function* FetchFollowersRequest({ payload }) {
	try {
		const userData = yield call(getUserFollowers, payload);
		yield put(fetchFollowersSuccess(userData));
	} catch (error) {
		yield put(fetchFollowersFailure(error));
	}
}

export function* fetchFollowersWatch() {
	yield takeLatest(fetchFollowersRequest, FetchFollowersRequest);
}
