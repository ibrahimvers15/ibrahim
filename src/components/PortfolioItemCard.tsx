
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { PortfolioItem } from '../types';
import { PortfolioCategory } from '../types';

interface PortfolioItemCardProps {
  item: PortfolioItem;
}

const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({ item }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = () => {
    navigate(`/contact?item=${encodeURIComponent(item.title)}`);
  };

  const handleViewClick = () => {
    if (item.category === PortfolioCategory.VIDEO && item.videoUrl) {
      setIsModalOpen(true);
    } else {
      // For non-video items, maybe open a larger image view in the future
      console.log("Viewing details for:", item.title);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const categoryColorMap: Record<PortfolioCategory, string> = {
    [PortfolioCategory.LOGO]: 'bg-blue-500/20 text-blue-300',
    [PortfolioCategory.VIDEO]: 'bg-red-500/20 text-red-300',
    [PortfolioCategory.GAME]: 'bg-purple-500/20 text-purple-300',
    [PortfolioCategory.GRAPHIC]: 'bg-green-500/20 text-green-300',
  };

  return (
    <>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 group flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-0 right-0 m-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${categoryColorMap[item.category]}`}>
              {item.category}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm flex-grow mb-4">{item.description}</p>
          <div className="mt-auto flex gap-3">
            {item.category === PortfolioCategory.VIDEO && (
              <button
                onClick={handleViewClick}
                className="flex-1 bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                View Video
              </button>
            )}
            <button
              onClick={handleBuyClick}
              className="flex-1 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Buy This
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && item.videoUrl && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 rounded-lg overflow-hidden relative w-full max-w-4xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={item.videoUrl}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItemCard;
