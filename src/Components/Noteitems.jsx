import React, { useContext } from "react";
import notecContext from "../Context/noteContext";

export default function Noteitems(props) {

  const context = useContext(notecContext);
  const { deleteNotes } = context;


  const { note } = props;
  return (
    <div className="container col-md-3">

      <div className="card my-3 ">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>  <span/>  
            <i className="fa-solid fa-trash-can" onClick={()=>{deleteNotes(note._id)}} ></i><span/>
            <i className="fa-solid fa-pen-to-square"></i><span/>
            <i className="fa-solid fa-plus"></i><span/>
        </div>
      </div>
      </div>
  );
}
