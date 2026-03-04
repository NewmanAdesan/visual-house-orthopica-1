import { useLanguage } from '../../context/LanguageContext';
import ClosingCanvas from './ClosingCanvas';
import './Closing.css';

const content = {
    en: {
        tag: "Ready When You Are",
        titlePart1: "Let's Build Something",
        titlePart2: "Worth Licensing.",
        sub: "This proposal is the beginning of the conversation, not the end of it. We have understood the problem. We have mapped the system. What comes next is building it — together. A system that serves real patients and scales a real business.",
        ctaText: "Start the Conversation"
    },
    es: {
        tag: "[ES] Ready When You Are",
        titlePart1: "[ES] Let's Build Something",
        titlePart2: "[ES] Worth Licensing.",
        sub: "[ES] This proposal is the beginning of the conversation, not the end of it. We have understood the problem. We have mapped the system. What comes next is building it — together. A system that serves real patients and scales a real business.",
        ctaText: "[ES] Start the Conversation"
    }
};

export default function Closing() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="closing">
            <ClosingCanvas />
            <div className="closing-tag">{t.tag}</div>
            <h2 className="closing-title">
                {t.titlePart1}<br /><em>{t.titlePart2}</em>
            </h2>
            <p className="closing-sub">{t.sub}</p>
            <a href="mailto:placeholder@email.com" className="closing-cta">
                {t.ctaText}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </a>
        </section>
    );
}
