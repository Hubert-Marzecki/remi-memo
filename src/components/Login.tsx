import React, { useCallback } from "react";
import app from "../base";
import { Link, Redirect, withRouter } from 'react-router-dom';
import { current } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../app/userSlice";
import Register from "./Register";
import firebase from "firebase";
import { RootState } from "../app/store";
import facebookLogo from '../assets/facebook.png'
import instagramLogo from '../assets/instagram_2.png'
import googleLogo from '../assets/google.png'



// @ts-ignore
export default function Login({history}) {


// @ts-ignore
    const user = useSelector((state : RootState) => state.firebase.auth);
    const dispatch = useDispatch();

    const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    const {email, password} = e.target.elements;
    try {
        await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        
    } catch (err) {
        alert(err)
    }
}, [history])

const providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();
const authWithGoogle = () => {
    firebase.auth().signInWithPopup(providerGoogle).then(res => {
        console.log(res);
        
    history.push('/')
    })
}
const authWithFacebook = () => {
    firebase.auth().signInWithPopup(providerFacebook).then(res => {
        console.log(res);
    }
        )
}
    if(user.uid) {
        return <Redirect to="/" />
    }
    return (
            <div>
                {/* <form onSubmit={handleLogin} >
                <label>E-MAIL
                <input name="email" type="email" placeholder="Email" required
                />
                </label>
                <label>PASSWORD
                 <input name="password" type="password" placeholder="Password" required
                />
                </label>

                <button type="submit"> SUMBIT </button >
                </form >
                <button onClick={() =>   history.push('/register')}>Register</button>
                <button onClick={() => authWithGoogle()}> GOOOGLE </button> */}

                <div className="landing__page">
  <div className="form__container">
    <div className="login__panel">
      <div className="panel__header">
       <h1 className="header"> REMI - NEVER FORGETEN </h1>
      </div>
      <p className="login__with">Login with</p>
      <div className="social__login">
          <div className="icon__wrapper">
          <img  className="icon" src={googleLogo} alt="google icon" onClick={() => authWithGoogle()} />
          </div>
          <div className="icon__wrapper">
          <a href="#">
          <img  className="icon" src={facebookLogo} alt="facebook icon" onClick={authWithFacebook}/>
          </a>
        </div>
        <div className="icon__wrapper">
        <a href="#">
        <img  className="icon" src={instagramLogo}  alt="instagram icon" />
        </a>
        </div>
      </div>
      <div className="form__wrapper">
        <form className="login__form" onSubmit={handleLogin}>
          <input className="input username__input" type="email" name="email" placeholder="Email"  required/> <br/>
          <input className="input password__input" type="password" name="password" placeholder="Password" required/><br/>
          <a className="password__revival">Forgot Password?</a>
          <div className="buttons__wrapper">
            <button className="form__button form__button--login" type="submit"> Login </button>
            <button className="form__button form__button--register "  value="Register" onClick={() =>  history.push('/register')}  > Register </button>
          </div>
        </form>
      </div>
    </div>
    <div className="img__wrapper">
      <img className="img" src="./assets/astronaut.png" alt=""/>
    </div>
  </div>
</div>
</div>
       
    )
}