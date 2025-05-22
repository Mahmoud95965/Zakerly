import React, { useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  BookOpen, 
  Search, 
  Menu as MenuIcon, 
  X,
  Moon,
  Sun,
  Loader2
} from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import UserMenu from './UserMenu';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { loading } = useAuth();
  const { t } = useTranslation();
  const location = useLocation();

  const isCurrentPage = (path: string) => location.pathname === path;

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.tools'), href: '/tools' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">Toolverse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:justify-center flex-1 mx-8">
            <div className="flex space-x-8 space-x-reverse">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`${
                    isCurrentPage(item.href)
                      ? 'text-indigo-600 dark:text-indigo-400 after:scale-x-100'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 after:scale-x-0'
                  } relative inline-flex items-center px-3 pt-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-full after:origin-right after:bg-indigo-600 dark:after:bg-indigo-400 after:transition-transform`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center gap-2">
            {/* Search button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              aria-label={t('common.search')}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              aria-label={t('common.toggleTheme')}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* User menu or auth buttons */}
            {loading ? (
              <div className="h-8 w-8 flex items-center justify-center">
                <Loader2 className="h-5 w-5 animate-spin text-indigo-600" />
              </div>
            ) : (
              <UserMenu />
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="sm:hidden p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
              aria-label={t('nav.menu')}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Dialog
        as="div"
        className="relative z-50 sm:hidden"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-y-0 left-0 right-0 overflow-y-auto">
          <Dialog.Panel className="w-full bg-white dark:bg-gray-800 p-6 min-h-screen">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                aria-label={t('common.close')}
              >
                <X className="h-6 w-6" />
              </button>
              <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                {t('nav.menu')}
              </Dialog.Title>
            </div>

            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${
                    isCurrentPage(item.href)
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  } flex items-center justify-end px-4 py-3 rounded-lg text-base font-medium transition-colors w-full`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Search dialog */}
      <Dialog
        as="div"
        className="relative z-50"
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="w-full pr-10 pl-4 py-2 text-right border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                placeholder={t('common.search')}
                dir="rtl"
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </nav>
  );
};

export default Navbar;
