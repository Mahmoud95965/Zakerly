import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import ToolsGrid from '../components/tools/ToolsGrid';
import { getToolById, getRelatedTools } from '../data/toolsData';
import { Tool } from '../types';
import { Star, ExternalLink, Share2, BookmarkPlus, ThumbsUp, ThumbsDown } from 'lucide-react';

const ToolDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [tool, setTool] = useState<Tool | null>(null);
  const [relatedTools, setRelatedTools] = useState<Tool[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundTool = getToolById(id);
      if (foundTool) {
        setTool(foundTool);
        setRelatedTools(getRelatedTools(foundTool));
      }
    }
  }, [id]);
  
  if (!tool) {
    return (
      <PageLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">الأداة غير موجودة</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">الأداة التي تبحث عنها غير موجودة أو تم إزالتها.</p>
          <Link to="/tools" className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
            تصفح جميع الأدوات
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-5 w-5 ${
          i < Math.floor(rating) 
            ? 'text-amber-400 dark:text-amber-300 fill-amber-400 dark:fill-amber-300' 
            : 'text-gray-300 dark:text-gray-600'
        }`} 
      />
    ));
  };
  
  return (
    <PageLayout>
      <div className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="h-64 w-full md:w-96 md:h-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover dark:brightness-90"
                    src={tool.imageUrl}
                    alt={tool.name}
                  />
                </div>
              </div>
              
              <div className="p-8 text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-800 dark:text-indigo-200 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
                    {tool.category}
                  </span>
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    tool.pricing === 'Free' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' :
                    tool.pricing === 'Freemium' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                    tool.pricing === 'Paid' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200' :
                    'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200'
                  }`}>
                    {tool.pricing === 'Free' ? 'مجاني' :
                     tool.pricing === 'Freemium' ? 'مجاني مع مميزات مدفوعة' :
                     tool.pricing === 'Paid' ? 'مدفوع' :
                     'اشتراك'}
                  </span>
                  {tool.isNew && (
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-teal-800 dark:text-teal-200 bg-teal-100 dark:bg-teal-900/50 rounded-full">
                      جديد
                    </span>
                  )}
                </div>
                
                <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white text-right">{tool.name}</h1>
                
                <div className="mt-2 flex items-center justify-end">
                  <span className="mr-2 text-gray-600 dark:text-gray-400" dir="rtl">({tool.reviewCount} تقييم)</span>
                  <div className="flex">{renderStars(tool.rating)}</div>
                </div>
                
                <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg text-right leading-relaxed" dir="rtl">{tool.description}</p>
                
                <div className="mt-6 flex flex-wrap gap-2 justify-end">
                  {tool.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                      dir="rtl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                  >
                    <ExternalLink className="ml-2 h-4 w-4" />
                    زيارة الموقع
                  </a>
                  
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                    <Share2 className="ml-2 h-4 w-4" />
                    مشاركة
                  </button>
                  
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                    <BookmarkPlus className="ml-2 h-4 w-4" />
                    حفظ
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-700 px-8 py-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">عن {tool.name}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-right leading-relaxed">
                {tool.longDescription || tool.description}
              </p>
              
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">المميزات الرئيسية</h3>
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-500 dark:text-indigo-300 ml-2">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">هل كانت هذه الأداة مفيدة؟</h3>
                <div className="flex space-x-4 space-x-reverse">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-800">
                    <ThumbsUp className="ml-2 h-4 w-4" />
                    نعم، كانت مفيدة
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                    <ThumbsDown className="ml-2 h-4 w-4" />
                    لا، لم تكن مفيدة
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {relatedTools.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">قد يعجبك أيضاً</h2>
              <ToolsGrid tools={relatedTools} />
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ToolDetailPage;