import React, { useContext } from "react";
import { NewContext } from "./Parent";

export default function Child() {
  const context = useContext(NewContext);
  return (
    <div>
      <button
        onClick={() => {
          context.setTitle("miri");
        }}
      >
        Change
      </button>
    </div>
  );
}
