import {takeLatest} from 'redux-saga/effects'
import handleAuthSignUp from './auth-handlers'
import { signUp } from './auth-slice'
export default function* authSaga() {
    yield takeLatest(signUp.type, handleAuthSignUp)
}