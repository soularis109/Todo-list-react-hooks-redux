import React, {useState,useEffect} from "react";
import './TodoList.css'
import {useDispatch} from "react-redux";
import {addNewToDo} from "../../redux/todolist-reducer";
import Add from '../utils/plus.svg'


let ToDoForm = (props) => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')


    const onSubmit = e => {
        e.preventDefault();
        if (value.length <= 0) {
            return value
        }  else {
            dispatch(addNewToDo(value))
            setValue('')
        }
    }

    return <form onSubmit={onSubmit} className='todo__form'>
        <input
            className='todo__inp border'
            name="newToDoList"
            type="text"
            placeholder="Add todo"
            onChange={e => setValue(e.target.value)} value={value}/>
        <button className='todo__btn'><img src={Add} className='todo__add'/></button>
    </form>
}


export default ToDoForm;