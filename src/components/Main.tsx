import React, { useEffect, useState } from "react";
import app from "../base";
import { Divide as Hamburger }from 'hamburger-react';
import { BsSearch } from 'react-icons/bs';
import { useFirebase } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function Main() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const firebase = useFirebase()
  const dataBase = firebase.database();
  // @ts-ignore
    const user = useSelector((state : RootState) => state.firebase.auth);
    const [itemsFromDB, setItemsFromDB] = useState([])

  const ref = dataBase.ref(user.uid);
    ref.on("value", gotData, errData)

    function gotData(data:any) {
        console.log(data.val());
        const res = data.val();
        const arrayOfObj = Object.entries(res).map((e) => ( { [e[0]]: e[1] } ));
        console.log(arrayOfObj);
    }

    function errData(err:any) {
        console.log("err", err);
        
    }

    function signOut () {
        app.auth().signOut()
    }
    useEffect(() => {
    },[])


    function addItem() {
        console.log(user.uid)
        return firebase.push(user.uid, { 
            name: 'Name',
            type: "type",
            expDate: "date",
            openDate: "date",
            img: "img",
            icon: 'icon'
         })
      }



  return (
  <div className="main__page__wrapper">
      <div className="header">
      <div className="hamburger__holder" onClick={() => signOut()}>
        <Hamburger toggled={isOpen} toggle={setIsOpen}  color="#EEE7DE" rounded  />
        </div>
        <div className="logo__holder">
            <h1 className="logo"> REMI APP </h1>
        </div>
        <div className="search__holder">
           <BsSearch  />
        </div>
         </div>
            <div className="body">
            </div>
         <div className="footer">
                <button className="add__button" onClick={() => addItem()}>+</button>
         </div>
      </div>
  );
}
