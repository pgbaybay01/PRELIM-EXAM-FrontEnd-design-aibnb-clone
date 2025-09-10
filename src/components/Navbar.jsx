import React, { useMemo, useRef, useState } from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';

const Navbar = ({ currentPage, onPageChange, suggestions = [], onLoginClick }) => {
  const [query, setQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return suggestions.slice(0, 6);
    return suggestions.filter((t) => t.toLowerCase().includes(q)).slice(0, 6);
  }, [query, suggestions]);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              className="text-2xl font-bold text-red-500 cursor-pointer hover:text-red-600 transition-colors"
              onClick={() => onPageChange('home')}
            >
              airbnb
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => onPageChange('home')}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                currentPage === 'home'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              Stays
            </button>
            <button
              onClick={() => onPageChange('listing')}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                currentPage === 'listing'
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              Experiences
            </button>
            <button
              className="px-3 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-200"
            >
              Services
            </button>
          </div>

          {/* User Menu */}
          <div className="relative flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-black transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
            </button>
            <div
              className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 cursor-pointer hover:shadow-md transition-all duration-200"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Menu className="w-4 h-4" />
              <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm">
                <User className="w-3 h-3" />
              </div>
            </div>
            {showMenu && (
              <div className="absolute right-0 top-12 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2">
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50" onClick={() => setShowMenu(false)}>Help Center</button>
                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50" onClick={() => { setShowMenu(false); onLoginClick && onLoginClick(); }}>Login</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar: Where only with suggestions */}
      {currentPage === 'home' && (
        <div className="py-4 px-6 bg-gray-50">
          <div className="relative bg-white border border-gray-300 rounded-full shadow-lg flex items-center max-w-md mx-auto hover:shadow-xl transition-shadow duration-200">
            <div className="flex-1 px-4 py-2">
              <div className="text-xs font-semibold text-black mb-1">Where</div>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search places to stay"
                className="text-sm text-gray-600 placeholder-gray-400 bg-transparent border-none outline-none w-full"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
              />
            </div>
            <button className="bg-red-500 text-white p-2 rounded-full mr-2 hover:bg-red-600 transition-colors flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>

            {showSuggestions && filtered.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {filtered.map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setQuery(item);
                      setShowSuggestions(false);
                      inputRef.current && inputRef.current.blur();
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;