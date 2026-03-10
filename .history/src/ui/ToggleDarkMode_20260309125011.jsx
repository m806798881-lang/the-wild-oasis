import { HiOutlineMoon } from "react-icons/hi";

import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function ToggleDarkMode() {
  const { setIsDarkMode } = useDarkMode();
  return (
    <ButtonIcon>
      <HiOutlineMoon />
    </ButtonIcon>
  );
}

export default ToggleDarkMode;
