import { useNavigate } from 'react-router-dom';
import '../assets/css/HomePage.css';
import { CircleCheckBig, ReceiptText, ChartNoAxesCombined, Headset, Sparkles } from 'lucide-react';
import { useAuth } from '../auth/context/AuthContext';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import showToast from '../utils/toast';
import { handleAuthError } from '../auth/utils/authErrorHandler';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

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
            <Header
                user={user}
                isLoggingIn={isLoggingIn}
                onGoogleLogin={handleGoogleLogin}
                onLogout={handleLogout}
            />

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

            <Footer />
        </div>
    );
};

export default HomePage;
