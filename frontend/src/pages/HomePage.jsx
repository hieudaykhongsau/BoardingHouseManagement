import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/HomePage.css';
import GoogleIcon from "../assets/google-icon.svg";
import { CircleCheckBig, ReceiptText, ChartNoAxesCombined, Headset, Sparkles, LayoutDashboard, LogOut } from 'lucide-react';
import { useAuth } from '../auth/context/AuthContext';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import showToast from '../utils/toast';
import { handleAuthError } from '../auth/utils/authErrorHandler';
import LanguageToggle from '../components/common/LanguageToggle';

const HomePage = () => {
    const { user, loginWithGoogle, logout } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleGoogleLogin = async () => {
        if (isLoggingIn) return;
        setIsLoggingIn(true);
        try {
            await loginWithGoogle();
            showToast.success(t('auth.login_success'));
            navigate('/dashboard');
        } catch (error) {
            console.error("Đăng nhập thất bại:", error);
            handleAuthError(error);
        } finally {
            setIsLoggingIn(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        showToast.success(t('auth.logout_success'));
    };

    return (
        <div className="home-container">
            {/* Navigation */}
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
                                    onClick={handleLogout}
                                    className="glass-button"
                                    title={t('common.logout')}
                                    style={{ display: 'inline-flex', alignItems: 'center', padding: '8px 12px' }}
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={handleGoogleLogin}
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
            </nav>

            <main className="home-main">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="text-display">
                            {t('home.hero_title')}
                        </h1>
                        <p className="text-body">
                            {t('home.hero_subtitle')}
                        </p>
                        <div className="hero-actions">
                            <button
                                onClick={user ? () => navigate('/dashboard') : handleGoogleLogin}
                                className="glass-button primary"
                            >
                                {user ? t('home.go_to_dashboard') : t('home.get_started')}
                            </button>
                            <a href="#features" className="glass-button" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                                {t('home.learn_more')}
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-wrapper">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6qtp3Ic0_LTJ3oRG6mv9GhP_tgUo_bzPc2F5piQKVFVOXn4LCFl_EiOyZGWtstiVADodDragKavHHpB7zKO6gy97O8gVsTEHgEmLonXMsQbYSA4UckhbjZRUHdpvkJ4HLzO2vpsJk_mlU0Sq1nNM-6amhKY5cX5Mb7YRQkqsoRHN1iaGFtGTkmfag5aFdKA_VDKMVXescSoefAdLeIrwOMUaWCkpiWFOirXeRY-qFJSY4gUznouU1hA"
                            alt="Modern apartment interior"
                        />

                        <div className="floating-status">
                            <div className="icon-wrapper">
                                <CircleCheckBig className="material-symbols-outlined" />
                            </div>
                            <div className="floating-status-text">
                                <h4>{t('home.floating_rent')}</h4>
                                <p>{t('home.floating_paid')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="features-section">
                    <div className="features-inner">
                        <div className="features-header">
                            <h2 className="text-headline">{t('home.features_title')}</h2>
                            <p className="text-body">{t('home.features_subtitle')}</p>
                        </div>

                        <div className="features-grid">
                            {/* Feature 1 */}
                            <div className="glass-card feature-card">
                                <div className="feature-icon primary">
                                    <ReceiptText className="material-symbols-outlined" />
                                </div>
                                <h3>{t('home.feature1_title')}</h3>
                                <p>{t('home.feature1_desc')}</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="glass-card feature-card">
                                <div className="feature-icon secondary">
                                    <ChartNoAxesCombined className="material-symbols-outlined" />
                                </div>
                                <h3>{t('home.feature2_title')}</h3>
                                <p>{t('home.feature2_desc')}</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="glass-card feature-card">
                                <div className="feature-icon tertiary">
                                    <Headset className="material-symbols-outlined" />
                                </div>
                                <h3>{t('home.feature3_title')}</h3>
                                <p>{t('home.feature3_desc')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="testimonial-section">
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', color: '#f59e0b' }}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Sparkles key={index} size={25} />
                        ))}
                    </div>
                    <blockquote>
                        &quot;{t('home.testimonial_quote')}&quot;
                    </blockquote>

                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9uK2IEWs4eA3hLIFP2jc4Hco0eqjSf17l07LnvV934dq4k5wEIuHvmi3XpxsL0I6JWMGYud70_tQv_JDQsaAa4Zo04fFhHVukVZEpE9UHAlOF1tydUbBrVfeyzqrONK6K3oyHmt6CdyF8I6kEYDeSIr6EC1bJBabcqoyj94iqTHcTldYocNNSNYAvj9YPg5xLKq8S1ZML6k03QYQnBlV3sQglYtulVJL8A-iTORbcEnfkLm3cGdU5Bw"
                                alt="Nguyen Van A"
                            />
                        </div>
                        <div className="author-info">
                            <h4>{t('home.testimonial_author')}</h4>
                            <p>{t('home.testimonial_role')}</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="home-footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <span className="text-title">V-Rentals</span>
                        <p className="text-sm">{t('home.footer_rights')}</p>
                    </div>

                    <div className="footer-links">
                        <a href="#">{t('home.footer_privacy')}</a>
                        <a href="#">{t('home.footer_terms')}</a>
                        <a href="#">{t('home.footer_contact')}</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
