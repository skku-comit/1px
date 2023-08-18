import "./App.css";
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
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

import { Routes, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`${reset}
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
    display: block;
    }
    body {
    line-height: 1;
    }
    ol, ul {
    list-style: none;
    }
    blockquote, q {
    quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
    content: '';
    content: none;
    }
    table {
    border-collapse: collapse;
    border-spacing: 0;
    }`;
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
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
