import React, { useEffect, useContext, useRef, useState } from "react";
import Noteitems from "./Noteitems";
import notecContext from "../Context/noteContext";
import Addnotes from "./Addnotes";

export default function Notes() {
  const context = useContext(notecContext);
  const { notes, fetchnotes, editNotes } = context;

  useEffect(() => {
    fetchnotes();
  }, []);

  const [note, setnote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);

  const updatenotes = (curnote) => {
    ref.current.click();
    setnote({
      id: curnote._id,
      etitle: curnote.title,
      edescription: curnote.description,
      etag: curnote.tag
    });
  };

  const handleClick = (e) => {
    console.log("updating note", note);
    // e.preventDefault();
    editNotes(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click(); // addNotes(note.title,note.description,note.tag )
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Addnotes />

      <button
        type="button"
        ref={ref}
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                updating note..
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container d-flex w-50 justify-content-center">
                <form className="">
                  <div className="mb-3  ">
                    <label htmlFor="etitle" className="form-label">
                      title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="emailHelp"
                      value={note.etitle}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                    <div
                      id="emailHelp"
                      className="form-text text-primary"
                    ></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edescription" className="form-label">
                      description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">
                      tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={note.etitle.length < 5}
                type="button"
                className="btn btn-primary" 
                onClick={handleClick}
              >
                update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>your Notes</h2>
        <div className="container">
          {notes.length === 0 && "no notes found.."}
        </div>

        {notes.map((note) => {
          return (
            <Noteitems key={note._id} updatenotes={updatenotes} note={note} />
          );
        })}
      </div>
    </>
  );
}
