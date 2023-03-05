import {
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
} from "./userTypes";

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNIN_USER_REQUEST:
            return {
                loading: true,
            };
        case SIGNIN_USER_SUCCESS:
            return {
                loading: false,
                user: action.user, 
            };
        case SIGNIN_USER_FAILURE:
            return { 
                loading: false,
                error: action.error,
            };

        default:
            return  { user: null, loading: true, error: null } ;
    }
};

export const userSignupReducer = (state = {loading:true}, action) => {
    switch (action.type) {
        case SIGNUP_USER_REQUEST:
            return {
                loading: true,
            };
        case SIGNUP_USER_SUCCESS:
            return {
                loading: false,
                user: action.user, 
            };
        case SIGNUP_USER_FAILURE:
            return { 
                loading: false,
                error: action.error,
            };

        default:
            return   { user: null, loading: false, error: null } ;
    }
};

