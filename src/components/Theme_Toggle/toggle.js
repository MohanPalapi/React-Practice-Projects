import { ThemeContext, ThemeProvider } from "./themeContext";
import { useContext } from "react";

export default function Toggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        textAlign: "center",
      }}
    >
      <h1>Theme Toggle</h1>
      <h3>{theme.toUpperCase()} MODE</h3>
      <button onClick={toggleTheme}>Togle theme</button>
    </div>
  );
}
