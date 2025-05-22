import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github 
} from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link to="/" className="inline-flex items-center group relative">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-600 dark:to-indigo-700 rounded-xl shadow-lg">
                <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-white transform group-hover:scale-110 transition-all duration-200" />
              </div>
              <span className="mx-3 text-lg sm:text-xl font-bold text-white dark:text-white group-hover:text-indigo-300 transition-colors duration-200">زاكرلي</span>
            </Link>
            <div className="space-y-4">
              <p className="text-gray-300 dark:text-gray-400 text-base leading-6">
                {t('footer.about')}
              </p>
              <div className="flex items-start space-x-6 space-x-reverse">
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                  <Twitter className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                  <Instagram className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                  <Linkedin className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                  <Github className="h-5 w-5 hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 dark:text-gray-100 tracking-wider uppercase">
                  {t('footer.navigation')}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300">
                      {t('nav.home')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tools" className="text-base text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300">
                      {t('nav.tools')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-base text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300">
                      {t('nav.about')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/submit-tool" className="text-base text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300">
                      {t('nav.submitTool')}
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  {t('common.categories')}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/tools?category=Writing" className="text-base text-gray-400 hover:text-white">
                      {t('categories.Writing')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tools?category=Math" className="text-base text-gray-400 hover:text-white">
                      {t('categories.Math')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tools?category=Science" className="text-base text-gray-400 hover:text-white">
                      {t('categories.Science')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/tools?category=Teaching" className="text-base text-gray-400 hover:text-white">
                      {t('categories.Teaching')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  {t('footer.support')}
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/faq" className="text-base text-gray-400 hover:text-white">
                      الأسئلة الشائعة
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-base text-gray-400 hover:text-white">
                      تواصل معنا
                    </a>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="text-base text-gray-400 hover:text-white">
                      سياسة الخصوصية
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-base text-gray-400 hover:text-white">
                      شروط الاستخدام
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
                  {t('footer.subscribe.title')}
                </h3>
                <p className="mt-4 text-base text-gray-400">
                  {t('footer.subscribe.description')}
                </p>
                <form className="mt-6 w-full">
                  <input
                    type="email"
                    placeholder={t('footer.subscribe.placeholder')}
                    className="appearance-none w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-300 text-right hover:border-gray-500 transition-colors"
                    dir="rtl"
                  />
                  <div className="mt-3 rounded-md sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 border border-transparent rounded-lg py-3 px-6 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                      {t('footer.subscribe.button')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;