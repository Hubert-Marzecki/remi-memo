import React, { useState } from "react";
import { useStore } from "react-redux";
import { Item, KeyName } from "../Model";
import '../styles/addNewItem.scss';
import Header from "./Header";
import InputTile from "./InputTile";

export default function AddNewItem() {

    return (
        <div className="view__wrapper">
            <Header />
            <div className="content_wrapper">
                <h1> Add New Product </h1>
                <InputTile placeholder="Product Name"  keyName={KeyName.Name}/>
            </div>
        </div>
    )
}