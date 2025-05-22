import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import PageLayout from '../components/layout/PageLayout';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Upload, Check, AlertTriangle } from 'lucide-react';

const UserProfilePage: React.FC = () => {
  const { currentUser, updateUserProfile, verifyEmail } = useAuth();
  const { t } = useTranslation();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | undefined>(currentUser?.photoURL || undefined);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    setLoading(true);
    try {      let photoURL: string | undefined = currentUser.photoURL || undefined;
      
      if (selectedImage) {
        // Here you would typically upload the image to Firebase Storage
        // For now, we'll just use a placeholder URL
        photoURL = previewURL;
      }

      await updateUserProfile({
        displayName: displayName || undefined,
        photoURL,
      });

      toast.success(t('auth.profile.successUpdate'));
    } catch (error) {
      console.error(error);
      toast.error(t('auth.profile.failureUpdate'));
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyEmail = async () => {
    try {
      await verifyEmail();
      toast.success(t('auth.profile.verificationSent'));
    } catch (error) {
      console.error(error);
      toast.error(t('auth.profile.verificationError'));
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  {t('auth.profile.title')}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="relative group">
                      <div className="relative w-32 h-32 rounded-full overflow-hidden group-hover:opacity-75 transition-opacity">
                        {previewURL ? (
                          <img
                            src={previewURL}
                            alt={t('auth.profile.title')}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <span className="text-4xl text-gray-500 dark:text-gray-400">
                              {displayName?.[0]?.toUpperCase() || currentUser?.email?.[0].toUpperCase() || 'U'}
                            </span>
                          </div>
                        )}
                      </div>
                      <label
                        htmlFor="photo-upload"
                        className="absolute inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity rounded-full"
                      >
                        <Upload className="h-8 w-8 text-white" />
                      </label>
                      <input
                        type="file"
                        id="photo-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageSelect}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t('auth.profile.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      {t('auth.profile.email')}
                    </label>
                    <div className="mt-1 flex items-center space-x-3">
                      <span className="block w-full text-gray-500 dark:text-gray-400 sm:text-sm border border-gray-300 dark:border-gray-600 rounded-md shadow-sm py-2 px-3 bg-gray-50 dark:bg-gray-700">
                        {currentUser?.email}
                      </span>
                      {currentUser?.emailVerified ? (
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          <Check className="h-4 w-4 mr-1" />
                          {t('auth.profile.verified')}
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={handleVerifyEmail}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
                        >
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          {t('auth.profile.verifyEmail')}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {loading ? t('auth.profile.saving') : t('auth.profile.saveChanges')}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UserProfilePage;
