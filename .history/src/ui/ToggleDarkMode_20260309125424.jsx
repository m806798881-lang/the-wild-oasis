import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleClick() {
    setIsDarkMode((dark) => !dark);
  }

  return (
    <ButtonIcon onClick={handleClick}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default ToggleDarkMode;
