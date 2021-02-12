import React, { useEffect, useState } from "react";
import { useDispatch, useStore } from "react-redux";
import { Item, KeyName } from "../Model";
import '../styles/addNewItem.scss';
import Header from "./Header";
import InputTile from "./InputTile";
import DatePicker from 'react-date-picker';
import moment from "moment";
import { updateItemField } from "../app/itemsSlice";
import ExpInPicker from "./ExpInPicker";
export default function AddNewItem() {

    const [value, onChange] = useState<any>(new Date());
    const dispatch = useDispatch();

    useEffect(() =>{
       const date =  moment(value).format("DD/MM/YYYY");    
       dispatch(updateItemField({key: "openDate", val: date}))
    },[value])

    return (
        <div className="view__wrapper">
            <Header />
            <div className="content_wrapper">
                <h1> Add New Product </h1>
                <InputTile placeholder="Name"  keyName={KeyName.Name} />
                <InputTile placeholder="Type"  keyName={KeyName.Type} />
                <h3>Date picker</h3>
                <DatePicker  
                onChange={onChange}
                value={value}
        />
        <div>

        MSC To Expire
        </div>
        <ExpInPicker />
            </div>
        </div>
    )
}