import React, { useEffect, useState } from "react";

export default function UseKeyPress() {
  const [key, setKey] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      setKey(e.key);
    });

    return () => {
      window.removeEventListener("keypress", (e) => {
        setKey(e.key);
      });
    };

  }, []);

  return {key}
}
