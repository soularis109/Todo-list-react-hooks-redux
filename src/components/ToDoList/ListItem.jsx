import React, {useState, useEffect} from "react";
import './style.css';
import {useDispatch} from "react-redux";
import {removeToDo, updateTodo} from "../../redux/todolist-reducer";




const ListItem = (props) => {
    const title = props.list.title;
    const id = props.list.id;
    const idx = props.idx;
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState('')


    const updateMode = () => {
        if (editMode) {
            dispatch(updateTodo(id, value))
        }
        setEditMode(!editMode)
    }


    return <>
        <div className='list__container'>

            <div className='item__flex'>
                <div className='item__container'>
                    <div>{editMode ?
                        <input  className='item__titleInput border'
                                onChange={e => setValue(e.target.value)} value={value}   autoFocus={true}/> : <div className='item__title border'>{title}</div>}</div>
                </div>

                <div>
                    <button className='item__edit btn btn-light' onClick={updateMode}>{editMode ? 'Save' : 'Edit'}</button>
                    <button className='item__delete btn btn-dark' onClick={() => dispatch(removeToDo(idx))}>Delete
                    </button>
                </div>
            </div>

        </div>


    </>
}

export default ListItem;