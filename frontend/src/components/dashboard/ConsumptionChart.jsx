import '../../assets/css/ConsumptionChart.css';

const ConsumptionChart = () => {
    return (
        <div className="chart-card glass-panel">
            <div className="chart-header">
                <h3>Xu hướng tiêu thụ (6 tháng)</h3>
                <button className="btn-detail">Chi tiết</button>
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
                    <span>T1</span>
                    <span>T2</span>
                    <span>T3</span>
                    <span>T4</span>
                    <span>T5</span>
                    <span>T6</span>
                </div>
            </div>

            <div className="chart-legend">
                <div className="legend-item">
                    <div className="legend-color legend-electric"></div>
                    <span>Điện (kWh)</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color legend-water"></div>
                    <span>Nước (m³)</span>
                </div>
            </div>
        </div>
    );
};

export default ConsumptionChart;
