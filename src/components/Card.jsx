import React, { useState } from 'react';
import { Heart, Star, MapPin, User } from 'lucide-react';

const Card = ({ title, location, price, rating, host, image, isExperience = false }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDIyNVYxNzVIMTc1VjEyNVoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTE5NSAxNDVIMjA1VjE1NUgxOTVWMTQ1WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K'}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 bg-gray-200"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDIyNVYxNzVIMTc1VjEyNVoiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTE5NSAxNDVIMjA1VjE1NUgxOTVWMTQ1WiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
          }}
        />
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:scale-110 transition-all duration-200 hover:bg-white"
        >
          <Heart 
            className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="mt-3 space-y-2">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight pr-2">{title}</h3>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Star className="w-4 h-4 text-black fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <User className="w-4 h-4 mr-1" />
          <span>Hosted by {host}</span>
        </div>
        <div className="mt-3">
          <span className="font-semibold text-gray-900 text-lg">${price}</span>
          <span className="text-gray-500 text-sm ml-1">
            {isExperience ? ' per person' : ' night'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
