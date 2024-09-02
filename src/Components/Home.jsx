import React, { useContext } from "react";
import Notes from "./Notes";

export default function Home(props) {
  const {showalert} = props;
  return (
    <>
    <Notes showalert={showalert}/>
    </>
    
  );
}
