import { Bell } from "lucide-react";
import '../../assets/css/Header.css';
import { tenantData } from '../../data/mockData';

const Header = () => {
    const currentDate = new Date().toLocaleDateString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <header className="header">
            <div className="header-greeting">
                <p className="text-sm date-text">{currentDate}</p>
                <h1 className="text-headline">Xin chào, <span style={{ color: 'var(--emerald-text)' }}>{tenantData.name.split(' ').pop()}</span></h1>
            </div>
            <div className="header-actions">
                <button className="notification-btn glass-card">
                    <Bell />
                    {tenantData.notifications > 0 && (
                        <span className="badge">{tenantData.notifications}</span>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
