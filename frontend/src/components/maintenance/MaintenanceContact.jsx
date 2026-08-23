import { Building2, Phone, Wrench } from 'lucide-react';

const MaintenanceContact = () => {
    return (
        <div className="glass-panel contact-card">
            <div className="section-header-row">
                <div className="icon-box primary">
                    <Building2 size={24} />
                </div>
                <h3 className="text-title">Ban Quản Lý Tòa Nhà</h3>
            </div>

            <div className="contact-info-grid">
                <div className="contact-box">
                    <div className="contact-label">Công ty quản lý</div>
                    <div className="contact-val">Vinhomes Property Management</div>
                </div>
                <div className="contact-box">
                    <div className="contact-label">Văn phòng hỗ trợ</div>
                    <div className="contact-val">Tầng 1, Tòa Landmark 1, Vinhomes Central Park</div>
                </div>
                <div className="contact-box full-width">
                    <div>
                        <div className="contact-label">Hotline CSKH (24/7)</div>
                        <div className="contact-val primary-text">1900 1234</div>
                    </div>
                    <button className="action-btn call">
                        <Phone size={20} />
                    </button>
                </div>
                <div className="contact-box full-width urgent">
                    <div>
                        <div className="contact-label urgent-text">Kỹ thuật khẩn cấp</div>
                        <div className="contact-val">0909 888 999</div>
                    </div>
                    <button className="action-btn urgent-call">
                        <Wrench size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceContact;
