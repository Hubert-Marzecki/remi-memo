import React from "react"
import { useDispatch } from "react-redux";
import { setIsAddingItem } from "../app/itemsSlice";

export default function MainFooter() {
    const dispatch = useDispatch();

    function openAddNewItem() {
        dispatch(setIsAddingItem(true))
        // return firebase.push(user.uid, { 
        //     name: 'This is real product name',
        //     type: "I am of the type of something",
        //     expDate: "6",
        //     openDate: "date",
        //     img: "https://picsum.photos/seed/picsum/200/300",
        //     icon: 'https://picsum.photos/seed/picsum/100/100'
        //  })
      }
    return (
        <div className="footer">
        <button className="add__button" onClick={() => openAddNewItem()}>+</button>
        </div>
    )
}