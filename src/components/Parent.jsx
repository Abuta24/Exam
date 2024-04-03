import { createContext, useState } from "react";
import Child from "./Child";

export const NewContext = createContext(null);

export default function Parent() {
  const [title, setTitle] = useState("rame");
  return (
    <NewContext.Provider value={{setTitle}}>
      <div>
        <h1>{title}</h1>
      </div>
      <Child />
    </NewContext.Provider>
  );
}
