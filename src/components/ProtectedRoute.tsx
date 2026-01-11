import { Navigate } from 'react-router-dom';
import React from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuth = localStorage.getItem('isAuth') === 'true';

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
    