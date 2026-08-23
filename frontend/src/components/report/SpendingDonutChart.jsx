import '../../assets/css/Reports.css';

const CIRCUMFERENCE = 251.2;

const segments = [
    { label: 'Thuê nhà', percent: 0.50, color: '#82c8fd', rotation: 0 },
    { label: 'Tiền điện', percent: 0.30, color: '#6366f1', rotation: 180 },
    { label: 'Tiền nước', percent: 0.15, color: '#f59e0b', rotation: 288 },
    { label: 'Khác', percent: 0.05, color: 'rgba(255,255,255,0.2)', rotation: 342 },
];

const SpendingDonutChart = () => {
    return (
        <div className="report-donut-card glass-panel">
            <h3>Cơ cấu chi phí</h3>

            <div className="report-donut-wrapper">
                <svg viewBox="0 0 100 100" width="100%" height="100%" style={{ transform: 'rotate(-90deg)' }}>
                    {/* Track */}
                    <circle
                        cx="50" cy="50" r="40"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="14"
                    />
                    {/* Segments */}
                    {segments.map((seg) => (
                        <circle
                            key={seg.label}
                            cx="50" cy="50" r="40"
                            fill="none"
                            stroke={seg.color}
                            strokeWidth="14"
                            strokeDasharray={CIRCUMFERENCE}
                            strokeDashoffset={CIRCUMFERENCE * (1 - seg.percent)}
                            transform={`rotate(${seg.rotation} 50 50)`}
                            style={{ transition: 'stroke-width 0.2s ease' }}
                        />
                    ))}
                </svg>
                <div className="report-donut-center">
                    <span className="report-donut-center-value">14.5M ₫</span>
                    <span className="report-donut-center-label">Tổng cộng</span>
                </div>
            </div>

            <div className="report-donut-legend">
                {segments.map((seg) => (
                    <div key={seg.label} className="report-donut-legend-item">
                        <div
                            className="report-donut-legend-dot"
                            style={{ background: seg.color }}
                        />
                        <span className="report-donut-legend-label">
                            {seg.label} ({Math.round(seg.percent * 100)}%)
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpendingDonutChart;
