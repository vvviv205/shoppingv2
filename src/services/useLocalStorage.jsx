import React from "react";
import { useState, useEffect } from "react";

export function useLocalStorage() {
  const [BookMarked, setBookMarked] = useState(() => {
    const stored = localStorage.getItem("BookMark");
    if (stored == [] || stored === null) {
      return [0];
    } else {
      return JSON.parse(stored);
    }
  });

  useEffect(
    function () {
      localStorage.setItem("BookMark", JSON.stringify(BookMarked));
    },
    [BookMarked]
  );

  return { BookMarked, setBookMarked };
}
