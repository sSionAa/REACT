import "./components/Themes.css";
import React from "react";
import { useSelector } from "react-redux";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div>
        <ThemeSwitcher />
        <h1 className={`${theme}`}>Тестовый текст</h1>
    </div>
  );
}

export default App;