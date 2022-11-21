import axios from "../../api/axios";

export const requestAuthSignUp = (data) => {
    console.log("requestAuthERegister ~~ ", data)
    return axios.post('/auth/sign-up',data)
}