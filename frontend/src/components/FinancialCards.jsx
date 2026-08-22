import '../assets/css/FinancialCards.css';
import TrendIcon from '../ui/TrendIcon';
import { ReceiptText, Zap, Droplet } from 'lucide-react';
const FinancialCards = () => {
    return (
        <div className="financial-summary-grid">
            {/* Điện */}
            <div className="summary-card glass-panel">
                <div className="card-top">
                    <div className="icon-box icon-electric">
                        <Zap />
                    </div>
                    <span className="trend-badge trend-up">
                        <TrendIcon trend={'up'} />
                        +5%
                    </span>
                </div>
                <div className="card-bottom">
                    <p className="card-label">Tiêu thụ điện tháng này</p>
                    <h3 className="card-value">342 <span>kWh</span></h3>
                </div>
            </div>

            {/* Nước */}
            <div className="summary-card glass-panel">
                <div className="card-top">
                    <div className="icon-box icon-water">
                        <Droplet />
                    </div>
                    <span className="trend-badge trend-down">
                        <TrendIcon trend={'down'} />
                        -2%
                    </span>
                </div>
                <div className="card-bottom">
                    <p className="card-label">Tiêu thụ nước tháng này</p>
                    <h3 className="card-value">12 <span>m³</span></h3>
                </div>
            </div>

            {/* Bill Status */}
            <div className="summary-card glass-panel">
                <div className="card-top">
                    <div className="icon-box icon-bill">
                       <ReceiptText />
                    </div>
                    <span className="trend-badge status-paid">
                        Đã thanh toán
                    </span>
                </div>
                <div className="card-bottom">
                    <p className="card-label">Hóa đơn kỳ trước</p>
                    <h3 className="card-value">8,450,000 <span>VND</span></h3>
                </div>
            </div>
        </div>
    );
};

export default FinancialCards;
