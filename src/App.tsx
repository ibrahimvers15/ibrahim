
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import { PERSONAL_INFO, SOCIAL_LINKS } from './constants';

// Header Component
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = 'text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium';
  const activeLinkClasses = 'bg-gray-900 text-white';

  return (
    <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white font-bold text-xl">
              {PERSONAL_INFO.name}
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} end>Home</NavLink>
              <NavLink to="/portfolio" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Portfolio</NavLink>
              <NavLink to="/profile" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Profile</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contact</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsOpen(false)} end>Home</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsOpen(false)}>Portfolio</NavLink>
            <NavLink to="/profile" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsOpen(false)}>Profile</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `block ${navLinkClasses} ${isActive ? activeLinkClasses : ''}`} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};


// Footer Component
const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white mt-auto">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      <div className="text-center md:text-left">
        <p className="font-bold text-lg">{PERSONAL_INFO.name}</p>
        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-indigo-400 transition-colors">
          {PERSONAL_INFO.email}
        </a>
      </div>
      <div className="flex space-x-6">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">{link.name}</span>
            {link.icon}
          </a>
        ))}
      </div>
      <div className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
      </div>
    </div>
  </footer>
);


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
