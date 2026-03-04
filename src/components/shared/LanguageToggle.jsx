import { useLanguage } from '../../context/LanguageContext';
import './LanguageToggle.css';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();
    return (
        <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
            {language.toUpperCase()}
        </button>
    );
}
