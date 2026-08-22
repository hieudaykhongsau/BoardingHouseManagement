import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { currentInvoice, bankInfo } from '../data/mockData';
import { Check, ArrowLeft, Copy } from 'lucide-react'
import '../assets/css/BankingPayment.css';

const formatCurrency = (amount) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

/* ── Copy Button ── */
const CopyButton = ({ text }) => {
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
            title={copied ? 'Đã sao chép' : 'Sao chép'}
        >
            {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
    );
};

/* ── Main Page ── */
const BankingPayment = () => {
    const navigate = useNavigate();

    const handleConfirm = () => {
        alert('Đã ghi nhận xác nhận chuyển khoản. Chúng tôi sẽ kiểm tra trong vòng 1–2 giờ làm việc.');
        navigate('/invoices');
    };

    return (
        <div className="vietqr-page">

            <div className="vietqr-inner">
                {/* ── LEFT: Payment Details ── */}
                <div className="vietqr-left">
                    <div className="payment-details-card glass-card">
                        <h2>Chi tiết thanh toán</h2>

                        <div className="payment-line-items">
                            {currentInvoice.items.map((item, idx) => (
                                <div className="payment-line-item" key={idx}>
                                    <span className="item-label">{item.label}</span>
                                    <span className="item-amount">{formatCurrency(item.amount)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="payment-total-row">
                            <span className="payment-total-label">Tổng cộng</span>
                            <span className="payment-total-amount">{formatCurrency(currentInvoice.total)}</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="vietqr-actions">
                        <button className="btn-confirm-transfer" onClick={handleConfirm}>
                            <Check />
                            Xác nhận đã chuyển khoản
                        </button>
                        <button className="btn-back-invoice" onClick={() => navigate('/invoices')}>
                            <ArrowLeft />
                            Quay lại hóa đơn
                        </button>
                    </div>
                </div>

                {/* ── RIGHT: VietQR ── */}
                <div className="vietqr-right">
                    <div className="vietqr-card glass-card">
                        <h2>Quét mã VietQR</h2>
                        <p className="vietqr-subtitle">
                            Sử dụng ứng dụng ngân hàng để quét mã thanh toán
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
                                <span className="bank-info-label">Ngân hàng</span>
                                <span className="bank-info-value">{bankInfo.bankName}</span>
                            </div>

                            <div className="bank-info-row">
                                <span className="bank-info-label">Số tài khoản</span>
                                <div className="bank-info-value-row">
                                    <span className="bank-info-value tracking">{bankInfo.accountNumber}</span>
                                    <CopyButton text={bankInfo.accountNumber} />
                                </div>
                            </div>

                            <div className="bank-info-row">
                                <span className="bank-info-label">Tên tài khoản</span>
                                <span className="bank-info-value">{bankInfo.accountName}</span>
                            </div>

                            <div className="bank-info-row">
                                <span className="bank-info-label">Nội dung chuyển khoản</span>
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
