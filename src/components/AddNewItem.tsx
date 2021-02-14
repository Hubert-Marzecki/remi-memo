import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Item, KeyName } from "../Model";
import '../styles/addNewItem.scss';
import Header from "./Header";
import InputTile from "./InputTile";
import DatePicker from 'react-date-picker';
import moment from "moment";
import { itemsSlice, selectItems, updateItemField } from "../app/itemsSlice";
import ExpInPicker from "./ExpInPicker";
import TileHolder from "./TileHolder";
export default function AddNewItem() {

    const [value, onChange] = useState<any>(new Date());
    const dispatch = useDispatch();
    const items = useSelector(selectItems);

    useEffect(() =>{
       const date =  moment(value).format("DD/MM/YYYY");    
       dispatch(updateItemField({key: "openDate", val: date}))
    },[value])

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

      
        ExpDate : {items.newItem.expDate}
            </div>
        </div>
    )
}