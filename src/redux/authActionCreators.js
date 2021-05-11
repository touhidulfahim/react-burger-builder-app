import * as actionTypes from './actionTypes';
import axios from 'axios';

export const auth = (email, password, authMode) => dispatch => {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true,
    }
    let authUrl = null;
    if (authMode === "Sign Up") {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
    } else {
        authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
    }
    const API_KEY = "AIzaSyD2pjjrQyPY81TT6SKfwDI8wGo0a9Um4tQ"
    axios.post(authUrl + API_KEY, authData)
        .then(response => console.log(response))
}

