import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DetailView from './components/DetailView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/details/:city" element={<DetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
