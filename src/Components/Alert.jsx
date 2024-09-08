import React from "react";

export default function Alert(props) {

  const capitalizes = (word) => {
    if(word === "danger"){
      word = "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
      { props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
        
          <strong>{capitalizes(props.alert.type)}</strong>  : {props.alert.msg}
        </div>
      )}
    </div>
  );
}
