import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/context/AuthContext';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProtectedRoute = ({ redirectPath = "/", children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <Navigate to={redirectPath} replace />;
    }

    // Hỗ trợ cả 2 cách: dùng làm Route cha (Outlet) hoặc Wrapper component (children)
    return children ? children : <Outlet />;
};

export default ProtectedRoute;
