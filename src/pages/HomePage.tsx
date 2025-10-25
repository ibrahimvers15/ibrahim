
import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, PORTFOLIO_DATA } from '../constants';
import PortfolioItemCard from '../components/PortfolioItemCard';

const HomePage: React.FC = () => {
  const featuredWork = PORTFOLIO_DATA.slice(0, 3);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
            {PERSONAL_INFO.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Crafting unique digital experiences from concept to reality.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/portfolio"
              className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-transform transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              A glimpse into my creative world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.map((item) => (
              <PortfolioItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
