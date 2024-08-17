import React, { useState } from 'react';
import notecContext from './noteContext';

const NotesStates = (props) => {
const initialNotes = 
    [
        {
          "_id": "66b8df751b73b4eac61ec617",
          "user": "66b65d016680b5f8638c224f",
          "title": "this is me and sahil mendhe",
          "description": "qqallthings that you are..",
          "tag": "peqqrsnal",
          "date": "2024-08-11T15:57:41.375Z",
          "__v": 0
        },
        {
          "_id": "66c020bca6d2da0367764bda",
          "user": "66b65d016680b5f8638c224f",
          "title": "this is me and sahil mendhe",
          "description": "qqallthings that you are..",
          "tag": "peqqrsnal",
          "date": "2024-08-17T04:02:04.948Z",
          "__v": 0
        },
        {
          "_id": "66c020bda6d2da0367764bdc",
          "user": "66b65d016680b5f8638c224f",
          "title": "this is me and sahil mendhe",
          "description": "qqallthings that you are..",
          "tag": "peqqrsnal",
          "date": "2024-08-17T04:02:05.912Z",
          "__v": 0
        },
        {
          "_id": "66c020bfa6d2da0367764bde",
          "user": "66b65d016680b5f8638c224f",
          "title": "this is me and sahil mendhe",
          "description": "qqallthings that you are..",
          "tag": "peqqrsnal",
          "date": "2024-08-17T04:02:07.347Z",
          "__v": 0
        },
        {
          "_id": "66c020dfa6d2da0367764be0",
          "user": "66b65d016680b5f8638c224f",
          "title": "i am the only one and onlyone ",
          "description": "qualit u are..",
          "tag": "persnal",
          "date": "2024-08-17T04:02:39.286Z",
          "__v": 0
        },
        {
          "_id": "66c020e9a6d2da0367764be2",
          "user": "66b65d016680b5f8638c224f",
          "title": "i am the only one and onlyone ",
          "description": "qualit u are..",
          "tag": "duplicated",
          "date": "2024-08-17T04:02:49.620Z",
          "__v": 0
        }
      ]
    const [notes,setNotes] = useState(initialNotes)
    
    return (
        <notecContext.Provider value={{notes,initialNotes}}>
            {props.children} 
        </notecContext.Provider>
    )
}


export default NotesStates;