import '../../assets/css/Reports.css';

const recommendations = [
    {
        iconClass: 'blue',
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
        title: 'Vệ sinh bộ lọc máy lạnh',
        desc: 'Làm sạch bộ lọc có thể giảm đến 15% điện năng tiêu thụ cho điều hòa, cải thiện hiệu suất lạnh đáng kể.',
        savings: 'Tiết kiệm ~100k/tháng',
    },
    {
        iconClass: 'yellow',
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.054 15.054 0 01-4.5 0M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
        ),
        title: 'Thay bóng đèn LED khu vực bếp',
        desc: 'Phát hiện mức tiêu thụ điện năng cao bất thường ở khu vực bếp. Thay bóng LED giúp giảm nhiệt và tiêu thụ điện.',
        savings: 'Tiết kiệm ~50k/tháng',
    },
    {
        iconClass: 'emerald',
        icon: (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
            </svg>
        ),
        title: 'Tắt thiết bị khi không sử dụng',
        desc: 'Các thiết bị ở chế độ chờ (standby) có thể tiêu thụ tới 10% điện năng mỗi tháng mà không sinh ra công dụng.',
        savings: 'Tiết kiệm ~75k/tháng',
    },
];

const RecommendationsCard = () => {
    return (
        <div className="report-recommendations-card glass-panel">
            <div className="report-recommendations-header">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.054 15.054 0 01-4.5 0M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <h3>Khuyến nghị hành động</h3>
            </div>

            <ul className="report-recommendation-list">
                {recommendations.map((rec) => (
                    <li key={rec.title} className="report-recommendation-item">
                        <div className={`report-recommendation-icon-wrap ${rec.iconClass}`}>
                            {rec.icon}
                        </div>
                        <div className="report-recommendation-info">
                            <h4 className="report-recommendation-title">{rec.title}</h4>
                            <p className="report-recommendation-desc">{rec.desc}</p>
                        </div>
                        <span className="report-recommendation-savings">{rec.savings}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecommendationsCard;
