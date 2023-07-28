import "./App.css";

import TopHeaderBar from "./components/layout/TopHeaderBar";

// pages
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import GuestBookPage from "./pages/GuestbookPage";
import IframePage from "./pages/IframePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopHeaderBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guest-book" element={<GuestBookPage />} />
        <Route path="/iframe-page" element={<IframePage />} />
      </Routes>
    </div>
  );
}

export default App;
