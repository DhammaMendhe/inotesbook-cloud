import React, { useState } from 'react';
import notecContext from './noteContext';

const NotesStates = (props) => {
  const host = 'http://localhost:5000';
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  //add notes

  const fetchnotes = async () => {
    //API call 
    const response = await fetch(`${host}/api/notes/fetchAllNotes`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVlZjgyYWFiYzJiNTkwZTVhZjk4In0sImlhdCI6MTcyMzIyNzk2OH0.UjQsb4BpYntRfmR-e4qvMAefi1piGcP4Tl_S1ko9zaI'
        }
      });
    const json = await response.json();
    console.log(json);
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
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVlZjgyYWFiYzJiNTkwZTVhZjk4In0sImlhdCI6MTcyMzIyNzk2OH0.UjQsb4BpYntRfmR-e4qvMAefi1piGcP4Tl_S1ko9zaI'
        },
        body: JSON.stringify({ title, description, tag })

      });
    const note = await response.json();
    // console.log(json)
    setNotes(notes.concat(note))

  }

  // delete notes
  const deleteNotes = async (id) => {

    //API call 
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVlZjgyYWFiYzJiNTkwZTVhZjk4In0sImlhdCI6MTcyMzIyNzk2OH0.UjQsb4BpYntRfmR-e4qvMAefi1piGcP4Tl_S1ko9zaI'
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
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVlZjgyYWFiYzJiNTkwZTVhZjk4In0sImlhdCI6MTcyMzIyNzk2OH0.UjQsb4BpYntRfmR-e4qvMAefi1piGcP4Tl_S1ko9zaI'
        },
        body: JSON.stringify({ title, description, tag })

      });
    const json = response.json();
    console.log(json)

    const newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;

      }

    }
    setNotes(newNotes);

  }


  return (
    <notecContext.Provider value={{ notes, initialNotes, addNotes, deleteNotes, editNotes, fetchnotes }}>
      {props.children}
    </notecContext.Provider>
  )
}


export default NotesStates;