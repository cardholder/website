import reducer from "./general";
import * as actionTypes from "../actions/actionTypes";

describe("general reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      username: null
    });
  });

  it("should return the username", () => {
    expect(
      reducer(undefined, { type: actionTypes.SET_USERNAME, username: "Test" })
    ).toEqual({ username: "Test" });
  });
});
