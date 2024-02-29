import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Buttons from './components/Buttons';
import Forms from './components/Forms';
import List from './components/List';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './app.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/list" element={<List />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;