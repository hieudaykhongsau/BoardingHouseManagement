import { useState } from 'react';
import { CreditCard, Banknote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PaymentMethodsCard = ({ onSelectMethod }) => {
    const { t } = useTranslation();
    const [selectedMethod, setSelectedMethod] = useState('bank');

    const paymentOptions = [
        { id: 'bank', name: t('invoices.bank_transfer'), icon: <CreditCard /> },
        { id: 'cash', name: t('invoices.cash'), icon: <Banknote /> },
    ];

    const handleSelect = (id) => {
        setSelectedMethod(id);
        if (onSelectMethod) {
            onSelectMethod(id);
        }
    };

    return (
        <div className="payment-methods-card glass-card">
            <h4>{t('invoices.payment_methods')}</h4>

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