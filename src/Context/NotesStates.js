import React, { useState } from 'react';
import notecContext from './noteContext';

const NotesStates = (props) => {

    let s1 = {
        name: "joel",
        gender: "male"
    }

    const [state, setstate] = useState(s1)


    const update = () => {
        setTimeout(() => {
            setstate(
               {
                    name: "big D",
                    gender: "male myan."
                }
            )
        }, 1000);
    }
    return (
        <notecContext.Provider value={{state:state ,update:update}}>
            {props.children} 
        </notecContext.Provider>
    )
}


export default NotesStates;