import "./App.css";
import BtnSearch from "./components/BtnSearch/BtnSearch";
import React, { useState } from "react";
import { DarkModeContext } from "./context/Context";
import Header from "./components/Header/Header";

function App() {
  const [darkMode, SetdarkMode] = useState(false);
  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, SetdarkMode }}>
        <Header />
        <BtnSearch />
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
