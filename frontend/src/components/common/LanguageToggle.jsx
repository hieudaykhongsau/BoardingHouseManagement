import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

/**
 * Reusable LanguageToggle component
 * Allows switching between Vietnamese ('vi') and English ('en')
 * 
 * @param {Object} props
 * @param {string} [props.className] - Optional custom CSS classes
 * @param {Object} [props.style] - Optional custom inline styles
 * @param {boolean} [props.showLabel=true] - Whether to show the language code (VI/EN) next to the icon
 * @param {boolean} [props.compact=false] - Icon-only compact mode
 */
const LanguageToggle = ({
    className = '',
    style = {},
    showLabel = true,
    compact = false,
    ...props
}) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language?.startsWith('vi') ? 'vi' : 'en';

    const toggleLanguage = () => {
        const nextLang = currentLang === 'vi' ? 'en' : 'vi';
        i18n.changeLanguage(nextLang);
        localStorage.setItem('language', nextLang);
    };

    const label = currentLang === 'vi' ? 'VI' : 'EN';
    const tooltip = currentLang === 'vi'
        ? 'Chuyển sang Tiếng Anh / Switch to English'
        : 'Chuyển sang Tiếng Việt / Switch to Vietnamese';

    return (
        <button
            type="button"
            onClick={toggleLanguage}
            className={`glass-button language-toggle-btn ${className}`}
            title={tooltip}
            aria-label={tooltip}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: compact || !showLabel ? '8px' : '8px 12px',
                fontSize: '13px',
                fontWeight: 600,
                textTransform: 'uppercase',
                userSelect: 'none',
                cursor: 'pointer',
                ...style,
            }}
            {...props}
        >
            <Globe size={16} />
            {showLabel && !compact && <span>{label}</span>}
        </button>
    );
};

export default LanguageToggle;
