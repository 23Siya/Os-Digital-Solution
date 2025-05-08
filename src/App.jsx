// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
