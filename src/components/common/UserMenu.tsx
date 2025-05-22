import React, { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useAuth } from '../../context/AuthContext';
import { LogOut, User, UserX, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserMenu: React.FC = () => {
  const { currentUser, logout, deleteAccount } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await logout();
      navigate('/');
      toast.success('تم تسجيل الخروج بنجاح');
    } catch (error) {
      toast.error('حدث خطأ أثناء تسجيل الخروج');
    } finally {
      setIsLoading(false);
    }
  };

  if (!currentUser) {
    return (
      <div className="flex items-center gap-2">
        <Link
          to="/login"
          className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          تسجيل الدخول
        </Link>
        <Link
          to="/signup"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          التسجيل
        </Link>
      </div>
    );
  }

  return (
    <Menu as="div" className="relative inline-block text-right">
      <div>
        <Menu.Button className="flex items-center" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
          ) : currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="صورة المستخدم"
              className="h-8 w-8 rounded-full object-cover hover:ring-2 hover:ring-indigo-500 transition-all"
            />
          ) : (
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white hover:ring-2 hover:ring-indigo-500 transition-all">
              {currentUser.displayName?.[0]?.toUpperCase() || currentUser.email?.[0].toUpperCase() || 'U'}
            </div>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-64 sm:w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
              <p className="font-medium text-right">
                {currentUser.displayName || 'مستخدم'}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 text-right" dir="ltr">
                {currentUser.email}
              </p>
            </div>

            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={`${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex items-center justify-end px-4 py-2 text-sm text-gray-700 dark:text-gray-300 w-full`}
                >
                  <span>الملف الشخصي</span>
                  <User className="ml-3 h-5 w-5" />
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  disabled={isLoading}
                  className={`${
                    active ? 'bg-gray-100 dark:bg-gray-700' : ''
                  } flex items-center justify-end px-4 py-2 text-sm text-gray-700 dark:text-gray-300 w-full`}
                >
                  <span>تسجيل الخروج</span>
                  <LogOut className="ml-3 h-5 w-5" />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
