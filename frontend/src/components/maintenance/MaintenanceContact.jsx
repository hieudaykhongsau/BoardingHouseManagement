import { Building2, Phone, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MaintenanceContact = () => {
    const { t } = useTranslation();

    return (
        <div className="glass-panel contact-card">
            <div className="section-header-row">
                <div className="icon-box primary">
                    <Building2 size={24} />
                </div>
                <h3 className="text-title">{t('maintenance.bldg_management')}</h3>
            </div>

            <div className="contact-info-grid">
                <div className="contact-box">
                    <div className="contact-label">{t('maintenance.mgmt_company')}</div>
                    <div className="contact-val">Vinhomes Property Management</div>
                </div>
                <div className="contact-box">
                    <div className="contact-label">{t('maintenance.support_office')}</div>
                    <div className="contact-val">Tầng 1, Tòa Landmark 1, Vinhomes Central Park</div>
                </div>
                <div className="contact-box full-width">
                    <div>
                        <div className="contact-label">{t('maintenance.hotline')}</div>
                        <div className="contact-val primary-text">1900 1234</div>
                    </div>
                    <button className="action-btn call" aria-label="Call hotline">
                        <Phone size={20} />
                    </button>
                </div>
                <div className="contact-box full-width urgent">
                    <div>
                        <div className="contact-label urgent-text">{t('maintenance.urgent_tech')}</div>
                        <div className="contact-val">0909 888 999</div>
                    </div>
                    <button className="action-btn urgent-call" aria-label="Emergency call">
                        <Wrench size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MaintenanceContact;
