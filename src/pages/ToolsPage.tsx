import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ToolsGrid from '../components/tools/ToolsGrid';
import ToolFilters from '../components/tools/ToolFilters';
import { tools } from '../data/toolsData';
import { FilterOptions, Tool } from '../types';
import { filterTools } from '../utils/filterTools';

const ToolsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [filters, setFilters] = useState<FilterOptions>({
    category: categoryParam as any || 'All',
    pricing: 'All',
    searchQuery: ''
  });
  
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  useEffect(() => {
    setFilteredTools(filterTools(tools, filters));
  }, [filters]);
  
  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">جميع أدوات التعليم بالذكاء الاصطناعي</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            استكشف وفرز وابحث عن أدوات التعليم المناسبة لاحتياجاتك
          </p>
        </div>
        
        <ToolFilters 
          filters={filters} 
          setFilters={setFilters} 
          showMobileFilters={showMobileFilters} 
          setShowMobileFilters={setShowMobileFilters}
        />
        
        <ToolsGrid tools={filteredTools} />
      </div>
    </PageLayout>
  );
};

export default ToolsPage;