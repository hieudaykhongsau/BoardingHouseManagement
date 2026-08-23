import { Headset, ImagePlus } from 'lucide-react';

const MaintenanceForm = () => {
    return (
        <div className="glass-panel support-form-card" style={{ position: 'sticky', top: '100px' }}>
            <div className="section-header-row">
                <div className="icon-box accent">
                    <Headset size={24} />
                </div>
                <h3 className="text-title">Gửi Yêu Cầu Hỗ Trợ</h3>
            </div>

            <form className="support-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label className="form-label" htmlFor="issue-type">Loại Yêu Cầu</label>
                    <select id="issue-type" className="form-select">
                        <option>Sửa chữa điện/nước</option>
                        <option>Báo cáo sự cố an ninh</option>
                        <option>Thắc mắc hóa đơn</option>
                        <option>Góp ý dịch vụ</option>
                        <option>Khác</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">Mức Độ Ưu Tiên</label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input type="radio" name="urgency" value="normal" className="radio-input" defaultChecked />
                            Bình thường
                        </label>
                        <label className="radio-label urgent-radio">
                            <input type="radio" name="urgency" value="high" className="radio-input urgent-radio-input" />
                            Gấp
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="message">Nội Dung Chi Tiết</label>
                    <textarea id="message" className="form-textarea" rows={4} placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải..."></textarea>
                </div>

                <div className="form-group">
                    <label className="form-label">Đính Kèm Ảnh (Tùy chọn)</label>
                    <label className="file-upload-box">
                        <ImagePlus className="file-upload-icon" size={32} />
                        <div className="file-upload-text">
                            <span>Tải ảnh lên</span> hoặc kéo thả vào đây
                        </div>
                        <div className="file-upload-meta">PNG, JPG tối đa 5MB</div>
                        <input type="file" style={{ display: 'none' }} />
                    </label>
                </div>

                <button type="submit" className="glass-button primary submit-btn">
                    Gửi Yêu Cầu
                </button>
            </form>
        </div>
    );
};

export default MaintenanceForm;
