import { HiOutlineMoon } from "react-icons/hi";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function ToggleDarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleClick() {
    setIsDarkMode((dark) => !dark);
  }

  return (
    <ButtonIcon onClick={handleClick}>
      <HiOutlineMoon />
    </ButtonIcon>
  );
}

export default ToggleDarkMode;
