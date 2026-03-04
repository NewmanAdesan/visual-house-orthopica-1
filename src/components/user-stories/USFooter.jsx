import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import './USFooter.css';

const content = {
    en: {
        copy: "Visual House Ortoptica — Solution Proposal — Companion Document",
        backLink: "Back to Proposal"
    },
    es: {
        copy: "Visual House Ortoptica — Propuesta de Solución — Documento Complementario",
        backLink: "Volver a la Propuesta"
    }
};

export default function USFooter() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="doc-footer">
            <p>{t.copy}</p>
            <Link to="/">
                {t.backLink}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </Link>
        </div>
    );
}
