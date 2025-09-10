import React, { useState } from 'react';
import Card from '../components/Card';
import { Home as HomeIcon, Building, Trees, Mountain, Waves, Camera, Sparkles } from 'lucide-react';
 
const LoginModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative mx-4 w-full max-w-md rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)', border: '1px solid rgba(255,255,255,0.18)' }}>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Login</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-400" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-red-400" placeholder="••••••••" />
          </div>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 font-medium">Sign in</button>
          <button onClick={onClose} className="w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-2 font-medium hover:bg-gray-50">Cancel</button>
        </div>
      </div>
    </div>
  );
};

const Home = ({ isLoginOpen = false, onCloseLogin = () => {} }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Categories - 4+ required
  const categories = [
    { id: 1, name: 'Beachfront', icon: Waves },
    { id: 2, name: 'Cabins', icon: HomeIcon },
    { id: 3, name: 'Trending', icon: Camera },
    { id: 4, name: 'Countryside', icon: Trees },
    { id: 5, name: 'Amazing pools', icon: Waves },
    { id: 6, name: 'Luxe', icon: Building }
  ];

  // Listings - 7+ required
  const listings = [
    {
      id: 1,
      title: 'Beachfront Villa in Malibu',
      location: 'Malibu, California',
      price: 450,
      rating: 4.9,
      host: 'Sarah',
      category: 'Beachfront',
      image: '/public/images/malibu beach.jpeg'
    },
    {
      id: 2,
      title: 'Cozy Mountain Cabin',
      location: 'Aspen, Colorado',
      price: 280,
      rating: 4.8,
      host: 'Mike',
      category: 'Cabins',
      image: '/public/images/mountain-cabin.jpg'
    },
    {
      id: 3,
      title: 'Modern Loft Downtown',
      location: 'New York, NY',
      price: 320,
      rating: 4.7,
      host: 'Emma',
      category: 'Trending',
      image: '/public/images/modern-loft.jpeg'
    },
    {
      id: 4,
      title: 'Rustic Farmhouse',
      location: 'Tuscany, Italy',
      price: 195,
      rating: 4.9,
      host: 'Marco',
      category: 'Countryside',
      image: '/public/images/farmhouse.jpg'
    },
    {
      id: 5,
      title: 'Infinity Pool Villa',
      location: 'Bali, Indonesia',
      price: 380,
      rating: 4.8,
      host: 'Kadek',
      category: 'Amazing pools',
      image: '/public/images/pool-villa.jpg'
    },
    {
      id: 6,
      title: 'Penthouse Suite',
      location: 'Dubai, UAE',
      price: 750,
      rating: 4.9,
      host: 'Ahmed',
      category: 'Luxe',
      image: '/public/images/penthouse.jpg'
    },
    {
      id: 7,
      title: 'Beach House Paradise',
      location: 'Santorini, Greece',
      price: 520,
      rating: 4.9,
      host: 'Nikos',
      category: 'Beachfront',
      image: '/public/images/beach-house.jpg'
    }
  ];

  const filteredListings = selectedCategory === 'all' 
    ? listings 
    : listings.filter(listing => listing.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <LoginModal open={isLoginOpen} onClose={onCloseLogin} />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find your next adventure
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover unique stays and experiences around the world
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto py-6 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex flex-col items-center space-y-2 min-w-20 pb-2 border-b-2 transition-all duration-200 ${
                selectedCategory === 'all'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
              }`}
            >
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs font-medium whitespace-nowrap">All</span>
            </button>
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex flex-col items-center space-y-2 min-w-20 pb-2 border-b-2 transition-all duration-200 ${
                    selectedCategory === category.name
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {selectedCategory === 'all' ? 'All stays' : selectedCategory}
          </h2>
          <p className="text-gray-600">
            {filteredListings.length} {filteredListings.length === 1 ? 'stay' : 'stays'} available
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredListings.map((listing) => (
            <Card
              key={listing.id}
              title={listing.title}
              location={listing.location}
              price={listing.price}
              rating={listing.rating}
              host={listing.host}
              image={listing.image}
            />
          ))}
        </div>
        
        {filteredListings.length === 0 && (
          <div className="text-center py-16">
            <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">No listings found for this category.</p>
            <p className="text-gray-400">Try selecting a different category or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;