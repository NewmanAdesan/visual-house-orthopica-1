import { useLanguage } from '../../context/LanguageContext';
import ClosingCanvas from './ClosingCanvas';
import './Closing.css';

const content = {
    en: {
        tag: "Ready When You Are",
        titlePart1: "Let's Build Something",
        titlePart2: "Worth Licensing.",
        sub: "This proposal is the beginning of the conversation, not the end of it. We have understood the problem. We have mapped the system. What comes next is building it — together. A system that serves real patients and scales a real business.",
        emailBtn: "Start the Conversation",
        whatsappBtn: "Message on WhatsApp",
        email: "josslance1995@gmail.com",
        phone: "+1 (753) 339-3442"
    },
    es: {
        tag: "Listos Cuando Ustedes Lo Estén",
        titlePart1: "Construyamos Algo",
        titlePart2: "Digno de Licenciar.",
        sub: "Esta propuesta es el comienzo de la conversación, no el final. Hemos entendido el problema. Hemos mapeado el sistema. Lo que sigue es construirlo — juntos. Un sistema que sirva a pacientes reales y escale un negocio real.",
        emailBtn: "Iniciar la Conversación",
        whatsappBtn: "Mensaje por WhatsApp",
        email: "josslance1995@gmail.com",
        phone: "+1 (753) 339-3442"
    }
};

const WHATSAPP_NUMBER = "17533393442";

export default function Closing() {
    const { language } = useLanguage();
    const t = content[language];

    const whatsappMessage = encodeURIComponent(
        language === 'es'
            ? "Hola, estamos interesados en discutir la propuesta de Visual House Ortoptica."
            : "Hello, we are interested in discussing the Visual House Ortoptica proposal."
    );

    return (
        <section id="closing">
            <ClosingCanvas />
            <div className="closing-tag">{t.tag}</div>
            <h2 className="closing-title">
                {t.titlePart1}<br /><em>{t.titlePart2}</em>
            </h2>
            <p className="closing-sub">{t.sub}</p>

            <div className="closing-buttons">
                <a href={`mailto:${t.email}`} className="closing-cta closing-cta-email">
                    {t.emailBtn}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 9h12M9 3l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </a>

                <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="closing-cta closing-cta-whatsapp"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    {t.whatsappBtn}
                </a>
            </div>

            <div className="closing-contact-info">
                <span>{t.email}</span>
                <span className="closing-contact-divider">|</span>
                <span>{t.phone}</span>
            </div>
        </section>
    );
}