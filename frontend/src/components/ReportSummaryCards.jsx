import '../assets/css/Reports.css';
import {House, Zap, Droplet, Banknote} from 'lucide-react'
import TrendIcon from '../ui/TrendIcon';
const mockSummaryData = [
    {
        label: 'Tiền thuê nhà',
        value: '8.500.000 ₫',
        trend: 'neutral',
        trendLabel: 'Không đổi',
        iconClass: 'icon-rent',
        icon: <House />,
    },
    {
        label: 'Tiền điện',
        value: '1.250.000 ₫',
        trend: 'up',
        trendLabel: '+12.5% so với tháng trước',
        iconClass: 'icon-electric',
        icon: <Zap />,
    },
    {
        label: 'Tiền nước',
        value: '350.000 ₫',
        trend: 'down',
        trendLabel: '-2.1% so với tháng trước',
        iconClass: 'icon-water',
        icon: <Droplet />,
    },
    {
        label: 'Tổng chi phí',
        value: '10.100.000 ₫',
        trend: 'up',
        trendLabel: '+5.3% so với tháng trước',
        iconClass: 'icon-total',
        icon: <Banknote />,
    },
];


const ReportSummaryCards = () => {
    return (
        <div className="report-summary-grid">
            {mockSummaryData.map((card) => (
                <div key={card.label} className="report-summary-card glass-card">
                    <div className="report-summary-card-top">
                        <p className="report-summary-card-label">{card.label}</p>
                        <div className={`report-summary-card-icon ${card.iconClass}`}>
                            {card.icon}
                        </div>
                    </div>
                    <h3 className="report-summary-card-value">{card.value}</h3>
                    <div className={`report-summary-card-trend ${card.trend}`}>
                        <TrendIcon trend = {card.trend} />
                        <span>{card.trendLabel}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReportSummaryCards;
