// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoaded, setIsLoaded] = useState(false); // State to track loading

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      {/* Show Loading Screen until the app is loaded */}
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <Header />
          <Dashboard />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

