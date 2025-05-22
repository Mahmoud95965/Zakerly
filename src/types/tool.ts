export type ToolStatus = 'pending' | 'approved' | 'rejected';
export type ToolCategory = 'Writing' | 'Research' | 'Math' | 'Science' | 'Language Learning' | 'Productivity' | 'Studying' | 'Test Prep' | 'Teaching' | 'Other';
export type ToolPricing = 'Free' | 'Freemium' | 'Paid' | 'Subscription';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  tags: string[];
  url: string;
  imageUrl?: string;
  pricing: ToolPricing;
  features: string[];
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  status: ToolStatus;
  submittedBy: string;
  submittedAt: Date;
  rejectionReason?: string;
  longDescription?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface FilterOptions {
  category: ToolCategory | 'All';
  pricing: ToolPricing | 'All';
  searchQuery: string;
  status?: ToolStatus;
}