import './App.css';

import TopHeaderBar from './components/layout/TopHeaderBar';

// pages
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import GuestBookPage from './pages/GuestBookPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <TopHeaderBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guest-book" element={<GuestBookPage />} />
      </Routes>
    </>
  );
}

export default App;
