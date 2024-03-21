// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Login from './components/Pages/Login.jsx';
import Dashboard from './components/Pages/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        
        
      </Router>
    </>
  )
}
export default App;