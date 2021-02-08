import React, { useEffect, useState } from "react";
import app from "../base";
import { Divide as Hamburger }from 'hamburger-react';
import { BsSearch } from 'react-icons/bs';
import { useFirebase } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {Item} from '../Model';
import ItemTile from "./ItemTile";
import { selectItems, setItems } from "../app/itemsSlice";
import MainViewWhenEmptyItems from "./MainViewWhenEmptyItems";

export default function Main() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const firebase = useFirebase()
  const dataBase = firebase.database();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  // @ts-ignore
    const user = useSelector((state : RootState) => state.firebase.auth);
    const [itemsFromDB, setItemsFromDB] = useState<Array<any>>([])

    const ref = dataBase.ref(user.uid);
    function gotData(data:any) {
        const res = data.val();
        if(res === null) {
            return
        } 
        const arrayOfObj = Object.entries(res).map((e) => ( { [e[0]]: e[1] } ));
        const arrOfObjWithoutKey : any[] = arrayOfObj.flatMap(item => {
            return Object.keys(item).flatMap((key) => [Number(key), item[key]].slice(1))
        })
        dispatch(setItems(arrOfObjWithoutKey));
        console.log(items);
        console.log(arrOfObjWithoutKey);
        
    }

    function err(err:any) {
        console.log("err", err)
    }

    function signOut () {
        app.auth().signOut()
    }
    
    useEffect(() => {
     ref.on("value", gotData, err)
    },[])

    function addItem() {
        const data = {
            name: 'Los Angeles',
            state: 'CA',
            country: 'U'
          };
          
        return firebase.push(user.uid, { 
            name: 'Name',
            type: "type",
            expDate: "date",
            openDate: "date",
            img: "img",
            icon: 'icon'
         })
      }

      function renderItemsList() {
      // @ts-ignore
           return items.items.map((item : Item) => {
                return (
                    <>
                    <ItemTile item={item}/>
                    </>
                )
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
                {items.items.length === 0 ? <MainViewWhenEmptyItems /> : renderItemsList()}
            </div>
         <div className="footer">
                <button className="add__button" onClick={() => addItem()}>+</button>
         </div>
      </div>
  );
}
