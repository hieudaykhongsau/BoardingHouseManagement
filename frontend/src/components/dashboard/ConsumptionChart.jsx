import '../../assets/css/ConsumptionChart.css';
import { useTranslation } from 'react-i18next';

const ConsumptionChart = () => {
    const { t, i18n } = useTranslation();
    const isVi = i18n.language?.startsWith('vi');

    return (
        <div className="chart-card glass-panel">
            <div className="chart-header">
                <h3>{t('dashboard.consumption_trend')}</h3>
                <button className="btn-detail">{t('dashboard.detail')}</button>
            </div>

            <div className="chart-area">
                <div className="chart-y-axis">
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                </div>

                <div className="chart-bars">
                    <div className="bar-group"><div className="bar electric" style={{ height: '60%' }}></div></div>
                    <div className="bar-group"><div className="bar electric" style={{ height: '75%' }}></div></div>
                    <div className="bar-group"><div className="bar electric" style={{ height: '50%' }}></div></div>
                    <div className="bar-group"><div className="bar electric" style={{ height: '80%' }}></div></div>
                    <div className="bar-group"><div className="bar electric" style={{ height: '65%' }}></div></div>
                    <div className="bar-group"><div className="bar electric" style={{ height: '90%' }}></div></div>
                </div>

                <div className="chart-x-axis">
                    <span>{isVi ? 'T1' : 'Jan'}</span>
                    <span>{isVi ? 'T2' : 'Feb'}</span>
                    <span>{isVi ? 'T3' : 'Mar'}</span>
                    <span>{isVi ? 'T4' : 'Apr'}</span>
                    <span>{isVi ? 'T5' : 'May'}</span>
                    <span>{isVi ? 'T6' : 'Jun'}</span>
                </div>
            </div>

            <div className="chart-legend">
                <div className="legend-item">
                    <div className="legend-color legend-electric"></div>
                    <span>{t('dashboard.electric_label')}</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color legend-water"></div>
                    <span>{t('dashboard.water_label')}</span>
                </div>
            </div>
        </div>
    );
};

export default ConsumptionChart;
