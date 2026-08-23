import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import BankingPayment from './pages/BankingPayment';
import Reports from './pages/Reports';
import Profiles from './pages/Profiles';
import Maintenance from './pages/Maintenance';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/payment/vietqr" element={<BankingPayment />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
    );
}

export default App;