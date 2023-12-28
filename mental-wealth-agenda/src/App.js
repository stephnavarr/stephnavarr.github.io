import React from 'react';
import {
  Routes,
  Route,
  Link as ReactRouterLink,
} from 'react-router-dom';
import HomePage from './HomePage'; // Import the HomePage component
import './App.css';
import Episodes from './Episodes';
import BlogPage from './BlogPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
