
import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, PERSONAL_INFO } from '../constants';
import PortfolioItemCard from '../components/PortfolioItemCard';
import { PortfolioCategory } from '../types';

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory | 'All'>('All');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return PORTFOLIO_DATA;
    }
    return PORTFOLIO_DATA.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  const filters: (PortfolioCategory | 'All')[] = ['All', ...Object.values(PortfolioCategory)];

  const filterButtonClasses = "px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400";
  const activeFilterClasses = "bg-indigo-600 text-white";
  const inactiveFilterClasses = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  return (
    <div className="py-16 sm:py-24 bg-gray-900 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            My Creative Portfolio
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            A collection of my projects in design, video, and development.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${filterButtonClasses} ${activeFilter === filter ? activeFilterClasses : inactiveFilterClasses}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <PortfolioItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
