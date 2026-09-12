import '../../assets/css/Reports.css';
import { useTranslation } from 'react-i18next';

const formatVND = (amount) => {
    if (amount >= 1000000) return `${(amount / 1000000).toFixed(1).replace('.0', '')}M`;
    return `${(amount / 1000).toFixed(0)}K`;
};

const SpendingBarChart = () => {
    const { t, i18n } = useTranslation();
    const isVi = i18n.language?.startsWith('vi');

    const barData = [
        { month: isVi ? 'Th 12' : 'Dec', value: 13200000, height: 60, isCurrent: false },
        { month: isVi ? 'Th 1' : 'Jan', value: 13500000, height: 65, isCurrent: false },
        { month: isVi ? 'Th 2' : 'Feb', value: 14100000, height: 75, isCurrent: false },
        { month: isVi ? 'Th 3' : 'Mar', value: 13300000, height: 62, isCurrent: false },
        { month: isVi ? 'Th 4' : 'Apr', value: 13800000, height: 70, isCurrent: false },
        { month: isVi ? 'Th 5' : 'May', value: 14500000, height: 85, isCurrent: true },
    ];

    return (
        <div className="report-bar-chart-card glass-panel">
            <div className="report-chart-header">
                <h3>{t('reports.compare_months')}</h3>
                <div className="report-chart-legend">
                    <div className="report-chart-legend-item">
                        <div className="report-chart-legend-dot" style={{ background: 'var(--indigo-text)' }}></div>
                        <span>{t('reports.total_vnd')}</span>
                    </div>
                </div>
            </div>

            <div className="report-bar-area">
                {barData.map((bar) => (
                    <div key={bar.month} className="report-bar-group">
                        <div className="report-bar-tooltip">{formatVND(bar.value)}</div>
                        <div
                            className={`report-bar-fill ${bar.isCurrent ? 'is-current' : ''}`}
                            style={{
                                height: `${bar.height}%`,
                                background: bar.isCurrent
                                    ? 'linear-gradient(180deg, rgba(130, 200, 253, 0.9) 0%, rgba(99, 102, 241, 0.85) 100%)'
                                    : 'rgba(99, 102, 241, 0.25)',
                            }}
                        />
                        <span className={`report-bar-month ${bar.isCurrent ? 'is-current' : ''}`}>
                            {bar.month}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpendingBarChart;
