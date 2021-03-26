import './App.css';
import React from "react";
import ToDoList from "./components/ToDoList/ToDoList";
import {Login} from "./components/Login/Login";
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";

import Container from "./components/Users/Container";






let App = () =>  {
  return (
          <div className="App">
              <div className='app__container'>
                  <Route path='/'>
                      <Header />
                  </Route>
                  <Route  path="/login">
                    <Login/>
                </Route>
                  <Route  path='/todo'>
                      <ToDoList/>
                  </Route>
                  <Route  path='/users'>
                      <Container />
                  </Route>
              </div>
          </div>


  );
}

export default App;
