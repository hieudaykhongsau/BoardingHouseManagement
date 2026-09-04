import {  lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './auth/context/AuthContext';

const DashboardRoutes = lazy(() => import('./routes/DashboardRoutes'));

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route
                    path="/*"
                    element={
                        <ProtectedRoute>
                            <DashboardRoutes />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

export default App;