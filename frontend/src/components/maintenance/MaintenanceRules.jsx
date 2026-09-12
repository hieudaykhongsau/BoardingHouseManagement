import { Shield, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MaintenanceRules = () => {
    const { t } = useTranslation();

    return (
        <div className="glass-panel rules-card">
            <div className="section-header-row">
                <div className="icon-box secondary">
                    <Shield size={24} />
                </div>
                <h3 className="text-title">{t('maintenance.rules_title')}</h3>
            </div>

            <div className="rules-list">
                <div className="rule-item">
                    <CheckCircle className="rule-icon" size={20} />
                    <div>
                        <h4 className="rule-title">{t('maintenance.rule_security_title')}</h4>
                        <p className="rule-desc">{t('maintenance.rule_security_desc')}</p>
                    </div>
                </div>
                <div className="rule-item">
                    <CheckCircle className="rule-icon" size={20} />
                    <div>
                        <h4 className="rule-title">{t('maintenance.rule_clean_title')}</h4>
                        <p className="rule-desc">{t('maintenance.rule_clean_desc')}</p>
                    </div>
                </div>
                <div className="rule-item">
                    <CheckCircle className="rule-icon" size={20} />
                    <div>
                        <h4 className="rule-title">{t('maintenance.rule_pets_title')}</h4>
                        <p className="rule-desc">{t('maintenance.rule_pets_desc')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceRules;
