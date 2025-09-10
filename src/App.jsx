import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Listing from './pages/Listing';
import { listingTitles } from './data/listings';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home isLoginOpen={isLoginOpen} onCloseLogin={() => setIsLoginOpen(false)} />;
      case 'listing':
        return <Listing />;
      default:
        return <Home isLoginOpen={isLoginOpen} onCloseLogin={() => setIsLoginOpen(false)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        suggestions={listingTitles}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;