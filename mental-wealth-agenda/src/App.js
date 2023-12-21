import React from 'react';
import {
  Routes,
  Route,
  useNavigate,
  Link as ReactRouterLink,
} from 'react-router-dom';
import HomePage from './HomePage'; // Import the HomePage component
import './App.css';
import Episodes from './Episodes';
import BlogPage from './BlogPage';

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
