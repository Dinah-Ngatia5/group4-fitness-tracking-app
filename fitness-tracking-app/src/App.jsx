// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Login from './components/Pages/Login.jsx';
import Dashboard from './components/Pages/Dashboard';
import Register from './components/Pages/Register.jsx';
import ProtectedRoute from './components/Routes/ProtectedRoute.jsx';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute Component={Dashboard} />} />
        </Routes>
        
        
      </Router>
    </>
  )
}
export default App;