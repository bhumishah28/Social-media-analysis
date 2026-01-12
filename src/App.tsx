import { Dashboard } from './components/Dashboard';
import { DashboardProvider } from './context/DashboardContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Connect from './pages/connect';
import Connect2 from './pages/connect2';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    // <div className="min-h-screen bg-gray-50">
    //   <Dashboard />
    // </div>

    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/connect2" element={<Connect2 />} />
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
