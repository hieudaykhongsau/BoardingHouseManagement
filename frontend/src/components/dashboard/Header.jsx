import { Bell } from "lucide-react";
import '../../assets/css/Header.css';
import { tenantData } from '../../data/mockData';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const locale = i18n.language?.startsWith('vi') ? 'vi-VN' : 'en-US';

    const currentDate = new Date().toLocaleDateString(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <header className="header">
            <div className="header-greeting">
                <p className="text-sm date-text">{currentDate}</p>
                <h1 className="text-headline">{t('dashboard.greeting')}, <span style={{ color: 'var(--emerald-text)' }}>{tenantData.name.split(' ').pop()}</span></h1>
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
