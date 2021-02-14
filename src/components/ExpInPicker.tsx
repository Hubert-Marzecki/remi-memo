import moment from "moment";
import { setMaxListeners } from "process";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems, updateItemField } from "../app/itemsSlice";
import { KeyName } from "../Model";
import "../styles/inputTile.scss";
export default function ExpInPicker() :JSX.Element {
    const items = useSelector(selectItems);
    const dispatch = useDispatch();
    const [num, setNum ] = useState<number>(1);
    const openDate =  moment(items.newItem.openDate, "DD/MM/YYYY").toDate();


    function changeNumber(e: ChangeEvent<HTMLInputElement>) {
        let val = parseInt(e.target.value, 10);
        if(val < 1 ) {
           setNum(1)
        } else if(e.target.value !== ""){
           setNum(val)
        } else if(val > 120) {
            setNum(120)
        } else{
            setNum(1)
        }
        const expDate = moment(openDate).add(num, "months");
        const formatedDate = moment(expDate).format("DD/MM/YYYY");
        dispatch(updateItemField({key: KeyName.ExpDate, val: formatedDate})) 
    }

    // enum Direction {
    //     Increase = "increase",
    //     Decrease = "decrease"
    // }

    // function clickToChange(direction:Direction) {
    //     if (direction === Direction.Decrease && num > 0) {
    //         setNum(num => --num)
    //         const expDate = moment(openDate).add(num, "months");
    //         const formatedDate = moment(expDate).format("DD/MM/YYYY");
    //         dispatch(updateItemField({key: KeyName.ExpDate, val: formatedDate})) 
    //     } else if (direction === Direction.Increase) {
    //         setNum(num => ++num)
    //         const expDate = moment(openDate).add(num, "months");
    //         const formatedDate = moment(expDate).format("DD/MM/YYYY");
    //         dispatch(updateItemField({key: KeyName.ExpDate, val: formatedDate})) 
    //     }
    // }

    return (
        <div className="input__wrapper">
           {/* <button onClick={() => clickToChange(Direction.Decrease)}>-</button> */}
           <input className="input" type="text" placeholder="Expires In (msc)" onChange={(e: ChangeEvent<HTMLInputElement>) => changeNumber(e)}/>
           {/* <button onClick={() => clickToChange(Direction.Increase)}>+</button>  */}
        </div>
    )
}
