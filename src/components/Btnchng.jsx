import React, { useRef } from "react";

export default function Btnchng() {
  const Colorref = useRef("");
  const handleClick = () => {
    if (Colorref.current.style.background === "red") {
      Colorref.current.style.background = "black";
    } else {
      Colorref.current.style.background = "red";
    }
  };
  return (
    <div>
      <button onClick={handleClick}>Change color</button>
      <button ref={Colorref}>changed color</button>
    </div>
  );
}
