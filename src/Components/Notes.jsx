import React, { useEffect,useContext } from "react";
import Noteitems from "./Noteitems";
import notecContext from "../Context/noteContext";
import Addnotes from "./Addnotes";

export default function Notes() {
  const context = useContext(notecContext);
  const { notes ,fetchnotes} = context;

  useEffect(() => {
   fetchnotes()
  }, [])
  
  return (
    <>
    <Addnotes />
    <div className="row">
      <h2>your Notes</h2>
      {notes.map((note) => {
        return <Noteitems key={note._id} note={note} />;
      })}
    </div>
    </>
  );
}
