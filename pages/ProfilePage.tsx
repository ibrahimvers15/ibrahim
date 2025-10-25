
import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const ProfilePage: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-gray-900 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-center">
          <div className="lg:col-span-1 text-center lg:text-left mb-8 lg:mb-0">
            <img
              className="h-48 w-48 rounded-full mx-auto lg:mx-0 object-cover shadow-2xl ring-4 ring-indigo-500"
              src="https://picsum.photos/seed/profilepic/200/200"
              alt="Profile of Muhammad Ibrahim"
            />
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="mt-2 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              {PERSONAL_INFO.title}
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              {PERSONAL_INFO.bio}
            </p>
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-400 transition-transform duration-300 transform hover:scale-110"
                >
                  <span className="sr-only">{link.name}</span>
                  {React.cloneElement(link.icon, { className: 'h-8 w-8' })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
