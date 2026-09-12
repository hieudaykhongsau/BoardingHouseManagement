import '../../assets/css/Reports.css';
import { Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AIHabitsCard = () => {
    const { t } = useTranslation();

    return (
        <div className="report-ai-habits-card">
            <div className="report-ai-habits-bg-orb" />

            <div className="report-ai-habits-header">
                <Sparkles />
                <h3>{t('reports.habits_evaluation')}</h3>
            </div>

            <div className="report-ai-score-block">
                <span className="report-ai-score">B+</span>
                <span className="report-ai-score-label">{t('reports.score_label')}</span>
            </div>

            <p className="report-ai-habits-text">
                {t('reports.habits_desc_prefix')}{' '}
                <strong className="highlight-bad">20%</strong>{' '}
                {t('reports.habits_desc_mid')}{' '}
                <strong className="highlight-good">5%</strong>{' '}
                {t('reports.habits_desc_suffix')}
            </p>

            <div className="report-ai-updated-badge">
                <div className="report-ai-updated-dot" />
                <span className="report-ai-updated-text">{t('reports.updated_today')}</span>
            </div>
        </div>
    );
};

export default AIHabitsCard;
