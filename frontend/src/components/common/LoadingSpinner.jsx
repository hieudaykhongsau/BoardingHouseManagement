import '../../assets/css/LoadingSpinner.css';
import { useTranslation } from 'react-i18next';

const LoadingSpinner = () => {
    const { t } = useTranslation();

    return (
        <div className="spinner-container">
            <div className="custom-spinner"></div>
            <p style={{ color: 'var(--text-secondary, #94a3b8)', fontSize: '14px', fontWeight: 500 }}>
                {t('common.loading')}
            </p>
        </div>
    );
};

export default LoadingSpinner;
