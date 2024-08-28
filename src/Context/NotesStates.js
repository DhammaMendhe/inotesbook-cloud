import React, { useState } from 'react';
import notecContext from './noteContext';

const NotesStates = (props) => {
  const host = 'http://localhost:5000';
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  //add notes

  const fetchnotes = async () => {
console.log("this is go")
    //API call 
    const response = await fetch(`${host}/api/notes/fetchAllNotes`,
      {

        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVkMDE2NjgwYjVmODYzOGMyMjRmIn0sImlhdCI6MTcyMzIyNzUxMH0.5sycT3aRhdF-6AYXsWF54uxVidw_Bq69QI-mruV-oVk'
        }
      });
    const json = await response.json();
    // console.log(json);
    setNotes(json)

  }

  //add notes

  const addNotes = async (title, description, tag) => {

    console.log("adding ntes")
    //API call 
    const response = await fetch(`${host}/api/notes/addnotes`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVkMDE2NjgwYjVmODYzOGMyMjRmIn0sImlhdCI6MTcyMzIyNzUxMH0.5sycT3aRhdF-6AYXsWF54uxVidw_Bq69QI-mruV-oVk'
        },
        body: JSON.stringify({ title, description, tag })

      });
    const json = await response.json();
    console.log(json)
    setNotes(notes.concat(json))

  }

  // delete notes
  const deleteNotes = async (id) => {

    //API call 
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVkMDE2NjgwYjVmODYzOGMyMjRmIn0sImlhdCI6MTcyMzIyNzUxMH0.5sycT3aRhdF-6AYXsWF54uxVidw_Bq69QI-mruV-oVk'
        }
      });
    const json = response.json();
    console.log(json);
    console.log("note deleting with id :" + id)
    const samplenNote = notes.filter((note) => { return note._id !== id });
    console.log(samplenNote)
    setNotes(samplenNote)


  }


  //edit notes

  const editNotes = async (id, title, description, tag) => {
    //API call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVkMDE2NjgwYjVmODYzOGMyMjRmIn0sImlhdCI6MTcyMzIyNzUxMH0.5sycT3aRhdF-6AYXsWF54uxVidw_Bq69QI-mruV-oVk'
        },
        body: JSON.stringify({ title, description, tag })

      });
    const json = response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id === id) {
        element.title = title  ;
        element.description = description;
        element.tag = tag;

      }
    }

  }


  return (
    <notecContext.Provider value={{ notes, initialNotes, addNotes, deleteNotes, editNotes, fetchnotes }}>
      {props.children}
    </notecContext.Provider>
  )
}


export default NotesStates;