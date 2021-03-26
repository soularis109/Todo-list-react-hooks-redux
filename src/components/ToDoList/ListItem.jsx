import React, {useState, useEffect} from "react";
import './style.css';
import {useDispatch} from "react-redux";
import {removeToDo, updateTodo} from "../../redux/todolist-reducer";
import Save from '../utils/floppy-disk.svg'
import Edit from "../utils/edit.svg";
import Delete from "../utils/rubbish-bin.svg";



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

                <div className='item__change'>
                    <button className='item__edit' onClick={updateMode}>{editMode ? <img src={Save} className='item__save'/>
                        : <img src={Edit} className='item__save'/>}</button>
                    <button className='item__edit' onClick={() => dispatch(removeToDo(idx))}>
                        <img src={Delete} className='item__save'/>
                    </button>
                </div>
            </div>

        </div>


    </>
}

export default ListItem;