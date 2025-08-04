import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import FormPage from './components/FormPage';
import ListPage from './components/ListPage';

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Form</Link> | <Link to="/list">List</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;