import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import app from "../base";
import searchIcon from "../assets/searchIcon.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function signOut () {
        app.auth().signOut()
    }
    return (
        <div className="header">
        <div className="hamburger__holder" onClick={() => signOut()}>
          <Hamburger toggled={isOpen} toggle={setIsOpen}  color="#EEE7DE" rounded  />
          </div>
          <div className="logo__holder">
              <h1 className="logo"> REMI APP </h1>
          </div>
          <div className="search__holder">
            <img src={searchIcon} className="search__icon" />
          </div>
           </div>
    )
}