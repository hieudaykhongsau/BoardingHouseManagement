import { useTranslation } from 'react-i18next';
import Sidebar from '../components/common/Sidebar';
import { tenantData } from '../data/mockData';
import { Phone, Mail, IdCard, Edit2, FileText, Wallet, Download, BellRing, MessageSquare } from 'lucide-react';
import '../assets/css/Dashboard.css';
import '../assets/css/Profiles.css';

const Profiles = () => {
    const { t } = useTranslation();

    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="dashboard-main">
                <div className="dashboard-inner">

                    <div className="dashboard-content">
                        <div className="page-title-section">
                            <div className="title-left">
                                <h2>{t('profiles.title')}</h2>
                                <p>{t('profiles.subtitle')}</p>
                            </div>
                        </div>

                        <div className="profiles-grid">
                            {/* Profile Side */}
                            <div className="profile-side">
                                <div className="glass-panel profile-card">
                                    <div className="avatar-wrapper">
                                        <div className="profile-avatar">
                                            {tenantData.name.charAt(0)}
                                        </div>
                                        <button className="edit-avatar-btn" aria-label="Edit avatar">
                                            <Edit2 size={16} />
                                        </button>
                                    </div>
                                    <h3 className="profile-name">{tenantData.name}</h3>
                                    <p className="profile-role">{t('profiles.primary_tenant')}</p>

                                    <div className="profile-info-list">
                                        <div className="info-item">
                                            <Phone />
                                            <span>0912 345 678</span>
                                        </div>
                                        <div className="info-item">
                                            <Mail />
                                            <span>nguyenvana@email.com</span>
                                        </div>
                                        <div className="info-item">
                                            <IdCard />
                                            <span>079012345678</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="profile-main">
                                {/* Contract Info */}
                                <div className="glass-panel" style={{ padding: '24px' }}>
                                    <div className="section-header">
                                        <h3>
                                            <FileText size={20} />
                                            {t('profiles.contract_info')}
                                        </h3>
                                        <span className="status-chip status-paid">{t('profiles.contract_active')}</span>
                                    </div>

                                    <div className="contract-grid">
                                        <div className="contract-box">
                                            <div className="contract-label">{t('profiles.contract_start')}</div>
                                            <div className="contract-val">01/01/2026</div>
                                        </div>
                                        <div className="contract-box">
                                            <div className="contract-label">{t('profiles.contract_end')}</div>
                                            <div className="contract-val">31/12/2026</div>
                                        </div>
                                        <div className="contract-box full-width">
                                            <div>
                                                <div className="contract-label">{t('profiles.monthly_rent')}</div>
                                                <div className="contract-val highlight">8,000,000 đ</div>
                                            </div>
                                            <Wallet size={24} className="download-icon" />
                                        </div>
                                    </div>

                                    <div className="file-download-card">
                                        <div className="file-info">
                                            <div className="file-icon">
                                                <FileText size={24} />
                                            </div>
                                            <div>
                                                <div className="file-name">Hop_dong_thue_nha_2026.pdf</div>
                                                <div className="file-meta">2.4 MB • {t('profiles.signed_electronically')}</div>
                                            </div>
                                        </div>
                                        <Download size={20} className="download-icon" />
                                    </div>
                                </div>

                                {/* Notification Settings */}
                                <div className="glass-panel" style={{ padding: '24px' }}>
                                    <div className="section-header">
                                        <h3>
                                            <BellRing size={20} />
                                            {t('profiles.notification_settings')}
                                        </h3>
                                    </div>

                                    <div className="settings-list">
                                        <label className="setting-item">
                                            <div className="setting-info">
                                                <Mail size={24} />
                                                <div>
                                                    <div className="setting-title">{t('profiles.receive_via_email')}</div>
                                                    <div className="setting-desc">{t('profiles.email_notif_desc')}</div>
                                                </div>
                                            </div>
                                            <input type="checkbox" defaultChecked />
                                        </label>

                                        <label className="setting-item">
                                            <div className="setting-info">
                                                <MessageSquare size={24} />
                                                <div>
                                                    <div className="setting-title">{t('profiles.receive_via_zalo')}</div>
                                                    <div className="setting-desc">{t('profiles.zalo_notif_desc')}</div>
                                                </div>
                                            </div>
                                            <input type="checkbox" />
                                        </label>
                                    </div>

                                    <div className="save-btn-wrapper">
                                        <button className="glass-button primary">{t('profiles.save_changes')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profiles;
