import { Dashboard } from './components/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route path="*" element={<Signup />} />

        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Default route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}
