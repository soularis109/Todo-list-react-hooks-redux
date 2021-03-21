import React, {useState,useEffect} from "react";
import {useSelector} from "react-redux";
import ListItem from "./ListItem";
import {loadState, saveState} from "../../redux/localStorage";


const ToDoItem = (props) => {
    const list = useSelector(state => state.toDo.list)



    return (
        <div>
            {list.map((list, id) => <ListItem list={list} idx={id}/>)}
        </div>

    )
}

export default ToDoItem;