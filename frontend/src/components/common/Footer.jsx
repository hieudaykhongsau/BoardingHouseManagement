import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="home-footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="text-title">V-Rentals</span>
                    <p className="text-sm">{t('home.footer_rights')}</p>
                </div>

                <div className="footer-links">
                    <a href="#">{t('home.footer_privacy')}</a>
                    <a href="#">{t('home.footer_terms')}</a>
                    <a href="#">{t('home.footer_contact')}</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;