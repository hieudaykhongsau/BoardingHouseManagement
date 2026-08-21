import {useState} from 'react'
import Sidebar from '../components/Sidebar';
import InvoiceMainCard from '../components/InvoiceMainCard';
import AiInsightCard from '../components/AiInsightCard';
import PaymentMethodsCard from '../components/PaymentMethodsCard';
import BillingHistoryTable from '../components/BillingHistoryTable';
import '../assets/css/Invoices.css';

const Invoices = () => {
    const [paymentId, setPaymentId] = useState('bank');
    const handlePaymentMethod = (id)=>{
        setPaymentId(id);
    }

    return (
        <div className="invoices-container">
            <Sidebar />
            <main className="invoices-main">
                <div className="invoices-inner">
                    <div className="invoices-content">
                        <div className="invoices-page-header" style={{ marginTop: '32px' }}>
                            <h2>Hóa đơn</h2>
                            <p>Quản lý các khoản thanh toán hàng tháng của bạn</p>
                        </div>

                        {/* Bento: Current Invoice + Side Panel */}
                        <div className="invoice-bento">
                            <InvoiceMainCard paymentId={paymentId}/>
                            <div className="invoice-side-column">
                                <AiInsightCard />
                                <PaymentMethodsCard onSelectMethod={handlePaymentMethod}/>
                            </div>
                        </div>

                        {/* Billing History */}
                        <BillingHistoryTable />

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Invoices;
