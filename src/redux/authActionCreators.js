import * as actionTypes from './actionTypes';
import axios from 'axios';



export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId,
        }
    }
}

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
        .then(response => {
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            const expiry = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('expiryOn', expiry);
            dispatch(authSuccess(response.data.itdToken, response.data.localId))
        })
}

export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {

    } else {
        const expiryTime = new Date(localStorage.getItem('expiryOn'));
        if (expiryTime <= new Date()) {
            //Logout
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
        }
    }
}

