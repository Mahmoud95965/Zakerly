import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTools } from '../context/ToolsContext';
import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/home/Hero';
import FeaturedTools from '../components/home/FeaturedTools';
import CategorySection from '../components/home/CategorySection';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { initialized } = useTools();

  if (!initialized) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Hero />
      
      <FeaturedTools 
        title={t('common.featured')}
        subtitle={t('home.featuredToolsSubtitle')}
        toolType="featured"
        viewAllLink="/tools"
      />
      
      <CategorySection />
      
      <div className="bg-gray-50 dark:bg-gray-900 transition-colors">
        <FeaturedTools 
          title={t('common.popular')}
          subtitle={t('home.popularToolsSubtitle')}
          toolType="popular"
          viewAllLink="/tools?sort=popular"
          className="bg-transparent"
        />
      </div>
      
      <FeaturedTools 
        title={t('common.new')}
        subtitle={t('home.newToolsSubtitle')}
        toolType="new"
        viewAllLink="/tools?sort=new"
      />
      
      <Testimonials />
      
      <CallToAction />
    </PageLayout>
  );
};

export default HomePage;