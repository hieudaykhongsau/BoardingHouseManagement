import { Headset, ImagePlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MaintenanceForm = () => {
    const { t } = useTranslation();

    return (
        <div className="glass-panel support-form-card" style={{ position: 'sticky', top: '100px' }}>
            <div className="section-header-row">
                <div className="icon-box accent">
                    <Headset size={24} />
                </div>
                <h3 className="text-title">{t('maintenance.form_title')}</h3>
            </div>

            <form className="support-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label className="form-label" htmlFor="issue-type">{t('maintenance.req_type')}</label>
                    <select id="issue-type" className="form-select">
                        <option>{t('maintenance.req_type_plumbing')}</option>
                        <option>{t('maintenance.req_type_security')}</option>
                        <option>{t('maintenance.req_type_billing')}</option>
                        <option>{t('maintenance.req_type_feedback')}</option>
                        <option>{t('maintenance.req_type_other')}</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">{t('maintenance.priority')}</label>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input type="radio" name="urgency" value="normal" className="radio-input" defaultChecked />
                            {t('maintenance.priority_normal')}
                        </label>
                        <label className="radio-label urgent-radio">
                            <input type="radio" name="urgency" value="high" className="radio-input urgent-radio-input" />
                            {t('maintenance.priority_urgent')}
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="message">{t('maintenance.details_label')}</label>
                    <textarea id="message" className="form-textarea" rows={4} placeholder={t('maintenance.details_placeholder')}></textarea>
                </div>

                <div className="form-group">
                    <label className="form-label">{t('maintenance.attach_photo')}</label>
                    <label className="file-upload-box">
                        <ImagePlus className="file-upload-icon" size={32} />
                        <div className="file-upload-text">
                            <span>{t('maintenance.upload_hint_span')}</span> {t('maintenance.upload_hint_drag')}
                        </div>
                        <div className="file-upload-meta">{t('maintenance.upload_limit')}</div>
                        <input type="file" style={{ display: 'none' }} />
                    </label>
                </div>

                <button type="submit" className="glass-button primary submit-btn">
                    {t('maintenance.submit_btn')}
                </button>
            </form>
        </div>
    );
};

export default MaintenanceForm;
