import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/common/Sidebar';
import InvoiceMainCard from '../components/invoice/InvoiceMainCard';
import AiInsightCard from '../components/invoice/AiInsightCard';
import PaymentMethodsCard from '../components/invoice/PaymentMethodsCard';
import BillingHistoryTable from '../components/invoice/BillingHistoryTable';
import '../assets/css/Invoices.css';

const Invoices = () => {
    const { t } = useTranslation();
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
                            <h2>{t('invoices.title')}</h2>
                            <p>{t('invoices.subtitle')}</p>
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
