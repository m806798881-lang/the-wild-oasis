import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [value, setValue] = useLocalStorageState(false, "darkMode");
  return (
    <DarkModeContext.Provider value={{ value, setValue }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const { value: isDarkMode, setValue: setIsDarkMode } =
    useContext(DarkModeContext);
  return { isDarkMode, setIsDarkMode };
}
