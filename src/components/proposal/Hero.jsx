import { useLanguage } from '../../context/LanguageContext';
import HeroCanvas from './HeroCanvas';
import './Hero.css';

const content = {
    en: {
        tag: "Visual House Ortoptica × [Your Team Name] — 2026",
        titlePart1: "Your Therapy Works.",
        titlePart2: "Now Let It Scale.",
        sub: "We read your brief. Then we read between the lines. What follows is not a pitch — it is proof that we understand what you are actually building.",
        cta: "See What We Found",
        scrollHint: "Scroll to explore"
    },
    es: {
        tag: "[ES] Visual House Ortoptica × [Your Team Name] — 2026",
        titlePart1: "[ES] Your Therapy Works.",
        titlePart2: "[ES] Now Let It Scale.",
        sub: "[ES] We read your brief. Then we read between the lines. What follows is not a pitch — it is proof that we understand what you are actually building.",
        cta: "[ES] See What We Found",
        scrollHint: "[ES] Scroll to explore"
    }
};

export default function Hero() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="hero">
            <HeroCanvas />
            <div className="hero-tag">{t.tag}</div>
            <h1 className="hero-title">
                {t.titlePart1}<br /><em>{t.titlePart2}</em>
            </h1>
            <p className="hero-sub">{t.sub}</p>
            <a href="#understanding" className="hero-cta">
                {t.cta}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3v14M3 10l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </a>
            <div className="hero-scroll-hint">{t.scrollHint}</div>
        </section>
    );
}
