import { Shield, CheckCircle } from 'lucide-react';

const MaintenanceRules = () => {
    return (
        <div className="glass-panel rules-card">
            <div className="section-header-row">
                <div className="icon-box secondary">
                    <Shield size={24} />
                </div>
                <h3 className="text-title">Nội Quy Phòng Trọ / Căn Hộ</h3>
            </div>

            <div className="rules-list">
                <div className="rule-item">
                    <CheckCircle className="rule-icon" size={20} />
                    <div>
                        <h4 className="rule-title">Giờ giấc an ninh</h4>
                        <p className="rule-desc">Hạn chế tiếng ồn lớn sau 22:00. Khách đến chơi cần đăng ký tại quầy lễ tân tầng trệt và rời đi trước 23:00 nếu không đăng ký lưu trú qua đêm.</p>
                    </div>
                </div>
                <div className="rule-item">
                    <CheckCircle className="rule-icon" size={20} />
                    <div>
                        <h4 className="rule-title">Vệ sinh chung</h4>
                        <p className="rule-desc">Bỏ rác đúng nơi quy định tại phòng rác mỗi tầng. Không để rác hay đồ dùng cá nhân ngoài hành lang chung để đảm bảo an toàn PCCC.</p>
                    </div>
                </div>
                <div className="rule-item">
                    <CheckCircle className="rule-icon" size={20} />
                    <div>
                        <h4 className="rule-title">Nuôi thú cưng</h4>
                        <p className="rule-desc">Được phép nuôi thú cưng nhỏ (dưới 10kg) nhưng phải đăng ký trước với BQL. Cần đảm bảo vệ sinh và đeo rọ mõm/dây dắt khi ra khu vực chung.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceRules;
