import React from "react";
import { Item } from "../Model";

export default function ItemTile(props: {item: Item}) {
    return(
        <div className="item__wrapper">
                <div className="content__wrapper">
                    <div className="icon__wrapper">
                        <img src={props.item.icon} />
                    </div>
                    <div className="info__wrapper">
                        <h4> {props.item.name} </h4>
                        <h5> {props.item.type} </h5>
                        <div className="inline__content">
                        <p> {props.item.openDate} </p>
                        </div>

                        <div className="badge__wrapper">
                            <div>
                                MOVE IN 
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}