import { HiOutlineMoon } from "react-icons/hi";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function ToggleDarkMode() {
  const { isDarkMode,setIsDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={}>
      <HiOutlineMoon />
    </ButtonIcon>
  );
}

export default ToggleDarkMode;
