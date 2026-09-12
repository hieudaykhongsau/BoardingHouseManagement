import { useTranslation } from 'react-i18next';
import Sidebar from '../components/common/Sidebar';
import Header from '../components/dashboard/Header';
import FinancialCards from '../components/dashboard/FinancialCards';
import ConsumptionChart from '../components/dashboard/ConsumptionChart';
import RoomInfo from '../components/dashboard/RoomInfo';
import '../assets/css/Dashboard.css';

const Dashboard = () => {
    const { t } = useTranslation();

    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="dashboard-main">
                <div className="dashboard-inner">
                    <Header />

                    <div className="dashboard-content">
                        <div className="page-title-section">
                            <div className="title-left">
                                <h2>{t('dashboard.overview_title')}</h2>
                                <p>{t('dashboard.overview_subtitle')}</p>
                            </div>

                            <div className="title-right">
                                <span className="status-badge-active">
                                    {t('dashboard.status_renting')}
                                </span>
                            </div>
                        </div>

                        <div className="bento-grid">
                            <div className="bento-top-row">
                                <FinancialCards />
                            </div>

                            <div className="bento-main-chart">
                                <ConsumptionChart />
                            </div>

                            <div className="bento-side-info">
                                <RoomInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Dashboard;