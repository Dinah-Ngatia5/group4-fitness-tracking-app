// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Pages/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Navbar from './components/Navbar.jsx';
import Login from './components/Pages/Auth/Login.jsx';
import Dashboard from './components/Pages/Dashboard';
import Register from './components/Pages/Auth/Register.jsx';
import NutritionTracking from './components/Pages/NutritionTracking.jsx';
import ProtectedRoute from './components/Routes/ProtectedRoute.jsx';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Headers />

        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/login" element={<Login />} />
          
          <Route path="/register" element={<Register />} />

          <Route path="/nutrition" element={<NutritionTracking />} />

          

          
          <Route path="/dashboard" element={<ProtectedRoute Component={Dashboard} />} />

        </Routes>
        
        <Footer />
      </Router>
    </>
  )
}
export default App;