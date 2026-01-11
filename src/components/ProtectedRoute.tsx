import { Navigate } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuth = localStorage.getItem('isAuth') === 'true';

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
    