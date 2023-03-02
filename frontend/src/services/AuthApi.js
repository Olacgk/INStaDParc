import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocaleStorage';

export function hasAuthenticated() {
    // const token = getItem('token');
    // const result = token ? tokenIsValid(token) : false;

    // if (false === result) {
    //     removeItem('token');
    // }

    return false;
}

export function login(credentials) {
    return axios
        .post('http://localhost:8080/api/auth/login', credentials)
        .then(response => response.data.token)
        .then(token => {
            addItem('token', token);

            return true;
        });
}

export function logout() {
    removeItem('token');
}

function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}