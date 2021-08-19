
import React, { useEffect, useState } from "react";
import "../styles/Child.css";

export default function Selection({ applyColor }) {
  const [color, setColor] = useState({background:''});

  function handleClick(){
    applyColor(setColor)
    console.log("done")
  }

//   useEffect(()=>{
//     console.log(color)
//   },[color])

  return (
    <div
      className="fix-box"
      style={color}
      onClick={handleClick}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}
