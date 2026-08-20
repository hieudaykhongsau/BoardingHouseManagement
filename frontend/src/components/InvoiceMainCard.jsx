import { ReceiptText } from 'lucide-react';
import { currentInvoice } from '../data/mockData';

const formatCurrency = (amount) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

const InvoiceMainCard = () => {
  const isPending = currentInvoice.status === 'Pending';

  return (
    <div className="invoice-main-card glass-card">
      <div className="invoice-card-header">
        <div>
          <h3>Hóa đơn {currentInvoice.period}</h3>
          <p>Hạn thanh toán: {currentInvoice.dueDate}</p>
        </div>
        <span className={`status-badge-invoice ${isPending ? 'unpaid' : 'paid'}`}>
          <ReceiptText size={14} />
          {isPending ? 'Chưa thanh toán' : 'Đã thanh toán'}
        </span>
      </div>

      <div className="invoice-line-items">
        {currentInvoice.items.map((item, idx) => (
          <div className="invoice-line-item" key={idx}>
            <span>{item.label}:</span>
            <span>{formatCurrency(item.amount)}</span>
          </div>
        ))}
      </div>

      <div className="invoice-footer">
        <div className="invoice-total-block">
          <span className="invoice-total-label">Tổng cộng cần thanh toán</span>
          <span className="invoice-total-amount">{formatCurrency(currentInvoice.total)}</span>
        </div>
        <button className="btn-pay-now">Thanh toán ngay</button>
      </div>
    </div>
  );
};

export default InvoiceMainCard;
