import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => ({
    type: actionTypes.AUTH_START,
});

export const authSuccess = authData => ({
    type: actionTypes.AUTH_SUCCESS,
    authData,
});

export const authFail = error => ({
    type: actionTypes.AUTH_FAIL,
    error,
});

export const auth = (email, password) => (dispatch) => {
    dispatch(authStart());
    const authData = {
        email,
        password,
        returnSecureToken: true,
    };
    const endPoint = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB7gxzpSxYxO9zibnCNl7eU4OnFgvGXlBY';
    axios.post(endPoint, authData)
        .then((res) => {
            console.log(res);
            dispatch(authSuccess(res.data));
        })
        .catch((err) => {
            console.log(err);
            dispatch(authFail(err));
        });
};
