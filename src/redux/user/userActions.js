import http from "@/services/httpServices";
import Router from "next/router";
import {
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    SIGNOUT_USER,
} from "./userTypes";

export const signinUserRequest = () => {
    return {
        type: SIGNIN_USER_REQUEST,
    };
};

export const signupUserRequest = () => {
    return {
        type: SIGNUP_USER_REQUEST,
    };
};

export const signinUserSuccess = (user) => {
    return {
        type: SIGNIN_USER_SUCCESS,
        user,
    };
};

export const signupUserSuccess = (user) => {
    return {
        type: SIGNUP_USER_SUCCESS,
        user,
    };
};

export const signinUserFailure = (error) => {
    return {
        type: SIGNIN_USER_FAILURE,
        error,
    };
};

export const signupUserFailure = (error) => {
    return {
        type: SIGNUP_USER_FAILURE,
        error,
    };
};

export const signinUser = ({ email, password }) => {
    console.log("sign in");
    return async (dispatch) => {
        dispatch(signinUserRequest());
        try {
            const { data } = await http.post("/user/signin", {
                email,
                password,
            });
            dispatch(signinUserSuccess(data));
        } catch (error) {
            dispatch(signinUserFailure(error.message));
        }
    };
};

export const signupUser = (userData) => {
    return async (dispatch) => {
        dispatch(signupUserRequest());
        try {
            const { data } = await http.post("/user/signup", userData);
            dispatch(signupUserSuccess(data));
            dispatch(signinUserSuccess(data));
            Router.push("/");
        } catch (error) {
            dispatch(signupUserFailure(error.message));
        }
    };
};

export const signoutUser = () => {
    return async (dispatch) => {
        dispatch({ type: SIGNOUT_USER });
        try {
            const { data } = await http.get("/user/logout");
            dispatch(signinUserSuccess(null));
            Router.push("/");
        } catch (error) {}
    };
};

export const loadUser = async (store) => {
    store.dispatch(signinUserRequest()) ;
    try {
        const { data } = await http.get("/user/load");
        store.dispatch(signinUserSuccess(data));
    } catch (error) {
        store.dispatch(signinUserFailure(error.message))
    }
};
