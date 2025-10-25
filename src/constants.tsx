
import React from 'react';
import { PortfolioItem, PortfolioCategory, SocialLink } from './types';

// SVG Icon Components
export const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const BehanceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.2,6.2H14.1V4.8h8.1V6.2z M17.4,14.6c-0.8,0-1.4-0.2-1.9-0.5s-0.7-0.8-0.7-1.4c0-0.7,0.3-1.2,0.8-1.6 c0.5-0.4,1.3-0.6,2.2-0.6h2.9v4.1H17.4z M17.2,10.1c-1.3,0-2.3,0.5-2.3,1.6c0,0.6,0.3,1.1,0.8,1.4c0.5,0.3,1.1,0.5,1.7,0.5h2.2v-4.6 h-2.5C17.2,9.1,17.2,10.1,17.2,10.1z M20.5,8.8H17c-1.7,0-3.1,0.5-3.1,2c0,0.9,0.7,1.6,1.2,1.9c0.6,0.3,1.2,0.5,1.9,0.5h2.2 c0,1.3-0.8,1.9-2.3,1.9c-1.2,0-2.1-0.5-2.6-1.4h-2.1c0.5,1.9,2.2,3,4.8,3c2.7,0,4.6-1.5,4.6-4.5c0-1.2-0.4-2.2-1.1-2.9 C22,9.3,21.3,8.8,20.5,8.8z M8.8,12.8H4.6v3.9H8.8c1.8,0,2.8-1,2.8-2C11.6,13.8,10.6,12.8,8.8,12.8z M8.9,7.6H4.6v3.9h4.2 c1.6,0,2.5-0.9,2.5-1.9C11.4,8.5,10.5,7.6,8.9,7.6z M1.8,19.2h9.9c2.9,0,4.8-1.8,4.8-4.7c0-2.8-1.9-4.7-4.8-4.7H1.8V19.2z"/>
    </svg>
);

export const DribbbleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2M20,12a8.3,8.3,0,0,1-2,5.3,8.1,8.1,0,0,1-3.2.4,10.1,10.1,0,0,1-3.2-.5A11.1,11.1,0,0,1,8.3,16a3.6,3.6,0,0,1-1.3-.7,4.8,4.8,0,0,1-1.3-2,10.3,10.3,0,0,1-.1-2.4c0-1.1.2-2.1.5-3.1a6.6,6.6,0,0,1,1.8-2.5,6,6,0,0,1,2.9-1.5,8.5,8.5,0,0,1,3.8-.1,6.8,6.8,0,0,1,2.6,1,7.2,7.2,0,0,1,1.9,2.1,8.2,8.2,0,0,1,.8,3.1A7.6,7.6,0,0,1,20,12M17.3,6.4a5.1,5.1,0,0,0-2-1.4,6.7,6.7,0,0,0-3.1,0,4.6,4.6,0,0,0-2.2,1.2,5.1,5.1,0,0,0-1.3,2.1,9,9,0,0,0,0,2.7c0,1,.2,1.8.5,2.5s.8,1.3,1.4,1.8a4.4,4.4,0,0,0,2,1.1,6.4,6.4,0,0,0,2.7.1,8.2,8.2,0,0,0,2.8-.7,9.6,9.6,0,0,0,2.3-1.8,11.3,11.3,0,0,0,1.5-2.4,1,1,0,0,0-1.7-.8,9,9,0,0,1-2.9,3.2,7.4,7.4,0,0,1-3.2.5,5,5,0,0,1-2.2-.4,3,3,0,0,1-1.4-1.2,4,4,0,0,1-.7-2,8,8,0,0,1,.1-2.3,6,6,0,0,1,2-3.6,5.3,5.3,0,0,1,3.3-1.3,5.9,5.9,0,0,1,2.4.4,4.2,4.2,0,0,1,1.6,1.3,1,1,0,0,0,1.5-.6A1,1,0,0,0,17.3,6.4Z"/>
    </svg>
);

export const YoutubeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);


// Personal Info
export const PERSONAL_INFO = {
  name: 'Muhammad Ibrahim',
  title: 'Digital Creator: Logos, Videos & Games',
  email: 'ibrahimvers15@gmail.com',
  bio: "I'm a passionate and versatile digital artist with a strong focus on creating compelling brand identities, engaging video content, and immersive gaming experiences. With a keen eye for detail and a love for storytelling, I bring ideas to life through design and technology. Whether it's a sleek logo, a dynamic video edit, or an interactive game, my goal is to deliver high-quality work that resonates with audiences and achieves business objectives. Let's collaborate and build something amazing together.",
};

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'YouTube', url: 'https://youtube.com', icon: <YoutubeIcon /> },
  { name: 'Behance', url: 'https://behance.net', icon: <BehanceIcon /> },
  { name: 'Dribbble', url: 'https://dribbble.com', icon: <DribbbleIcon /> },
];

// Portfolio Data
export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: 'Quantum Leap Logo',
    category: PortfolioCategory.LOGO,
    imageUrl: 'https://picsum.photos/seed/quantum/600/400',
    description: 'A modern and dynamic logo for a tech startup specializing in AI.',
  },
  {
    id: 2,
    title: 'Corporate Brand Video',
    category: PortfolioCategory.VIDEO,
    imageUrl: 'https://picsum.photos/seed/corpvideo/600/400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'A promotional video showcasing the values and vision of a leading tech company.',
  },
  {
    id: 3,
    title: 'Project Nebula Game',
    category: PortfolioCategory.GAME,
    imageUrl: 'https://picsum.photos/seed/nebula/600/400',
    description: 'Concept art and UI design for an upcoming indie space exploration game.',
  },
  {
    id: 4,
    title: 'Eco Foods Branding',
    category: PortfolioCategory.GRAPHIC,
    imageUrl: 'https://picsum.photos/seed/ecofoods/600/400',
    description: 'A complete branding package for an organic food company, including logo, packaging, and marketing materials.',
  },
  {
    id: 5,
    title: 'Synthwave Beats Visualizer',
    category: PortfolioCategory.VIDEO,
    imageUrl: 'https://picsum.photos/seed/synthwave/600/400',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'A mesmerizing music visualizer for a synthwave music channel on YouTube.',
  },
  {
    id: 6,
    title: 'Phoenix Gaming Mascot',
    category: PortfolioCategory.LOGO,
    imageUrl: 'https://picsum.photos/seed/phoenix/600/400',
    description: 'An fierce and energetic mascot logo for an e-sports team.',
  },
    {
    id: 7,
    title: 'Cyberpunk City Runner',
    category: PortfolioCategory.GAME,
    imageUrl: 'https://picsum.photos/seed/cyberpunk/600/400',
    description: 'Gameplay screenshots and promotional art for a fast-paced mobile runner game.',
  },
  {
    id: 8,
    title: 'Minimalist Coffee Shop Logo',
    category: PortfolioCategory.LOGO,
    imageUrl: 'https://picsum.photos/seed/coffee/600/400',
    description: 'A clean and elegant logo for a modern, minimalist coffee shop.',
  },
  {
    id: 9,
    title: 'Phoenix Gaming Mascot',
    category: PortfolioCategory.LOGO,
    imageUrl: 'images/U(1).png',
    description: 'A warm to cold logo reflecting high enery for my gaminig chanel.',
  },
];
