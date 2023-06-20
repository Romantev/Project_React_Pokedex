import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import DetailSite from "./pages/detailsite/Detailsite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-site" element={<DetailSite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
