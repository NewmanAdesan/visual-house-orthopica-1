import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';
import LanguageToggle from '../shared/LanguageToggle';
import './USHeader.css';

const content = {
    en: {
        navTitle: "User Stories & Acceptance Criteria",
        navBack: "Back to Proposal",
        headerTag: "Visual House Ortoptica — Companion Document",
        headerTitle1: "User Stories &",
        headerTitle2: "Acceptance Criteria",
        headerDesc: "Every action a user can take in the system, and exactly how the system should respond. Written in plain language so that clinical staff, developers, and decision-makers are reading from the same page.",
        tocTitle: "Contents",
        tocItems: [
            { id: "patient", num: "01", label: "The Patient Journey" },
            { id: "therapist", num: "02", label: "The Therapist Journey" },
            { id: "admin", num: "03", label: "The Administrator Journey" }
        ]
    },
    es: {
        navTitle: "[ES] User Stories & Acceptance Criteria",
        navBack: "[ES] Back to Proposal",
        headerTag: "[ES] Visual House Ortoptica — Companion Document",
        headerTitle1: "[ES] User Stories &",
        headerTitle2: "[ES] Acceptance Criteria",
        headerDesc: "[ES] Every action a user can take in the system, and exactly how the system should respond. Written in plain language so that clinical staff, developers, and decision-makers are reading from the same page.",
        tocTitle: "[ES] Contents",
        tocItems: [
            { id: "patient", num: "01", label: "[ES] The Patient Journey" },
            { id: "therapist", num: "02", label: "[ES] The Therapist Journey" },
            { id: "admin", num: "03", label: "[ES] The Administrator Journey" }
        ]
    }
};

export default function USHeader() {
    const { language } = useLanguage();
    const t = content[language];

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed nav
            const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="us-nav">
                <div className="nav-logo">{t.navTitle}</div>
                <div className="us-nav-actions">
                    <LanguageToggle />
                    <Link to="/" className="nav-back">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13 8H3M8 3L3 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <span className="hide-mobile">{t.navBack}</span>
                    </Link>
                </div>
            </nav>

            <div className="page-header">
                <ScrollReveal className="tag" delay={0}>{t.headerTag}</ScrollReveal>
                <ScrollReveal delay={80}>
                    <h1>{t.headerTitle1}<br />{t.headerTitle2}</h1>
                </ScrollReveal>
                <ScrollReveal delay={160}>
                    <p>{t.headerDesc}</p>
                </ScrollReveal>
            </div>

            <div className="toc">
                <ScrollReveal delay={240} className="toc-title">{t.tocTitle}</ScrollReveal>
                <ul className="toc-list">
                    {t.tocItems.map((item, index) => (
                        <ScrollReveal key={item.id} delay={320 + index * 80} as="li">
                            <a href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)}>
                                <span className="toc-num">{item.num}</span>
                                <span className="toc-label">{item.label}</span>
                            </a>
                        </ScrollReveal>
                    ))}
                </ul>
            </div>
        </>
    );
}
