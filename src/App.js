import React from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar title="TextUtils" />
      <Routes>
        <Route exact path="/" element={<Textform title="Enter Text to Analyze..." />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}
