import React from "react";

export default function (props) {
  const { note } = props;
  return (
    <div className="container col-md-3">

      <div className="card my-3 ">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>  <span/>  
            <i className="fa-solid fa-trash-can"></i><span/>
            <i className="fa-solid fa-pen-to-square"></i><span/>
            <i className="fa-solid fa-plus"></i><span/>
        </div>
      </div>
      </div>
  );
}
