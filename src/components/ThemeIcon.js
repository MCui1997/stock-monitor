import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { MoonIcon } from "@heroicons/react/solid";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <></>
  );
};

export default ThemeIcon;
