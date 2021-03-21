import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import todoReducer from "./todolist-reducer";
import {loadState, saveState} from "./localStorage";



let reducers = combineReducers({
    toDo: todoReducer
})

const store = createStore(reducers,loadState(), applyMiddleware(thunkMiddleware));
window.store = store;

store.subscribe(() => saveState(store.getState()));
export default store;