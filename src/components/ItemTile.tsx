import moment from "moment";
import React from "react";
import { Item } from "../Model";
import '../styles/itemTile.scss';

export default function ItemTile(props: {item: Item}) {

    const timeToDisplay = moment(props.item.expDate).fromNow();
    

    return(
        <div className="item__wrapper">
                <div className="content__wrapper">
                    <div className="icon__wrapper">
                        <img className="icon "src={props.item.icon} />
                    </div>
                    <div className="info__wrapper">
                        <h3 className="item__name"> {props.item.name} </h3>
                        <p className="item__type"> {props.item.type} </p>
                    </div>
                    <div className="badge__wrapper">
                           {timeToDisplay}
                      </div>
                </div>
        </div>
    )
}