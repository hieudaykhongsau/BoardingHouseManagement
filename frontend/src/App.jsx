import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import BankingPayment from './pages/BankingPayment';
import Reports from './pages/Reports';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/payment/vietqr" element={<BankingPayment />} />
            <Route path="/reports" element={<Reports />} />
        </Routes>
    );
}

export default App;