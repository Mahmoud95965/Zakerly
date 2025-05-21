export interface Tool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: ToolCategory;
  tags: string[];
  url: string;
  imageUrl: string;
  pricing: ToolPricing;
  features: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
}

export type ToolCategory = 
  | 'Writing' 
  | 'Research' 
  | 'Math' 
  | 'Science' 
  | 'Language Learning' 
  | 'Productivity' 
  | 'Studying' 
  | 'Test Prep' 
  | 'Teaching' 
  | 'Other';

export type ToolPricing = 
  | 'Free' 
  | 'Freemium' 
  | 'Paid' 
  | 'Subscription';

export interface FilterOptions {
  category: ToolCategory | 'All';
  pricing: ToolPricing | 'All';
  searchQuery: string;
}