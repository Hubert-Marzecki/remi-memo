import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login';
import Register from './components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from './app/userSlice';
import PrivateRoute from './components/PrivateRoute';
import app from './base';
import { useFirebase, useFirestore } from 'react-redux-firebase';
import { RootState } from './app/store';


function App() {
  const firebase = useFirebase()
  const firestore = useFirestore()


  // @ts-ignore
  const user = useSelector((state : RootState) => state.firebase.auth);
  function getListItems() {
    if (user.uid) return;
  }

  return (
    <Router>
    <div className="App">
      <PrivateRoute exact path="/" component={Main} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
        {/* <Counter /> */}
        {/* <button onClick={() => addItem()}>AADDDDD</button> */}
    </div>
    </Router>
  );
}

export default App;
