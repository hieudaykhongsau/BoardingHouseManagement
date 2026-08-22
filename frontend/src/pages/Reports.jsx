import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ReportSummaryCards from '../components/ReportSummaryCards';
import SpendingBarChart from '../components/SpendingBarChart';
import SpendingDonutChart from '../components/SpendingDonutChart';
import AIHabitsCard from '../components/AIHabitsCard';
import RecommendationsCard from '../components/RecommendationsCard';
import '../assets/css/Reports.css';

const BarChartIcon = () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

const periodOptions = [
    { value: 'month-5', label: 'Tháng 5, 2026' },
    { value: 'month-4', label: 'Tháng 4, 2026' },
    { value: 'month-3', label: 'Tháng 3, 2026' },
    { value: 'last-3', label: '3 tháng gần nhất' },
    { value: 'last-6', label: '6 tháng gần nhất' },
    { value: 'last-12', label: '12 tháng gần nhất' },
];

const Reports = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('month-5');

    return (
        <div className="reports-container">
            <Sidebar />
            <main className="reports-main">
                <div className="reports-inner">
                    <div className="reports-content">
                        {/* Page Header */}
                        <div className="reports-page-header">
                            <div className="reports-page-header-left">
                                <h2>
                                    <BarChartIcon />
                                    Báo cáo &amp; Chi tiêu
                                </h2>
                                <p>Phân tích dựa trên dữ liệu 6 tháng gần nhất của bạn.</p>
                            </div>
                            <select
                                className="reports-filter-select"
                                value={selectedPeriod}
                                onChange={(e) => setSelectedPeriod(e.target.value)}
                                aria-label="Chọn khoảng thời gian"
                            >
                                {periodOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Summary Cards Row */}
                        <ReportSummaryCards />

                        {/* Bar Chart + Donut Chart */}
                        <div className="reports-analytics-grid">
                            <SpendingBarChart />
                            <SpendingDonutChart />
                        </div>

                        {/* AI Habits + Recommendations */}
                        <div className="reports-insights-grid">
                            <AIHabitsCard />
                            <RecommendationsCard />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Reports;
