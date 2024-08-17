import React, { useContext, useEffect } from "react";
import notecContext from "../Context/noteContext";

export default function About() {
  const { notes } = useContext(notecContext);

  // useEffect(() => {

  // }, []);
  

  return (
    <div>
      this is about page about and a genger is
      <p>{notes.map((item, index) => {
        return 
         <p>{item.id}</p>

        // ,item.title, item.description, item.tag, item.date
        // console.log(notes)
      })}
      </p>
    </div>
  );
}
