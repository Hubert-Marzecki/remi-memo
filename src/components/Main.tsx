import React, { useEffect, useState } from "react";
import app from "../base";
import { Divide as Hamburger }from 'hamburger-react';
import { BsSearch } from 'react-icons/bs';
import { useFirebase } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {Item} from '../Model';
import ItemTile from "./ItemTile";
import { selectItems, setIsAddingItem, setItems } from "../app/itemsSlice";
import MainViewWhenEmptyItems from "./MainViewWhenEmptyItems";
import AddNewItem from "./AddNewItem";
import Header from "./Header";
import MainFooter from "./MainFooter";
import ItemList from "./ItemList";

export default function Main() {
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
    }
    function err(err:any) {
        console.log("err", err)
    }

    
    useEffect(() => {
     ref.on("value", gotData, err)
    },[])



  return (
  <div className="main__page__wrapper">
         {items.isAddingItem ? <AddNewItem /> : (
             <>
        <Header />
         <div className="body">
             {items.items.length === 0 ? <MainViewWhenEmptyItems /> : <ItemList />}
         </div>
         <MainFooter />
      </>
         )}
      </div>
  );
}
