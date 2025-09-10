import React from 'react';
import Card from '../components/Card';
import { Sparkles, MapPin, Clock, Users } from 'lucide-react';

const Listing = () => {
  // Experiences/Activities listings
  const experiences = [
    {
      id: 1,
      title: 'Cooking Class with Local Chef',
      location: 'Tokyo, Japan',
      price: 85,
      rating: 4.9,
      host: 'Chef Tanaka',
      image: '/images/cooking-class.jpg',
      duration: '3 hours',
      groupSize: 'Up to 8 people'
    },
    {
      id: 2,
      title: 'Street Art Walking Tour',
      location: 'Berlin, Germany',
      price: 45,
      rating: 4.8,
      host: 'Klaus',
      image: '/images/street-art-tour.jpg',
      duration: '2 hours',
      groupSize: 'Up to 12 people'
    },
    {
      id: 3,
      title: 'Sunset Yoga Session',
      location: 'Bali, Indonesia',
      price: 35,
      rating: 4.9,
      host: 'Wayan',
      image: '/images/yoga-session.jpg',
      duration: '1.5 hours',
      groupSize: 'Up to 15 people'
    },
    {
      id: 4,
      title: 'Wine Tasting Experience',
      location: 'Tuscany, Italy',
      price: 120,
      rating: 4.7,
      host: 'Giuseppe',
      image: '/images/wine-tasting.jpg',
      duration: '4 hours',
      groupSize: 'Up to 6 people'
    },
    {
      id: 5,
      title: 'Photography Workshop',
      location: 'Paris, France',
      price: 95,
      rating: 4.8,
      host: 'Pierre',
      image: '/images/photography-workshop.jpg',
      duration: '3 hours',
      groupSize: 'Up to 10 people'
    },
    {
      id: 6,
      title: 'Surfing Lessons',
      location: 'Bondi Beach, Australia',
      price: 75,
      rating: 4.9,
      host: 'Jake',
      image: '/images/surfing-lessons.jpg',
      duration: '2 hours',
      groupSize: 'Up to 6 people'
    },
    {
      id: 7,
      title: 'Traditional Dance Show',
      location: 'Kyoto, Japan',
      price: 60,
      rating: 4.6,
      host: 'Yuki',
      image: '/images/dance-show.jpg',
      duration: '1 hour',
      groupSize: 'Up to 20 people'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unique experiences
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing activities led by local hosts around the world
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Sparkles className="w-8 h-8 text-purple-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">{experiences.length}</div>
              <div className="text-gray-600">Unique experiences</div>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">7</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-green-500 mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-gray-600">Average rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">All experiences</h2>
          <p className="text-gray-600">
            {experiences.length} unique activities available
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              title={experience.title}
              location={experience.location}
              price={experience.price}
              rating={experience.rating}
              host={experience.host}
              image={experience.image}
              isExperience={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;