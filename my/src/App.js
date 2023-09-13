import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import Home from './Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactForm />} />
        <Route path="/home" element={<Home />} />
      
      </Routes>
    </Router>
  );
}

export default App;
