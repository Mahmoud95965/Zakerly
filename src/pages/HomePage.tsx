import React from 'react';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/layout/PageLayout';
import Hero from '../components/home/Hero';
import FeaturedTools from '../components/home/FeaturedTools';
import CategorySection from '../components/home/CategorySection';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import { getFeaturedTools, getPopularTools, getNewTools } from '../data/toolsData';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const featuredTools = getFeaturedTools();
  const popularTools = getPopularTools().slice(0, 4);
  const newTools = getNewTools().slice(0, 4);

  return (
    <PageLayout>
      <Hero />
      
      <FeaturedTools 
        title={t('common.featured')}
        subtitle={t('home.featuredToolsSubtitle')}
        tools={featuredTools.slice(0, 4)}
        viewAllLink="/tools"
      />
      
      <CategorySection />
      
      <div className="bg-gray-50 dark:bg-gray-900 transition-colors">
        <FeaturedTools 
          title={t('common.popular')}
          subtitle={t('home.popularToolsSubtitle')}
          tools={popularTools}
          viewAllLink="/tools?sort=popular"
          className="bg-transparent"
        />
      </div>
      
      <FeaturedTools 
        title={t('common.new')}
        subtitle={t('home.newToolsSubtitle')}
        tools={newTools}
        viewAllLink="/tools?sort=new"
      />
      
      <Testimonials />
      
      <CallToAction />
    </PageLayout>
  );
};

export default HomePage;