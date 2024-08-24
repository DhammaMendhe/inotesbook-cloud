import React, { useContext, useState } from "react";
import notecContext from "../Context/noteContext";

export default function Addnotes() {
  const context = useContext(notecContext);
  const { addNotes } = context;


const [note,setNote] = useState({title:"" ,description:"",tag:"default"})
  
  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title,note.description,note.tag);
    // console.log(note.description,note.tag,note.title)
  };

  const onchange = (e) => {
    // console.log(e.name) 
    // console.log(e.value)

  setNote({ ...note,[e.target.name]:e.target.value})
  };

  return (
    <div>
      <h2>Add Notes</h2>
      <div className="container d-flex w-50 justify-content-center">
        <form className="">
          <div className="mb-3  ">
            <label htmlFor="title" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onchange}
            />
            <div id="emailHelp" className="form-text text-primary"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onchange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
            tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onchange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Addnote
          </button>
        </form>
      </div>
    </div>
  );
}
