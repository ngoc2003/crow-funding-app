import { call } from "redux-saga/effects";
import { requestAuthSignUp } from "./auth-requests";

export default function* handleAuthSignUp(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthSignUp, payload)
    if (response.status  === 201) {
        console.log("Sign Up Successfully")
    }
  } catch(err) {
    console.log(err)
  }
}
