import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp'; // Import SignUp component
import MentalHealthSurvey from './components/Common/MentalHealthSurvey'; // Import MentalHealthSurvey component
import Navbar from './components/Common/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add sign-up route */}
        <Route path="/survey" element={<MentalHealthSurvey />} /> {/* Add survey route */}
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
