import { createContext, useReducer, useMemo } from "react";

export const ThemeContext = createContext();

const reducer = (theme, action) => {
  switch (action.type) {
    case "change":
      return theme === "light" ? "Dark" : "light";
    default:
      return theme;
  }
};

export default function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(reducer, "light");

  const value = useMemo(
    () => ({ theme, toggleTheme: () => dispatch({ type: "change" }) }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
