import { setMaxListeners } from "process";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../app/itemsSlice";

export default function ExpInPicker() :JSX.Element {
    const items = useSelector(selectItems);
    function setExpTime() {
        const openDate  = items.newItem.openDate;
    }
    const [num, setNum ] = useState<number>(10);

    function changeNumber(e: ChangeEvent<HTMLInputElement>) {
        if(num < 0 ) {
           setNum(0)
        } else if(e.target.value !== ""){
           setNum(parseInt(e.target.value, 10))
        } else {
            setNum(0)
        }
    }

    enum Direction {
        Increase = "increase",
        Decrease = "decrease"
    }

    function clickToChange(direction:Direction) {
        if (direction === Direction.Decrease && num > 0) {
            setNum(num => --num)
        } else if (direction === Direction.Increase) {
            setNum(num => ++num)
        }
    }

    return (
        <div>
           <button onClick={() => clickToChange(Direction.Decrease)}>-</button>
           <input type="text" value={num} onChange={(e: ChangeEvent<HTMLInputElement>) => changeNumber(e)}/>
           <button onClick={() => clickToChange(Direction.Increase)}>+</button> 
        </div>
    )
}
