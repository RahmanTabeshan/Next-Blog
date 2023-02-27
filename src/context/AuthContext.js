import http from "@/services/httpServices";
import axios from "axios";
import Router from "next/router";
import { createContext, useContext, useEffect } from "react";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const initialState = {
    user: null,
    loading: true,
    error: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SIGNIN_PENDING": {
            return { user: null, error: false, loading: true };
        }
        case "SIGNIN_SUCCESS": {
            return { loading: false, error: null, user: action.data };
        }
        case "SIGNIN_REJECT": {
            return { error: action.error, loading: false, user: null };
        }
        default:
            return { user: null, loading: false, error: null };
    }
};

const asyncActionHandlers = {
    SIGNIN: ({ dispatch }) => {
        return async (action) => {
            dispatch({ type: "SIGNIN_PENDING" });
            try {
                const { data } = await axios.post(
                    "http://localhost:5000/api/user/signin",
                    action.values,
                    { withCredentials: true }
                );
                dispatch({ type: "SIGNIN_SUCCESS", data });
                Router.push("/");
            } catch (error) {
                dispatch({
                    type: "SIGNIN_REJECT",
                    error: error.response.data.message,
                });
            }
        };
    },
    SIGNUP: ({ dispatch }) => {
        return async (action) => {
            dispatch({ type: "SIGNIN_PENDING" });
            try {
                const { data } = await axios.post(
                    "http://localhost:5000/api/user/signup",
                    action.values,
                    { withCredentials: true }
                );
                dispatch({ type: "SIGNIN_SUCCESS", data });
                Router.push("/");
            } catch (error) {
                dispatch({
                    type: "SIGNIN_REJECT",
                    error: error.response.data.message,
                });
            }
        };
    },
    LOAD_USER: ({ dispatch }) => {
        return async (action) => {
            dispatch({ type: "SIGNIN_PENDING" });
            try {
                const { data } = await http.get(
                    "/user/load",
                );
                dispatch({ type: "SIGNIN_SUCCESS", data });
            } catch (error) {
                dispatch({
                    type: "SIGNIN_REJECT",
                });
            }
        };
    },
    SIGNOUT: ({ dispatch }) => {
        return async (action) => {
            dispatch({ type: "SIGNIN_PENDING" });
            try {
                const { data } = await axios.get(
                    "http://localhost:5000/api/user/logout",
                    { withCredentials: true }
                );
                dispatch({type:""})
                Router.push("/");
            } catch (error) {
                dispatch({
                    type: "SIGNIN_REJECT",
                    error: error.response.data.message,
                });
            }
        };
    },
};

const AuthProvider = ({ children }) => {
    const [user, dispatch] = useReducerAsync(
        reducer,
        initialState,
        asyncActionHandlers
    );

    useEffect(() => {
        dispatch({ type: "LOAD_USER" });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider value={user}>
            <AuthContextDispatcher.Provider value={dispatch}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthContextDispatcher);
