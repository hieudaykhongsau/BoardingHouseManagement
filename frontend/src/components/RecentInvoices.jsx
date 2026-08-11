import React from 'react';
import '../assets/css/RecentInvoices.css';
import { invoicesData } from '../data/mockData';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const RecentInvoices = () => {
  return (
    <div className="recent-invoices glass-card">
      <div className="section-header">
        <h3 className="text-title">Lịch sử hóa đơn</h3>
        <button className="glass-button">Xem tất cả</button>
      </div>
      
      <div className="invoice-list">
        {invoicesData.map((invoice, index) => (
          <div className="invoice-item" key={index}>
            <div className="invoice-info">
              <div className="invoice-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <p className="invoice-type">{invoice.type}</p>
                <p className="text-sm">{invoice.date}</p>
              </div>
            </div>
            <div className="invoice-meta">
              <span className="invoice-amount">{formatCurrency(invoice.amount)}</span>
              <span className={`status-chip ${invoice.status === 'Paid' ? 'status-paid' : 'status-pending'}`}>
                {invoice.status === 'Paid' ? 'ĐÃ ĐÓNG' : 'CHƯA ĐÓNG'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentInvoices;
