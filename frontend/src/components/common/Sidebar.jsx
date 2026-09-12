import { HomeIcon, LayoutDashboard, ReceiptText, Wrench, ChartColumn, UserPen, LogOut } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import '../../assets/css/Sidebar.css';
import { tenantData } from '../../data/mockData';
import getNavClass from '../../assets/js/activeRoute';
import { useAuth } from '../../auth/context/AuthContext';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

const Sidebar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { t } = useTranslation();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <aside className="sidebar glass-panel">
            <NavLink to="/dashboard" className="sidebar-header">
                <div className="logo-icon">
                    <HomeIcon />
                </div>
                <h2>House Management</h2>
            </NavLink>

            <nav className="sidebar-nav">
                <NavLink to="/dashboard" className={getNavClass(pathname, '/dashboard')}>
                    <LayoutDashboard className="nav-icon" />
                    {t('sidebar.dashboard')}
                </NavLink>
                <NavLink to="/invoices" className={getNavClass(pathname, '/invoices')}>
                    <ReceiptText className="nav-icon" />
                    {t('sidebar.invoices')}
                </NavLink>
                <NavLink to="/reports" className={getNavClass(pathname, '/reports')}>
                    <ChartColumn />
                    {t('sidebar.reports')}
                </NavLink>
                <NavLink to="/profiles" className={getNavClass(pathname, '/profiles')}>
                    <UserPen />
                    {t('sidebar.profiles')}
                </NavLink>
                <NavLink to="/maintenance" className={getNavClass(pathname, '/maintenance')}>
                    <Wrench className="nav-icon" />
                    {t('sidebar.maintenance')}
                </NavLink>
                <br />
                <button
                    onClick={handleLogout}
                    className="glass-button"
                    title={t('common.logout') || t('sidebar.logout')}
                >
                    <LogOut size={20} color="#ff4b4b" />
                </button>
            </nav>

            <div className="sidebar-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <div className="user-profile" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                    <div className="avatar" style={{ overflow: 'hidden', flexShrink: 0 }}>
                        {user?.avatar ? (
                            <img src={user.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                        ) : (
                            (user?.name || tenantData.name).charAt(0).toUpperCase()
                        )}
                    </div>
                    <div className="user-info" style={{ minWidth: 0 }}>
                        <p className="text-sm user-name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {user?.name || tenantData.name}
                        </p>
                        <p className="text-label user-room" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email || tenantData.roomNumber}</p>
                    </div>
                </div>
                <LanguageToggle style={{ padding: '8px 10px', borderRadius: '8px', fontSize: '12px' }} />
            </div>
        </aside>
    );
};

export default Sidebar;
