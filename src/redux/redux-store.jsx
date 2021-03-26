import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import todoReducer from "./todolist-reducer";
import {loadState, saveLogo, saveState} from "./localStorage";
import {reducer as formReducer} from 'redux-form'
import {loginReducer} from "./login-reducer";
import {userReducer} from "./users-reducer";



let reducers = combineReducers({
    toDo: todoReducer,
    login: loginReducer,
    form: formReducer,
    userPage: userReducer
})

const store = createStore(reducers,loadState(), applyMiddleware(thunkMiddleware));
window.store = store;

 store.subscribe(() => saveState(store.getState()));
export default store;