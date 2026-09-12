import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
    const { t } = useTranslation();

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: 'var(--bg-base, #0b0f19)',
            color: 'var(--text-primary, #f8fafc)',
            fontFamily: 'sans-serif',
            padding: '24px',
            textAlign: 'center'
        },
        title: {
            fontSize: '5rem',
            fontWeight: 'bold',
            color: 'var(--emerald-text, #10b981)',
            margin: '0 0 1rem 0'
        },
        text: {
            fontSize: '1.25rem',
            color: 'var(--text-secondary, #94a3b8)',
            marginBottom: '2rem'
        },
        button: {
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--accent, #3b82f6)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '9999px',
            fontWeight: '600',
            transition: 'all 0.2s ease'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.text}>{t('notFound.title')}</p>
            <Link to="/" style={styles.button}>
                {t('notFound.back_home')}
            </Link>
        </div>
    );
};

export default NotFound;
