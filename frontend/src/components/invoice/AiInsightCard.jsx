import { useTranslation } from 'react-i18next';

const AiInsightCard = () => {
  const { t } = useTranslation();

  return (
    <div className="ai-insight-card">
      {/* decorative background icon */}
      <span className="ai-insight-bg-icon" aria-hidden="true">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
        </svg>
      </span>

      <h4 className="ai-insight-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
        {t('invoices.ai_title')}
      </h4>
      <p className="ai-insight-text">
        {t('invoices.ai_desc')}
      </p>
      <a className="ai-insight-link" href="#">{t('invoices.ai_view_chart')}</a>
    </div>
  );
};

export default AiInsightCard;
