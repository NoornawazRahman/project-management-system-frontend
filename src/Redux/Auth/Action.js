// @ts-nocheck
import { API_BASE_URL } from "@/config/api"
import { REGISTER_REQUEST } from "./ActionType"
import axios from 'axios'
import { LOGIN_REQUEST, REGISTER_SUCCESS, LOGIN_SUCCESS, GET_USER_SUCCESS, GET_USER_REQUEST, LOGOUT } from "./ActionType"

export const register = userData => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData)
        console.log('register success', data);
        if (data.jwt) {
            localStorage.setItem('jwt', data.jwt)
            dispatch({ type: REGISTER_SUCCESS, payload: data })

        }

    } catch (error) {
        console.log(error)

    }

}


export const login = userData => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData)
        console.log('LOGIN success', data);
        if (data.jwt) {
            localStorage.setItem('jwt', data.jwt)
            dispatch({ type: LOGIN_SUCCESS, payload: data })

        }

    } catch (error) {
        console.log(error)

    }

}

export const getUser = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        console.log('getUser success', data);

        dispatch({ type: GET_USER_SUCCESS, payload: data })


    } catch (error) {
        console.log(error)

    }

}


export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
    localStorage.clear()
}