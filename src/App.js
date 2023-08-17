import './App.css';

import TopHeaderBar from './components/layout/TopHeaderBar';

// pages
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import GuestBookPage from './pages/GuestbookPage';
import {
  IframePage1,
  IframePage2,
  IframePage3,
  IframePage4,
  IframePage5,
  IframePage6,
  IframePage7,
} from './pages/IframePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopHeaderBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/guest-book" element={<GuestBookPage />} />
        <Route path="/iframe1" element={<IframePage1 />} />
        <Route path="/iframe2" element={<IframePage2 />} />
        <Route path="/iframe3" element={<IframePage3 />} />
        <Route path="/iframe4" element={<IframePage4 />} />
        <Route path="/iframe5" element={<IframePage5 />} />
        <Route path="/iframe6" element={<IframePage6 />} />
        <Route path="/iframe7" element={<IframePage7 />} />
      </Routes>
    </div>
  );
}

export default App;
