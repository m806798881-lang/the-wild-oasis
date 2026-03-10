import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();
function DarkModeProvider({ children }) {
  const [value, setValue] = useLocalStorageState(false, "darkMode");
  return (
    <DarkModeContext.Provider value={{ value, setValue }}>
      {children}
    </DarkModeContext.Provider>
  );
}
