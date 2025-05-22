import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

// Loading component
const LoadingPage = () => (
  <PageLayout>
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 mx-auto"></div>
      </div>
    </div>
  </PageLayout>
);

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'));
const ToolsPage = lazy(() => import('../pages/ToolsPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const UserProfilePage = lazy(() => import('../pages/UserProfilePage'));
const SubmitToolPage = lazy(() => import('../pages/SubmitToolPage'));
const ToolDetailPage = lazy(() => import('../pages/ToolDetailPage'));
const AdminToolsReviewPage = lazy(() => import('../pages/AdminToolsReviewPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/tools/:id" element={<ToolDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/submit-tool" element={<SubmitToolPage />} />
        <Route path="/admin/tools" element={<AdminToolsReviewPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Suspense>
  );
};
