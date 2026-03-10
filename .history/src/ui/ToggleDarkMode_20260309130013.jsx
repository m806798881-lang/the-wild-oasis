import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleClick() {
    setIsDarkMode((dark) => !dark);
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }

  return (
    <ButtonIcon onClick={handleClick}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default ToggleDarkMode;
