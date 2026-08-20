import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import InvoiceMainCard from '../components/InvoiceMainCard';
import AiInsightCard from '../components/AiInsightCard';
import PaymentMethodsCard from '../components/PaymentMethodsCard';
import BillingHistoryTable from '../components/BillingHistoryTable';
import '../assets/css/Invoices.css';

const Invoices = () => {
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
              <InvoiceMainCard />
              <div className="invoice-side-column">
                <AiInsightCard />
                <PaymentMethodsCard />
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
