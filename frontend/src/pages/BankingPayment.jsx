import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentInvoice, bankInfo } from '../data/mockData';
import { Check, ArrowLeft, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../assets/css/BankingPayment.css';

const formatCurrency = (amount) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

/* ── Copy Button ── */
const CopyButton = ({ text }) => {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            className={`btn-copy ${copied ? 'copied' : ''}`}
            onClick={handleCopy}
            title={copied ? t('payment.copied') : t('payment.copy')}
        >
            {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
    );
};

/* ── Main Page ── */
const BankingPayment = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleConfirm = () => {
        alert(t('payment.confirm_alert'));
        navigate('/invoices');
    };

    return (
        <div className="vietqr-page">
            <div className="vietqr-inner">
                {/* ── LEFT: Payment Details ── */}
                <div className="vietqr-left">
                    <div className="payment-details-card glass-card">
                        <h2>{t('payment.details_title')}</h2>

                        <div className="payment-line-items">
                            {currentInvoice.items.map((item, idx) => (
                                <div className="payment-line-item" key={idx}>
                                    <span className="item-label">{item.label}</span>
                                    <span className="item-amount">{formatCurrency(item.amount)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="payment-total-row">
                            <span className="payment-total-label">{t('payment.total')}</span>
                            <span className="payment-total-amount">{formatCurrency(currentInvoice.total)}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="vietqr-actions">
                        <button className="btn-confirm-transfer" onClick={handleConfirm}>
                            <Check />
                            {t('payment.confirm_transfer')}
                        </button>
                        <button className="btn-back-invoice" onClick={() => navigate('/invoices')}>
                            <ArrowLeft />
                            {t('payment.back_to_invoices')}
                        </button>
                    </div>
                </div>

                {/* ── RIGHT: VietQR ── */}
                <div className="vietqr-right">
                    <div className="vietqr-card glass-card">
                        <h2>{t('payment.qr_title')}</h2>
                        <p className="vietqr-subtitle">
                            {t('payment.qr_desc')}
                        </p>

                        {/* QR Code */}
                        <div className="vietqr-qr-wrapper">
                            <img
                                className="vietqr-qr-image"
                                src={`https://api.vietqr.io/image/MB-${bankInfo.accountNumber}-compact2.jpg?amount=${currentInvoice.total}&addInfo=${bankInfo.transferContent}&accountName=${encodeURIComponent(bankInfo.accountName)}`}
                                alt="Mã QR thanh toán VietQR"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(`VIETQR|${bankInfo.bankName}|${bankInfo.accountNumber}|${bankInfo.accountName}|${currentInvoice.total}|${bankInfo.transferContent}`)}`;
                                }}
                            />
                        </div>

                        {/* Bank Info */}
                        <div className="vietqr-bank-info">
                            <div className="bank-info-row">
                                <span className="bank-info-label">{t('payment.bank_name')}</span>
                                <span className="bank-info-value">{bankInfo.bankName}</span>
                            </div>

                            <div className="bank-info-row">
                                <span className="bank-info-label">{t('payment.account_number')}</span>
                                <div className="bank-info-value-row">
                                    <span className="bank-info-value tracking">{bankInfo.accountNumber}</span>
                                    <CopyButton text={bankInfo.accountNumber} />
                                </div>
                            </div>

                            <div className="bank-info-row">
                                <span className="bank-info-label">{t('payment.account_holder')}</span>
                                <span className="bank-info-value">{bankInfo.accountName}</span>
                            </div>

                            <div className="bank-info-row">
                                <span className="bank-info-label">{t('payment.transfer_content')}</span>
                                <div className="bank-info-value-row">
                                    <span className="bank-info-value mono">{bankInfo.transferContent}</span>
                                    <CopyButton text={bankInfo.transferContent} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankingPayment;
