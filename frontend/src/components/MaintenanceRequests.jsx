import React from 'react';
import { maintenanceData } from '../data/mockData';
import '../assets/css/MaintenanceRequests.css';

function MaintenanceRequests() {
  return (
    <div className="maintenance-card glass-panel">
      <div className="card-header">
        <h3>Yêu cầu sửa chữa</h3>
        <button className="btn-icon">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
      
      <div className="request-list">
        {maintenanceData.map((req) => (
          <div key={req.id} className="request-item">
            <div className="request-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.83M11.42 15.17l-3.953 3.953a1.5 1.5 0 01-2.122-2.121l3.954-3.953m0 0L6.75 10.5m4.67-4.67a5.25 5.25 0 10-7.424 7.424l4.67 4.67-4.67 4.67" />
              </svg>
            </div>
            <div className="request-details">
              <span className="request-issue">{req.issue}</span>
              <span className="request-date">{req.date} &bull; {req.id}</span>
            </div>
            <div className={`status-badge ${req.status.toLowerCase()}`}>
              {req.status === 'Resolved' ? 'Hoàn thành' : 'Đang chờ'}
            </div>
          </div>
        ))}
        {maintenanceData.length === 0 && (
          <div className="empty-state">
            <span className="text-muted">Không có yêu cầu nào</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MaintenanceRequests;
