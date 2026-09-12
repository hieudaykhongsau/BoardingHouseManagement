import { useTranslation } from 'react-i18next';
import Sidebar from '../components/common/Sidebar';
import MaintenanceContact from '../components/maintenance/MaintenanceContact';
import MaintenanceRules from '../components/maintenance/MaintenanceRules';
import MaintenanceForm from '../components/maintenance/MaintenanceForm';
import '../assets/css/Dashboard.css';
import '../assets/css/Maintenance.css';

const Maintenance = () => {
    const { t } = useTranslation();

    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="dashboard-main">
                <div className="dashboard-inner">
                    <div className="dashboard-content">
                        <div className="page-title-section">
                            <div className="title-left">
                                <h2>{t('maintenance.title')}</h2>
                                <p>{t('maintenance.subtitle')}</p>
                            </div>
                        </div>

                        <div className="maintenance-grid">
                            {/* Left Column */}
                            <div className="maintenance-left">
                                <MaintenanceContact />
                                <MaintenanceRules />
                            </div>

                            {/* Right Column */}
                            <div className="maintenance-right">
                                <MaintenanceForm />
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Maintenance;
