import users from "../users";
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../../actions/users";

describe("Ducks users", () => {
	describe("fetchUserRequest", () => {

		it("isFetching -> true", () => {
			const next = users({ isFetching: false }, fetchUserRequest());
			expect(next.isFetching).toBeTruthy();
		});

		it("error -> false", () => {
			const next = users({ error: true }, fetchUserRequest());
			expect(next.error).toBeFalsy();
		});

		it("clear data", () => {
			const next = users({ data: [] }, fetchUserRequest());
			expect(next.data).toEqual(null);
		});
	});

	describe("fetchUserSuccess", () => {
		const payload = { data: { login: "TrishGitHub" } };

		it("isFetching -> false", () => {
			const next = users({ isFetching: true }, fetchUserSuccess(payload));
			expect(next.isFetching).toBeFalsy();
		});

		it("error -> false", () => {
			const next = users({ error: true }, fetchUserSuccess(payload));
			expect(next.error).toBeFalsy();
		});

		it("fill with data", () => {
			const next = users(null, fetchUserSuccess(payload));
			expect(next.data).toEqual(payload.data);
		});
	});

	describe("fetchUserFailure", () => {

		it("isFetching -> false", () => {
			const next = users({ isFetching: true }, fetchUserFailure());
			expect(next.isFetching).toBeFalsy();
		});

		it("error -> true", () => {
			const next = users({ error: false }, fetchUserFailure());
			expect(next.error).toBeTruthy();
		});

		it("clear data", () => {
			const next = users({ data: [] }, fetchUserFailure());
			expect(next.data).toEqual(null);
		});
	});
});
