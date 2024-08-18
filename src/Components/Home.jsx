import React ,{useContext} from "react";
import notecContext from "../Context/noteContext";
import Notes from "./Notes";

// import NotesStates from "../Context/NotesStates";

export default function Home() {
  const context = useContext(notecContext);
  const  {notes,setNotes}  = context;


  return (
    <div>
      <h2>Add Notes</h2>
      <div className="container d-flex w-50 justify-content-center">
        <form className="">
          <div className="mb-3  ">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text text-primary">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label text-primary text-opacity-75" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <h2>your Notes</h2>
  <Notes note={notes}/>

    </div>
  );
}
