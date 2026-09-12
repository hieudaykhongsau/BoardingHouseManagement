import '../../assets/css/FinancialCards.css';
import TrendIcon from '../../ui/TrendIcon';
import { ReceiptText, Zap, Droplet } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FinancialCards = () => {
    const { t } = useTranslation();

    return (
        <div className="financial-summary-grid">
            {/* Điện */}
            <div className="summary-card glass-panel">
                <div className="card-top">
                    <div className="icon-box icon-electric">
                        <Zap />
                    </div>
                    <span className="trend-badge trend-up">
                        <TrendIcon trend={'up'} />
                        +5%
                    </span>
                </div>
                <div className="card-bottom">
                    <p className="card-label">{t('dashboard.electric_consumption')}</p>
                    <h3 className="card-value">342 <span>kWh</span></h3>
                </div>
            </div>

            {/* Nước */}
            <div className="summary-card glass-panel">
                <div className="card-top">
                    <div className="icon-box icon-water">
                        <Droplet />
                    </div>
                    <span className="trend-badge trend-down">
                        <TrendIcon trend={'down'} />
                        -2%
                    </span>
                </div>
                <div className="card-bottom">
                    <p className="card-label">{t('dashboard.water_consumption')}</p>
                    <h3 className="card-value">12 <span>m³</span></h3>
                </div>
            </div>

            {/* Bill Status */}
            <div className="summary-card glass-panel">
                <div className="card-top">
                    <div className="icon-box icon-bill">
                       <ReceiptText />
                    </div>
                    <span className="trend-badge status-paid">
                        {t('dashboard.paid')}
                    </span>
                </div>
                <div className="card-bottom">
                    <p className="card-label">{t('dashboard.previous_invoice')}</p>
                    <h3 className="card-value">8,450,000 <span>VND</span></h3>
                </div>
            </div>
        </div>
    );
};

export default FinancialCards;
