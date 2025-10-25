
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PERSONAL_INFO, MailIcon } from '../constants';

const ContactPage: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const itemToBuy = params.get('item');
    if (itemToBuy) {
      setFormData(prev => ({
        ...prev,
        message: `Hello Ibrahim,\n\nI'm interested in purchasing your work: "${itemToBuy}".\n\nPlease let me know the next steps.\n\nBest regards,`,
      }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend service.
    // For this demo, we'll just show a success message.
    console.log('Form submitted:', formData);
    setStatus('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="py-16 sm:py-24 bg-gray-900 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
            Have a project in mind or want to buy some of my work? Let's talk.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-center text-green-400">{status}</p>}
        </div>

        <div className="text-center mt-12">
            <h3 className="text-lg font-semibold text-white">Or contact me directly:</h3>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="mt-2 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors">
                <MailIcon />
                <span>{PERSONAL_INFO.email}</span>
            </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
