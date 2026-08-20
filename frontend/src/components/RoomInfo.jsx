import '../assets/css/RoomInfo.css';

function RoomInfo() {
  return (
    <div className="room-info-container glass-panel">
      <h3 className="section-title">Thông tin phòng</h3>
      
      <ul className="info-list">
        <li className="info-row">
          <span className="info-label">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.75M5.25 9h3.75m-3.75 3h3.75m-3.75 3h3.75m3.75-6h3.75m-3.75 3h3.75m-3.75 3h3.75M5.25 21h13.5A2.25 2.25 0 0021 18.75V5.25A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21z" /></svg>
            Số phòng
          </span>
          <span className="info-value">P. 1204</span>
        </li>
        <li className="info-row">
          <span className="info-label">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Tầng
          </span>
          <span className="info-value">12</span>
        </li>
        <li className="info-row">
          <span className="info-label">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
            Diện tích
          </span>
          <span className="info-value">65 m²</span>
        </li>
        <li className="info-row">
          <span className="info-label">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
            Giá thuê cơ bản
          </span>
          <span className="info-value">8,000,000 đ</span>
        </li>
      </ul>

      <div className="usage-limits">
        <h4>Định mức sử dụng</h4>
        <div className="limit-row">
          <span className="limit-label">Điện (Bậc 1):</span>
          <span className="limit-value">50 kWh</span>
        </div>
        <div className="limit-row">
          <span className="limit-label">Nước (Định mức):</span>
          <span className="limit-value">4 m³/người</span>
        </div>
      </div>
    </div>
  );
}

export default RoomInfo;
