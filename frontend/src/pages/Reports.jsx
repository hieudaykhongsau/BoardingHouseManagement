import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/common/Sidebar';
import ReportSummaryCards from '../components/report/ReportSummaryCards';
import SpendingBarChart from '../components/report/SpendingBarChart';
import SpendingDonutChart from '../components/report/SpendingDonutChart';
import AIHabitsCard from '../components/report/AIHabitsCard';
import RecommendationsCard from '../components/report/RecommendationsCard';
import '../assets/css/Reports.css';

const BarChartIcon = () => (
    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

const Reports = () => {
    const { t, i18n } = useTranslation();
    const isVi = i18n.language?.startsWith('vi');
    const [selectedPeriod, setSelectedPeriod] = useState('month-5');

    const periodOptions = [
        { value: 'month-5', label: isVi ? 'Tháng 5, 2026' : 'May 2026' },
        { value: 'month-4', label: isVi ? 'Tháng 4, 2026' : 'Apr 2026' },
        { value: 'month-3', label: isVi ? 'Tháng 3, 2026' : 'Mar 2026' },
        { value: 'last-3', label: t('reports.last_3_months') },
        { value: 'last-6', label: t('reports.last_6_months') },
        { value: 'last-12', label: t('reports.last_12_months') },
    ];

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
                                    {t('reports.title')}
                                </h2>
                                <p>{t('reports.subtitle')}</p>
                            </div>
                            <select
                                className="reports-filter-select"
                                value={selectedPeriod}
                                onChange={(e) => setSelectedPeriod(e.target.value)}
                                aria-label={t('reports.select_period')}
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
