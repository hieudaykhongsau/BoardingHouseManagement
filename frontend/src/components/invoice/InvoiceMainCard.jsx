import { useNavigate } from 'react-router-dom';
import { ReceiptText } from 'lucide-react';
import { currentInvoice } from '../../data/mockData';
import { useTranslation } from 'react-i18next';

const formatCurrency = (amount) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

const InvoiceMainCard = ({paymentId}) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const isPending = currentInvoice.status === 'Pending';

    const navigatePaymentPage = () =>{
        if(paymentId == 'bank'){
            navigate('/payment/vietqr');
        }else{
            navigate('/dashboard');
        }
    }

    return (
        <div className="invoice-main-card glass-card">
            <div className="invoice-card-header">
                <div>
                    <h3>{t('invoices.invoice_period')} {currentInvoice.period}</h3>
                    <p>{t('invoices.due_date')}: {currentInvoice.dueDate}</p>
                </div>
                <span className={`status-badge-invoice ${isPending ? 'unpaid' : 'paid'}`}>
                    <ReceiptText size={14} />
                    {isPending ? t('invoices.unpaid') : t('invoices.paid')}
                </span>
            </div>

            <div className="invoice-line-items">
                {currentInvoice.items.map((item, idx) => (
                    <div className="invoice-line-item" key={idx}>
                        <span>{item.label}</span>
                        <span>{formatCurrency(item.amount)}</span>
                    </div>
                ))}
            </div>

            <div className="invoice-footer">
                <div className="invoice-total-block">
                    <span className="invoice-total-label">{t('invoices.total_due')}</span>
                    <span className="invoice-total-amount">{formatCurrency(currentInvoice.total)}</span>
                </div>
                <button
                    className="btn-pay-now"
                    onClick={navigatePaymentPage}
                >
                    {t('invoices.pay_now')}
                </button>
            </div>
        </div>
    );
};

export default InvoiceMainCard;
