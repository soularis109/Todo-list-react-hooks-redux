import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addNewToDo} from "../../redux/todolist-reducer";


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

    return <form onSubmit={onSubmit}>
        <input
            name="newToDoList"
            type="text"
            placeholder="Add todo"
            onChange={e => setValue(e.target.value)} value={value}/>
        <button className='btn btn-secondary'>Add</button>
    </form>
}


export default ToDoForm;