import React, { useCallback } from "react";
import app from "../base";
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "../app/userSlice";

// @ts-ignore
export default function Register({history}) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

const handleSingUp = useCallback(async (e) => {
    e.preventDefault();
    const {email, password} = e.target.elements;
    console.log(email);
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value).then(item => {
            console.log(item);
          dispatch(setUser(item.user?.email))
        }
            )
        history.push('/')
    } catch (err) {
        alert(err)
    }
}, [history])
console.log(user);

    return (
            <div>
                Regsiter
                <form onSubmit={handleSingUp} >
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
            </div>
    )
}