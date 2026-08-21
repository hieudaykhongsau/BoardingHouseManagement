import { useState } from 'react';
import { CreditCard, Banknote } from 'lucide-react';

const PaymentMethodsCard = ({ onSelectMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState('bank');

  const paymentOptions = [
    { id: 'bank', name: 'Chuyển khoản Ngân hàng', icon: <CreditCard /> },
    { id: 'cash', name: 'Thanh toán tiền mặt', icon: <Banknote /> },
  ];

  const handleSelect = (id) => {
    setSelectedMethod(id);
    if (onSelectMethod) {
      onSelectMethod(id);
    }
  };

  return (
    <div className="payment-methods-card glass-card">
      <h4>Phương thức thanh toán</h4>

      {paymentOptions.map((option) => (
        <div
          key={option.id}
          className={`payment-option ${selectedMethod === option.id ? 'active' : ''}`}
          onClick={() => handleSelect(option.id)}
          style={{ cursor: 'pointer' }}
        >
          <div className="payment-icon">{option.icon}</div>
          <div className="payment-option-info">
            <p className="payment-option-name">{option.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethodsCard;