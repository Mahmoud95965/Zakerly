import React from 'react';
import { useTranslation } from 'react-i18next';
import PageLayout from '../components/layout/PageLayout';
import { 
  BookOpen, 
  Search, 
  Users, 
  Sparkles, 
  CheckCircle, 
  Star,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';

interface ValueItem {
  title: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const valueIcons = [
    { icon: <Star className="h-6 w-6 text-indigo-600" />, color: 'bg-indigo-100' },
    { icon: <Zap className="h-6 w-6 text-purple-600" />, color: 'bg-purple-100' },
    { icon: <Shield className="h-6 w-6 text-teal-600" />, color: 'bg-teal-100' },
    { icon: <TrendingUp className="h-6 w-6 text-amber-600" />, color: 'bg-amber-100' }
  ];

  const values = t('about.values.items', { returnObjects: true }) as ValueItem[];

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-indigo-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.mission.title')}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl text-right">
            {t('about.mission.description')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mr-4 text-xl font-semibold text-gray-900">
                  {t('about.mission.forStudents.title')}
                </h3>
              </div>
              <p className="text-gray-600 text-right">
                {t('about.mission.forStudents.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="mr-4 text-xl font-semibold text-gray-900">
                  {t('about.mission.forEducators.title')}
                </h3>
              </div>
              <p className="text-gray-600 text-right">
                {t('about.mission.forEducators.description')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.offerings.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Search className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {t('about.offerings.curation.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('about.offerings.curation.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-indigo-100 p-4 rounded-full">
                  <Sparkles className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {t('about.offerings.information.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('about.offerings.information.description')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-teal-100 p-4 rounded-full">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {t('about.offerings.community.title')}
              </h3>
              <p className="text-gray-600 text-center">
                {t('about.offerings.community.description')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('about.values.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value: ValueItem, index: number) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${valueIcons[index].color}`}>
                      {valueIcons[index].icon}
                    </div>
                    <h3 className="mr-4 text-xl font-semibold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-right leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;