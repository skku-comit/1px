import './App.css';

// pages
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import GuestbookPage from './pages/GuestbookPage';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guest-book" element={<GuestbookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
