import { Dashboard } from './components/Dashboard';
import { DashboardProvider } from './context/DashboardContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/login';
import Signup from './pages/signup';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    // <div className="min-h-screen bg-gray-50">
    //   <Dashboard />
    // </div>

    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardProvider>
                <Dashboard />
              </DashboardProvider>
            </ProtectedRoute>
          }
        />

        {/* Default route */}
        <Route path="*" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  );
}
