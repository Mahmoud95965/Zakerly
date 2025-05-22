import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { useAuth } from '../../context/AuthContext';

interface PageLayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

// Loading component for content
const ContentLoader = () => (
  <div className="flex-grow flex items-center justify-center">
    <div className="space-y-4">
      <div className="animate-pulse flex space-x-4 rtl:space-x-reverse">
        <div className="rounded-full bg-gray-200 dark:bg-gray-700 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  showNavbar = true,
  showFooter = true,
}) => {
  const { loading: authLoading } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {showNavbar && <Navbar />}
      
      <AnimatePresence mode="wait">
        <motion.main
          className="flex-grow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Suspense fallback={<ContentLoader />}>
            {authLoading ? <ContentLoader /> : children}
          </Suspense>
        </motion.main>
      </AnimatePresence>

      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;