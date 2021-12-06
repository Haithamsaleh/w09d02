import axios from "axios";
import React,{useEffect,useState} from "react";

import Register from "./component/register/index.js";
import {login} from "./reducers/login";
import Tasks from "./component/Task/index.js";
import {useDispatch,useSelector} from "react-redux"
import './App.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;


function App() {

  
  return (

    <>
    <div className="list">
    <Register/>
      <br/>
      <Login />
      </div>
      <Tasks />

    </>
  );
}

export default App;
