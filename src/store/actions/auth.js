import axios from 'axios';
import * as actionTypes from './actionTypes';

export const authStart = () => ({
    type: actionTypes.AUTH_START,
});

export const authSuccess = (idToken, userId) => ({
    type: actionTypes.AUTH_SUCCESS,
    idToken,
    userId,
});

export const authFail = error => ({
    type: actionTypes.AUTH_FAIL,
    error,
});

export const auth = (email, password, isSignup) => (dispatch) => {
    dispatch(authStart());
    const authData = {
        email,
        password,
        returnSecureToken: true,
    };
    let endPoint = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB7gxzpSxYxO9zibnCNl7eU4OnFgvGXlBY';
    if (!isSignup) {
        endPoint = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB7gxzpSxYxO9zibnCNl7eU4OnFgvGXlBY';
    }
    axios.post(endPoint, authData)
        .then((res) => {
            console.log(res);
            dispatch(authSuccess(res.data.idToken, res.data.localId));
        })
        .catch((err) => {
            console.log(err);
            dispatch(authFail(err));
        });
};
