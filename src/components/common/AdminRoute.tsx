import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface AdminRouteProps {
  children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { currentUser } = useAuth();
  const isAdminAuthenticated = sessionStorage.getItem('adminAuth') === 'true';
  
  // التحقق من أن المستخدم مسجل الدخول وأنه مسؤول وتم مصادقته
  if (!currentUser || currentUser.email !== 'admin@zakerly.com' || !isAdminAuthenticated) {
    return <Navigate to="/secure-admin-auth-52791" replace />;
  }

  return <>{children}</>;
};

export default AdminRoute;
