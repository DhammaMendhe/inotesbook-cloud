import React from "react";
import { useContext } from "react";
import Noteitems from "./Noteitems";
import notecContext from "../Context/noteContext";
import Addnotes from "./Addnotes";

export default function () {
  const context = useContext(notecContext);
  const { notes, setNotes } = context;

  return (
    <>
    <Addnotes />
    <div className="row">
      <h2>your Notes</h2>
      {notes.map((note, index) => {
        return <Noteitems note={note} />;
      })}
    </div>
    </>
  );
}
