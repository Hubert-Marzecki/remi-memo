import React from "react";
import '../styles/addIcon.scss'
import searchIcon from '../assets/searchIcon.png';

export default function AddImg () {
    return (
        <div className="tile__wrapper">
            <h3 className="tile__header"> Add your photo </h3>
           <img className="tile__icon" src={searchIcon} />
        </div>
    )
}