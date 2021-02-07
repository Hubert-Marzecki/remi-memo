import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../app/userSlice";
import {Route, Redirect} from 'react-router-dom';
import React from "react";
import { render } from "@testing-library/react";
import { firebaseReducer } from "react-redux-firebase";
import { RootState } from "../app/store";



// @ts-ignore
export default function PrivateRoute ({component : RouteComponent, ...rest})  {
// @ts-ignore
const user = useSelector((state : RootState) => state.firebase.auth);

console.log(user);

    return (
        <Route
        {...rest}
        render={routeProps => 
            (!user.isEmpty) ? (
                <RouteComponent {...routeProps} /> 
            ) : (
                <Redirect to={"/login"} />
            )
        }
/>
            
    )
}