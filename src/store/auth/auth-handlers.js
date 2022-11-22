import { call, put } from "redux-saga/effects";
import { logOut, saveToken } from "../../utils/auth";
import {
  requestAuthFetchUser,
  requestAuthRefreshToken,
  requestAuthSignIn,
  requestAuthSignUp,
} from "./auth-requests";
import { updateUser } from "./auth-slice";

export default function* handleAuthSignUp(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthSignUp, payload);
    if (response.status === 201) {
      console.log("Sign Up Successfully");
    }
  } catch (err) {
    console.log(err);
  }
}

function* handleAuthSignIn(action) {
  try {
    const response = yield call(requestAuthSignIn, action.payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchUser, { payload: response.data.accessToken });
    }
  } catch (err) {
    console.log(err);
  }
}

function* handleAuthFetchUser({ payload }) {
  try {
    const response = yield call(requestAuthFetchUser, payload);
    if (response.status === 200) {
      yield put(
        updateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
    // response.data
  } catch (err) {
    console.log(err);
  }
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response && response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchUser, { payload: response.data.accessToken });
    } else {
      yield handleAuthLogOut()
    }
  } catch (err) {
    console.log(err);
  }
}

function* handleAuthLogOut() {
  yield put(updateUser({
    user:undefined,
    accessToken:null
  }));
  logOut()
}
export { handleAuthSignIn, handleAuthRefreshToken, handleAuthLogOut };
