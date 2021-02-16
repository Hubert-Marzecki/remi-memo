import React from "react";
import '../styles/tileHolder.scss';

export default function TileHolder(props: {children: JSX.Element}) {
    return (
        <div className="tile__withChilder__wrapper">
            {props.children}
            </div>
    )
}