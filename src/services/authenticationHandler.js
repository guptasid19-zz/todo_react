import { API_URL } from '../config';
import axios from 'axios';

export default class AuthenticationHandler {

    static signIn(email, password) {
        return axios({
            method: 'post',
            url: `${API_URL}/authenticate`,
            data: {
                email,
                password
            }
        })
    };

    static signUp(email, password, passwordConfirmation) {
        return axios({
            method: 'post',
            url: `${API_URL}/users`,
            data: {
                email,
                password,
                passwordConfirmation
            }
        })
    }
}
