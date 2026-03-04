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
        tag: "Listos Cuando Ustedes Lo Estén",
        titlePart1: "Construyamos Algo",
        titlePart2: "Digno de Licenciar.",
        sub: "Esta propuesta es el comienzo de la conversación, no el final. Hemos entendido el problema. Hemos mapeado el sistema. Lo que sigue es construirlo — juntos. Un sistema que sirva a pacientes reales y escale un negocio real.",
        ctaText: "Iniciar la Conversación"
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
