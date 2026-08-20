import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FinancialCards from '../components/FinancialCards';
import ConsumptionChart from '../components/ConsumptionChart';
import RoomInfo from '../components/RoomInfo';
import '../assets/css/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="dashboard-main">
                <div className="dashboard-inner">
                    <Header />

                    <div className="dashboard-content">
                        <div className="page-title-section">
                            <div className="title-left">
                                <h2>Tổng quan Căn hộ</h2>
                                <p>Theo dõi mức tiêu thụ và thông tin chi tiết.</p>
                            </div>

                            <div className="title-right">
                                <span className="status-badge-active">
                                    Đang thuê
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