import { invoiceHistory } from '../../data/mockData';
import { useTranslation } from 'react-i18next';

const formatCurrency = (amount) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

const PdfIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
  </svg>
);

const BillingHistoryTable = () => {
  const { t } = useTranslation();

  return (
    <div className="billing-history-section glass-card">
      <div className="billing-history-header">
        <h3>{t('invoices.billing_history')}</h3>
        <button className="btn-filter">
          <FilterIcon />
          {t('common.filter')}
        </button>
      </div>

      <div className="billing-table-wrapper">
        <table className="billing-table">
          <thead>
            <tr>
              <th>{t('invoices.table_period')}</th>
              <th>{t('invoices.table_total')}</th>
              <th>{t('invoices.table_date')}</th>
              <th>{t('invoices.table_status')}</th>
              <th className="text-right">{t('invoices.table_actions')}</th>
            </tr>
          </thead>
          <tbody>
            {invoiceHistory.map((row, idx) => (
              <tr key={idx}>
                <td className="period">{row.period}</td>
                <td className="amount">{formatCurrency(row.total)}</td>
                <td className="date">{row.paidDate}</td>
                <td>
                  <span className="status-chip status-paid">{t('invoices.paid')}</span>
                </td>
                <td className="actions">
                  <button className="btn-pdf">
                    <PdfIcon />
                    PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="billing-history-footer">
        <button className="btn-view-all">{t('invoices.view_all_history')}</button>
      </div>
    </div>
  );
};

export default BillingHistoryTable;
