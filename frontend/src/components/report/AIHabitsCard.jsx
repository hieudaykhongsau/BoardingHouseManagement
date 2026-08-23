import '../../assets/css/Reports.css';
import {Sparkles} from 'lucide-react'
const AIHabitsCard = () => {
    return (
        <div className="report-ai-habits-card">
            <div className="report-ai-habits-bg-orb" />

            <div className="report-ai-habits-header">
                <Sparkles />
                <h3>Đánh giá thói quen</h3>
            </div>

            <div className="report-ai-score-block">
                <span className="report-ai-score">B+</span>
                <span className="report-ai-score-label">Điểm đánh giá</span>
            </div>

            <p className="report-ai-habits-text">
                Tiền điện cao hơn{' '}
                <strong className="highlight-bad">20%</strong>{' '}
                so với mức trung bình của khu vực, nhưng tiền nước tiết kiệm được{' '}
                <strong className="highlight-good">5%</strong>{' '}
                so với cùng kỳ năm ngoái. Hãy chú ý điều chỉnh thói quen sử dụng điện.
            </p>

            <div className="report-ai-updated-badge">
                <div className="report-ai-updated-dot" />
                <span className="report-ai-updated-text">Cập nhật hôm nay</span>
            </div>
        </div>
    );
};

export default AIHabitsCard;
