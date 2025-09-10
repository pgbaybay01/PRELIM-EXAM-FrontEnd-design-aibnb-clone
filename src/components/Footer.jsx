import React from 'react';
import { Globe, DollarSign } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Support',
      links: ['Help Center', 'AirCover', 'Safety information', 'Supporting people with disabilities', 'Cancellation options', 'Our COVID-19 Response', 'Report a neighborhood concern']
    },
    {
      title: 'Community',
      links: ['Airbnb.org: disaster relief housing', 'Support Afghan refugees', 'Celebrating diversity & belonging', 'Combating discrimination']
    },
    {
      title: 'Hosting',
      links: ['Try hosting', 'AirCover for Hosts', 'Explore hosting resources', 'Visit our community forum', 'How to host responsibly']
    },
    {
      title: 'About',
      links: ['Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors', 'Gift cards']
    }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm leading-relaxed block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span>© 2024 Airbnb, Inc.</span>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Sitemap</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            </div>
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <Globe className="w-4 h-4" />
                <span>English (US)</span>
              </button>
              <div className="flex items-center space-x-1 text-gray-600">
                <DollarSign className="w-4 h-4" />
                <span>USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;