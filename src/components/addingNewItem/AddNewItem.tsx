import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Item, KeyName } from "../Model";
import '../styles/addNewItem.scss';
import Header from "./Header";
import InputTile from "./InputTile";
import DatePicker from 'react-date-picker';
import moment from "moment";
import { itemsSlice, selectItems, setIsAddingItem, updateItemField } from "../app/itemsSlice";
import ExpInPicker from "./ExpInPicker";
import TileHolder from "./TileHolder";
import AddIcon from "./addingNewItem/AddIcon";
import AddImg from "./addingNewItem/AddIcon";
import { isIterationStatement } from "typescript";
import firebase from "firebase";
export default function AddNewItem() {

    const [value, onChange] = useState<any>(new Date());
    const dispatch = useDispatch();
    const items = useSelector(selectItems);
    // @ts-ignore
    const user = useSelector((state : RootState) => state.firebase.auth);
    
    useEffect(() =>{
       const date =  moment(value).format("DD/MM/YYYY");    
       dispatch(updateItemField({key: "openDate", val: date}))
    },[value])

    function addItemToList() {
        dispatch(setIsAddingItem(false));
        // @ts-ignore
        return firebase.push(user.uid, { 
            name: items.newItem.name,
            type: items.newItem.type,
            expDate: items.newItem.expDate,
            openDate: items.newItem.openDate,
            img: "https://picsum.photos/seed/picsum/200/300",
            icon: 'https://picsum.photos/seed/picsum/100/100'
         })
    }

    return (
        <div className="view__wrapper">
            <Header />
            <div className="content__wrapper">
                <h1 className="view__header"> Add New Product </h1>
                <TileHolder children={<InputTile placeholder="Name" keyName={KeyName.Name} />} />
                <TileHolder children={ <InputTile placeholder="Type"  keyName={KeyName.Type} />} />
                {/* <h3>Date picker</h3> */}
                <TileHolder children={   <DatePicker  
                onChange={onChange}
                value={value}
        />} />
                <TileHolder children={   <ExpInPicker />} />
              {/* ExpDate : {items.newItem.expDate} */}
              <div className="assets__holder">

                      <AddIcon />
                    <AddImg />
              </div>

                 <button onClick={() => addItemToList()} className="add__button"> ADD </button>
            </div>
        </div>
    )
}