import '../../assets/css/Reports.css';
import { House, Zap, Droplet, Banknote } from 'lucide-react';
import TrendIcon from '../../ui/TrendIcon';
import { useTranslation } from 'react-i18next';

const ReportSummaryCards = () => {
    const { t } = useTranslation();

    const summaryCards = [
        {
            label: t('reports.summary_rent'),
            value: '8.500.000 ₫',
            trend: 'neutral',
            trendLabel: t('reports.trend_unchanged'),
            iconClass: 'icon-rent',
            icon: <House />,
        },
        {
            label: t('reports.summary_electric'),
            value: '1.250.000 ₫',
            trend: 'up',
            trendLabel: `+12.5% ${t('reports.trend_vs_last_month')}`,
            iconClass: 'icon-electric',
            icon: <Zap />,
        },
        {
            label: t('reports.summary_water'),
            value: '350.000 ₫',
            trend: 'down',
            trendLabel: `-2.1% ${t('reports.trend_vs_last_month')}`,
            iconClass: 'icon-water',
            icon: <Droplet />,
        },
        {
            label: t('reports.summary_total'),
            value: '10.100.000 ₫',
            trend: 'up',
            trendLabel: `+5.3% ${t('reports.trend_vs_last_month')}`,
            iconClass: 'icon-total',
            icon: <Banknote />,
        },
    ];

    return (
        <div className="report-summary-grid">
            {summaryCards.map((card) => (
                <div key={card.label} className="report-summary-card glass-card">
                    <div className="report-summary-card-top">
                        <p className="report-summary-card-label">{card.label}</p>
                        <div className={`report-summary-card-icon ${card.iconClass}`}>
                            {card.icon}
                        </div>
                    </div>
                    <h3 className="report-summary-card-value">{card.value}</h3>
                    <div className={`report-summary-card-trend ${card.trend}`}>
                        <TrendIcon trend={card.trend} />
                        <span>{card.trendLabel}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReportSummaryCards;
