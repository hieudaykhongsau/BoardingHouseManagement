
const PaymentMethodsCard = () => (
  <div className="payment-methods-card glass-card">
    <h4>Phương thức thanh toán</h4>

    {/* Bank Transfer — active/highlighted */}
    <div className="payment-option active">
      <div className="payment-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      </div>
      <div className="payment-option-info">
        <p className="payment-option-name">Chuyển khoản Ngân hàng</p>
        <p className="payment-option-detail">VCB – 0123 4567 89</p>
      </div>
    </div>

    {/* MoMo QR */}
    <div className="payment-option">
      <div className="payment-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
          <path d="M14 14h.01M18 14h.01M14 18h.01M18 18h.01M14 21h.01M21 14h.01"/>
        </svg>
      </div>
      <div className="payment-option-info">
        <p className="payment-option-name">Quét mã QR Momo</p>
        <p className="payment-option-detail">Thanh toán nhanh qua ví MoMo</p>
      </div>
    </div>
  </div>
);

export default PaymentMethodsCard;
