import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, settheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored == "" || stored === null) {
      window.matchMedia("(prefers-color-scheme: light)").matches;
      return "light";
    } else {
      return stored;
    }
  });

  useEffect(
    function () {
      if (theme === "light") {
        document.documentElement.classList.remove("dark");
      } else if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
      localStorage.setItem("theme", theme);
    },
    [theme]
  );

  return { theme, settheme };
}
