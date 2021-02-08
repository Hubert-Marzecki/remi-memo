import React from "react";
import cosm from  '../assets/cosmetics.png'
import '../styles/emptyList.scss';

export default function MainViewWhenEmptyItems() {
    return (
        <div className="emptyList__wrapper">
            <img src={cosm} className="icon"/>
            <h1 className="empty__header">Add your cosmetics</h1>
            </div>
    )
}