import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
import { useEffect } from "react";

function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleClick() {
    // set函数是异步的，之后程序用的还是旧值
    setIsDarkMode((dark) => !dark);
  }
  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <ButtonIcon onClick={handleClick}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default ToggleDarkMode;
