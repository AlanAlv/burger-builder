import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSucess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUb1t6qNoA5S28h7mGrEz11oAhe7q6D7I';
        if (!isSignup){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUb1t6qNoA5S28h7mGrEz11oAhe7q6D7I';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSucess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })
        ;
    };
};