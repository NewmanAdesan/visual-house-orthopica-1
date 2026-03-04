import { useLanguage } from '../../context/LanguageContext';
import HeroCanvas from './HeroCanvas';
import './Hero.css';

const content = {
    en: {
        tag: "Visual House Ortoptica × [Newman-Timi] — 2026",
        titlePart1: "Your Therapy Works.",
        titlePart2: "Now Let It Scale.",
        sub: "We read your brief. Then we read between the lines. What follows is not a pitch — it is proof that we understand what you are actually building.",
        cta: "See What We Found",
        scrollHint: "Scroll to explore"
    },
    es: {
        tag: "Visual House Ortoptica × [Newman-Timi] — 2026",
        titlePart1: "Su Terapia Funciona.",
        titlePart2: "Ahora Déjela Escalar.",
        sub: "Leímos su brief. Luego leímos entre líneas. Lo que sigue no es una propuesta comercial — es la prueba de que entendemos lo que realmente están construyendo.",
        cta: "Ver Lo Que Encontramos",
        scrollHint: "Desplácese para explorar"
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
