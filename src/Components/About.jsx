import React, { useContext, useEffect } from 'react'
import notecContext from '../Context/noteContext'


export default function About() {

    const {state , update} = useContext(notecContext);

    useEffect(() => {
        update();
    }, []);
    
  return (
    <div>
        this is about page about {state.name} and a genger is {state.gender}
    </div>
  )
}
