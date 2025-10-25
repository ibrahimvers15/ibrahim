
import type React from 'react';

export enum PortfolioCategory {
  LOGO = 'Logo Design',
  VIDEO = 'Video Editing',
  GAME = 'Gaming Apps',
  GRAPHIC = 'Graphic Design',
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  imageUrl: string;
  videoUrl?: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement;
}
