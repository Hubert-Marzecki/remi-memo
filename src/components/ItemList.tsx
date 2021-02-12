import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../app/itemsSlice";
import { Item } from "../Model";
import ItemTile from "./ItemTile";

export default function ItemList() : JSX.Element {
  const items = useSelector(selectItems);

  function renderList () {
   return items.items.map((item : Item) => {
        return (
            <ItemTile item={item}/>
        )
    })
  }

  return (
    <>
    {renderList()}
    </>
  )
}