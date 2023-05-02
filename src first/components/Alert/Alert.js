import React from "react";

export default function Alert(props) {
    // let capitalize = (word) => {
    //   let lower= word.toLocaleLowerCase()
    //   return lower.charAt(0).toUpperCase()+lower.slice(1)
    // }
    
  return (
    <div style={{height:'60px'}}>

   { props.alert &&<div>
      <div className="alert alert-success" role="alert">
      {/* <strong>{capitalize(props.alert.type)}</strong>{props.alert.message} */}
      <strong>{props.alert.type}</strong>{props.alert.message}
      </div>
    </div>}
    </div>
  );
}
