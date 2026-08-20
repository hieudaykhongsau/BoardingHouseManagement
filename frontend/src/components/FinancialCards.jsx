import '../assets/css/FinancialCards.css';

const FinancialCards = () => {
  return (
    <div className="financial-summary-grid">
      {/* Điện */}
      <div className="summary-card glass-panel">
        <div className="card-top">
          <div className="icon-box icon-electric">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
          </div>
          <span className="trend-badge trend-up">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
            +5%
          </span>
        </div>
        <div className="card-bottom">
          <p className="card-label">Tiêu thụ điện tháng này</p>
          <h3 className="card-value">342 <span>kWh</span></h3>
        </div>
      </div>

      {/* Nước */}
      <div className="summary-card glass-panel">
        <div className="card-top">
          <div className="icon-box icon-water">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
          </div>
          <span className="trend-badge trend-down">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" /></svg>
            -2%
          </span>
        </div>
        <div className="card-bottom">
          <p className="card-label">Tiêu thụ nước tháng này</p>
          <h3 className="card-value">12 <span>m³</span></h3>
        </div>
      </div>

      {/* Bill Status */}
      <div className="summary-card glass-panel">
        <div className="card-top">
          <div className="icon-box icon-bill">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
          </div>
          <span className="trend-badge status-paid">
            Đã thanh toán
          </span>
        </div>
        <div className="card-bottom">
          <p className="card-label">Hóa đơn kỳ trước</p>
          <h3 className="card-value">8,450,000 <span>VND</span></h3>
        </div>
      </div>
    </div>
  );
};

export default FinancialCards;
