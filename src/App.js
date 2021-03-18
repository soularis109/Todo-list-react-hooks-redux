import './App.css';
import React from "react";
import ToDoList from "./components/ToDoList/ToDoList";







let App = () =>  {
  return (
          <div className="App">
              <div className='app__container'>
                  <ToDoList/>
              </div>
          </div>


  );
}

export default App;
