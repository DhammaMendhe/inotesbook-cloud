import React, { useState } from 'react';
import notecContext from './noteContext';

const NotesStates = (props) => {
  const initialNotes =
    [
      {
        "_id": "66b8df751b1173b4eac61ec617",
        "user": "66b65d016680b5f8638c224f",
        "title": "this is me and sahil mendhe",
        "description": "qqallthings that you are..",
        "tag": "peqqrsnal",
        "date": "2024-08-11T15:57:41.375Z",
        "__v": 0
      },
      {
        "_id": "66c020bca6d2d22a0367764bda",
        "user": "66b65d016680b5f8638c224f",
        "title": "this is me and sahil mendhe",
        "description": "qqallthings that you are..",
        "tag": "peqqrsnal",
        "date": "2024-08-17T04:02:04.948Z",
        "__v": 0
      },
      {
        "_id": "66c020bda6d332da0367764bdc",
        "user": "66b65d016680b5f8638c224f",
        "title": "this is me and sahil mendhe",
        "description": "qqallthings that you are..",
        "tag": "peqqrsnal",
        "date": "2024-08-17T04:02:05.912Z",
        "__v": 0
      },
      {
        "_id": "66c020bfa336d2da0367764bde",
        "user": "66b65d016680b5f8638c224f",
        "title": "this is me and sahil mendhe",
        "description": "qqallthings that you are..",
        "tag": "peqqrsnal",
        "date": "2024-08-17T04:02:07.347Z",
        "__v": 0
      },
      {
        "_id": "66c03420dfa6d2da0367764be0",
        "user": "66b65d016680b5f8638c224f",
        "title": "i am the only one and onlyone ",
        "description": "qualit u are..",
        "tag": "persnal",
        "date": "2024-08-17T04:02:39.286Z",
        "__v": 0
      },
      {
        "_id": "66c33020e9a6d2da0367764be2",
        "user": "66b65d016680b5f8638c224f",
        "title": "i am the only one and onlyone ",
        "description": "qualit u are..",
        "tag": "duplicated",
        "date": "2024-08-17T04:02:49.620Z",
        "__v": 0
      }
    ]
  const [notes, setNotes] = useState(initialNotes);


  //add notes

  const addNotes = (title, description, tag) => {

    const note = {
      "_id": "66c33020e9a3336d2da0367764be2",
      "user": "66b65d016680b5f8638c224f",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-08-17T04:02:49.620Z",
      "__v": 0
    }; 
    setNotes(notes.concat(note))

  }

  // delete notes

  const deleteNotes = () => {

  }


  //edit notes

  const editNotes = () => {

  }


  return (
    <notecContext.Provider value={{ notes, initialNotes, addNotes, deleteNotes, editNotes }}>
      {props.children}
    </notecContext.Provider>
  )
}


export default NotesStates;