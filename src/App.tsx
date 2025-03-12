import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { op } from './config/openpanel';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    op.identify({
      app: 'openpanel-test',
      startedAt: new Date().toISOString(),
      profileId: "101010",
      firstName: "Weisberg",
      lastName: "Fontes",
      email: "weisbergbsf@gmail.com"
    });
    op.setGlobalProperties({
      app_version: '1.0.2',
      environment: process.env.NODE_ENV,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;