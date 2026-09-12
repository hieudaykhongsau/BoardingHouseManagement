import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import HomePage from './pages/HomePage';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './auth/context/AuthContext';

const DashboardRoutes = lazy(() => import('./routes/DashboardRoutes'));

function App() {
    return (
        <AuthProvider>
            <Toaster
                position="top-right"
                expand={false}
                richColors
                closeButton
            />
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