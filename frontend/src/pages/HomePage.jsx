import { Link } from 'react-router-dom';
import '../assets/css/HomePage.css';
import GoogleIcon from "../assets/google-icon.svg";
import { CircleCheckBig, ReceiptText, ChartNoAxesCombined, Headset, Sparkles } from 'lucide-react'
const HomePage = () => {
    return (
        <div className="home-container">
            {/* Navigation */}
            <nav className="home-nav">
                <div className="nav-inner">
                    <Link to="/" className="nav-brand">
                        <img src="/logo.png" alt="V-Rentals Logo" className="nav-logo" />
                        <div className="nav-brand-text">
                            <span>House</span>
                            <span>Management</span>
                        </div>
                    </Link>
                    <div className="nav-links">
                        <a href="#features" className="nav-link">Tính năng</a>
                        <a href="#pricing" className="nav-link">Bảng giá</a>
                        <a href="#about" className="nav-link">Về chúng tôi</a>
                    </div>
                    <button
                        onClick={()=>console.log("DMM")}
                        className="glass-button primary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}
                    >
                        <img src={GoogleIcon} alt="Google Icon" style={{ width: '20px', height: '20px' }} />
                        <span>Đăng nhập</span>
                    </button>
                </div>
            </nav>

            <main className="home-main">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="text-display">
                            Quản lý thuê nhà thông minh, minh bạch và hiệu quả
                        </h1>
                        <p className="text-body">
                            Nền tảng tối ưu hóa quy trình quản lý bất động sản tại Việt Nam, mang đến trải nghiệm thuận tiện nhất cho cả chủ nhà và khách thuê thông qua tự động hóa và dữ liệu trực quan.
                        </p>
                        <div className="hero-actions">
                            <button className="glass-button primary">Bắt đầu ngay</button>
                            <button className="glass-button">Tìm hiểu thêm</button>
                        </div>
                    </div>

                    <div className="hero-image-wrapper">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6qtp3Ic0_LTJ3oRG6mv9GhP_tgUo_bzPc2F5piQKVFVOXn4LCFl_EiOyZGWtstiVADodDragKavHHpB7zKO6gy97O8gVsTEHgEmLonXMsQbYSA4UckhbjZRUHdpvkJ4HLzO2vpsJk_mlU0Sq1nNM-6amhKY5cX5Mb7YRQkqsoRHN1iaGFtGTkmfag5aFdKA_VDKMVXescSoefAdLeIrwOMUaWCkpiWFOirXeRY-qFJSY4gUznouU1hA"
                            alt="Modern apartment interior"
                        />

                        <div className="floating-status">
                            <div className="icon-wrapper">
                                <CircleCheckBig className="material-symbols-outlined" />
                            </div>
                            <div className="floating-status-text">
                                <h4>Tiền thuê tháng này</h4>
                                <p>Đã thanh toán</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="features-section">
                    <div className="features-inner">
                        <div className="features-header">
                            <h2 className="text-headline">Tính năng nổi bật</h2>
                            <p className="text-body">Trải nghiệm nền tảng quản lý hiện đại nhất.</p>
                        </div>

                        <div className="features-grid">
                            {/* Feature 1 */}
                            <div className="glass-card feature-card">
                                <div className="feature-icon primary">
                                    <ReceiptText className="material-symbols-outlined" />
                                </div>
                                <h3>Quản lý hóa đơn thông minh</h3>
                                <p>Tự động tạo, gửi và theo dõi trạng thái thanh toán. Cảnh báo quá hạn và tích hợp thanh toán trực tuyến nhanh chóng.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="glass-card feature-card">
                                <div className="feature-icon secondary">
                                    <ChartNoAxesCombined className="material-symbols-outlined" />
                                </div>
                                <h3>Phân tích AI chuyên sâu</h3>
                                <p>Dự đoán dòng tiền, phân tích xu hướng thuê và đề xuất giá thuê tối ưu dựa trên dữ liệu thị trường thực tế.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="glass-card feature-card">
                                <div className="feature-icon tertiary">
                                    <Headset className="material-symbols-outlined" />
                                </div>
                                <h3>Hỗ trợ 24/7</h3>
                                <p>Kênh giao tiếp trực tiếp giữa chủ nhà và khách thuê. Xử lý yêu cầu bảo trì và khiếu nại nhanh chóng, minh bạch.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Section */}
                <section className="testimonial-section">

                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', color: '#f59e0b' }}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Sparkles key={index} size={25} />
                        ))}
                    </div>
                    <blockquote>
                        "V-Rentals đã thay đổi hoàn toàn cách tôi quản lý căn hộ cho thuê. Mọi thứ từ hóa đơn đến giao tiếp với khách thuê đều trở nên đơn giản và chuyên nghiệp hơn rất nhiều."
                    </blockquote>

                    <div className="testimonial-author">
                        <div className="author-avatar">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9uK2IEWs4eA3hLIFP2jc4Hco0eqjSf17l07LnvV934dq4k5wEIuHvmi3XpxsL0I6JWMGYud70_tQv_JDQsaAa4Zo04fFhHVukVZEpE9UHAlOF1tydUbBrVfeyzqrONK6K3oyHmt6CdyF8I6kEYDeSIr6EC1bJBabcqoyj94iqTHcTldYocNNSNYAvj9YPg5xLKq8S1ZML6k03QYQnBlV3sQglYtulVJL8A-iTORbcEnfkLm3cGdU5Bw"
                                alt="Nguyen Van A"
                            />
                        </div>
                        <div className="author-info">
                            <h4>Nguyễn Văn A</h4>
                            <p>Chủ chuỗi căn hộ dịch vụ</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="home-footer">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <span className="text-title">V-Rentals</span>
                        <p className="text-sm">© 2026 V-Rentals. All rights reserved. Managed with trust in Vietnam.</p>
                    </div>

                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Contact Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
