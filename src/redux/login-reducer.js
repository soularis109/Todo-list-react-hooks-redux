import {loginAPI} from "../components/api/api";

const SET_USER_DATA = 'SET-USER-DATA'



const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {...state, ...action.payload}
        }
        default:
            return state
    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getAuthUserData = () => (dispatch) => {
       loginAPI.me()
           .then(response => {
               if (response.data.resultCode === 0) {
                   let {id, email, login} = response.data.data
                   dispatch(setAuthUserData(id, email, login, true))
               }
           })

}
export const login = (email, password, rememberMe) => (dispatch) => {
    loginAPI.login(email, password, rememberMe)
        .then(response =>  {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch) => {
    loginAPI.logout()
        .then(response =>  {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}