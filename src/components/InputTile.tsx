import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../app/itemsSlice";
import {KeyName} from '../Model'

export default function InputTile(props: {placeholder:string, keyName: KeyName }) : JSX.Element{

    const dispatch = useDispatch();
    const items = useSelector(selectItems);


    function updateNewItem(e:ChangeEvent<HTMLInputElement>) {
        const data : string = e.target.value ;
        dispatch(updateNewItem({props.keyName, data}))
    }

    return (
        <div>
                <input type="text" placeholder={props.placeholder} onChange={(e: ChangeEvent<HTMLInputElement>) => updateNewItem(e)}/>
        </div>
    )
}

