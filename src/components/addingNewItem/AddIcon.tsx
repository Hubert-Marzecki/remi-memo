import React from "react";
import '../styles/addIcon.scss'
import searchIcon from '../assets/searchIcon.png';

export default function AddIcon () {
    return (
        <div className="tile__wrapper">
            <h3 className="tile__header"> Choose an Icon </h3>
           <img className="tile__icon" src={searchIcon} />
        </div>
    )
}