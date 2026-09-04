import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from '../components/common/LoadingSpinner';
import NotFound from '../pages/NotFound';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const Invoices = lazy(() => import('../pages/Invoices'));
const BankingPayment = lazy(() => import('../pages/BankingPayment'));
const Reports = lazy(() => import('../pages/Reports'));
const Profiles = lazy(() => import('../pages/Profiles'));
const Maintenance = lazy(() => import('../pages/Maintenance'));

const DashboardRoutes = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="payment/vietqr" element={<BankingPayment />} />
                <Route path="reports" element={<Reports />} />
                <Route path="profiles" element={<Profiles />} />
                <Route path="maintenance" element={<Maintenance />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default DashboardRoutes;
