import {userAPI} from "../components/api/api";


const SET_USERS = 'SET_USERS',
     SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
     SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'


const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1
}

export const userReducer = (state= initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
        return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
        return {...state, totalUsersCount: action.count}
        default:
        return state
    }
}

export const setUsers = (users) => ({type:SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage});
// export const setUsers = (count) => ({type:SET_CURRENT_PAGE, count});


export const getUser = () => (dispatch) => {
    userAPI.user()
        .then(response => {
            dispatch(setUsers(response.data.items))
        })
}