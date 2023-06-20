import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { DarkModeContext } from "./context/Context";

import Home from "./pages/Home/Home";
import DetailSite from "./pages/detailsite/Detailsite";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:type" element={<Home />} />
            <Route path="/detail-site/:id" element={<DetailSite />} />
          </Routes>
        </BrowserRouter>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
