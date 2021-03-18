import React from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";


let ToDoList = () => {
    return <>
        <h1 className='app__header'>ToDo List</h1>
        <ToDoForm/>
        <ToDoItem/>
    </>
}

export default ToDoList;