import React from "react";
import { useContext } from "react";
import Noteitems from "./Noteitems";
import notecContext from "../Context/noteContext";


export default function () {
  const context = useContext(notecContext);
  const { notes, setNotes } = context;

  return (
   <div className="row">
     {notes.map((note,index)=>{
        return <Noteitems note={note} />
    })}
   </div>
  )
}
