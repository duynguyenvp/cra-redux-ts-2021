import reducer, { IUser, login, logout } from "./userSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, login)).toEqual({});
});

test("should be logged in successfully", () => {
  const previousState: IUser = {};
  expect(
    reducer(
      previousState,
      login({
        id: 123,
      })
    )
  ).toEqual({
    id: 123,
  });
});

test("should be logged out successfully", () => {
  const previousState: IUser = {
    id: 123,
  };
  expect(reducer(previousState, logout())).toEqual({});
});
