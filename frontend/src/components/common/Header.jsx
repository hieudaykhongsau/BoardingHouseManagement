
import LanguageToggle from "./LanguageToggle";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LayoutDashboard, LogOut } from "lucide-react";
import GoogleIcon from "../../assets/google-icon.svg";

const Header = ({ user, isLoggingIn, onGoogleLogin, onLogout }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <nav className="home-nav">
            <div className="nav-inner">
                <Link to="/" className="nav-brand">
                    <img src="/logo.png" alt="V-Rentals Logo" className="nav-logo" />
                    <div className="nav-brand-text">
                        <span>House</span>
                        <span>Management</span>
                    </div>
                </Link>
                <div className="nav-links">
                    <a href="#features" className="nav-link">{t('nav.features')}</a>
                    <a href="#pricing" className="nav-link">{t('nav.pricing')}</a>
                    <a href="#about" className="nav-link">{t('nav.about')}</a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <LanguageToggle />

                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="glass-button primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}
                            >
                                <LayoutDashboard size={18} />
                                <span>{t('common.dashboard')}</span>
                            </button>
                            <button
                                onClick={onLogout}
                                className="glass-button"
                                title={t('common.logout')}
                                style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 12px' }}
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={onGoogleLogin}
                            disabled={isLoggingIn}
                            className="glass-button primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', opacity: isLoggingIn ? 0.7 : 1, cursor: isLoggingIn ? 'wait' : 'pointer' }}
                        >
                            <img src={GoogleIcon} alt="Google Icon" style={{ width: '20px', height: '20px' }} />
                            <span>{isLoggingIn ? t('auth.logging_in') : t('auth.login_google')}</span>
                        </button>
                    )}
                </div>
            </div>
        </nav >
    );
}

export default Header;