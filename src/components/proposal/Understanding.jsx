import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Understanding.css';

const content = {
    en: {
        tag: "01 — Our Understanding",
        titlePart1: "What You Are",
        titlePart2: "Really Solving",
        cards: [
            {
                label: "Surface Problem",
                heading: "What the brief says",
                type: "list",
                items: [
                    "Visual House needs to scale vision therapy beyond in-person sessions",
                    "Current software is licensed to a third party and locked to clinic computers",
                    "Patient adherence is low and follow-up is informal and verbal",
                    "Coverage is limited to Bogotá — no ability to serve other cities",
                    "Virtual therapy patients carry significantly higher billing — this is your highest-value service line"
                ]
            },
            {
                label: "The Real Problem",
                heading: "What the brief means",
                type: "insights",
                items: [
                    "Your highest-value service is trapped inside a physical building.",
                    "Every patient who cannot do sessions at home is revenue you cannot capture. Every city outside Bogotá is a market you cannot reach.",
                    "But this is not only about expansion. You want to offer a home therapy kit to patients who already walk through your door — turning every in-person visit into a gateway for ongoing virtual therapy.",
                    "Two growth paths. Geographic reach and per-patient value. This platform is the infrastructure for both."
                ]
            },
            {
                label: "The Stakes",
                heading: "If this is not built right",
                type: "list-with-note",
                items: [
                    "A poorly built exercise engine means children disengage — and 70% of your patients are children",
                    "Adherence drops → clinical outcomes fail → the business case collapses",
                    "Without this platform, you remain dependent on third-party software you do not own, cannot customize, and cannot scale",
                    "In-person appointments remain overbooked with no relief"
                ],
                note: "This is not a website. This is a clinical product. It must be built like one."
            }
        ]
    },
    es: {
        tag: "01 — Nuestra Comprensión",
        titlePart1: "Lo Que Realmente",
        titlePart2: "Están Resolviendo",
        cards: [
            {
                label: "Problema Visible",
                heading: "Lo que dice el brief",
                type: "list",
                items: [
                    "Visual House necesita escalar la terapia visual más allá de las sesiones presenciales",
                    "El software actual es de Licenciamiento externo (Software de Terapia Visual) y solo puede utilizarse en los PC de la IPS",
                    "La adherencia del paciente es baja y el seguimiento es informal y verbal",
                    "La cobertura está limitada a Bogotá — sin capacidad de atender otras ciudades",
                    "Los pacientes de Terapia Visual/Ortoptica Virtual — su paciente tipo: Particular — representan un ticket de facturación significativamente más alto. Esta es su línea de servicio de mayor valor"
                ]
            },
            {
                label: "El Problema Real",
                heading: "Lo que el brief significa",
                type: "insights",
                items: [
                    "Su servicio de mayor valor está atrapado dentro de un edificio físico.",
                    "Cada paciente que no puede realizar sesiones desde casa es ingreso que no pueden capturar. Cada ciudad fuera de Bogotá es un mercado al que no pueden llegar.",
                    "Pero esto no se trata solo de expansión. Ustedes quieren ofrecer un Kit de Terapia Visual a los pacientes que ya acuden presencialmente a su sede — convirtiendo cada visita presencial en una puerta de entrada para Terapia Visual/Ortoptica Virtual continua.",
                    "Dos caminos de crecimiento. Alcance geográfico y valor por paciente. Esta plataforma es la infraestructura para ambos."
                ]
            },
            {
                label: "Lo Que Está en Juego",
                heading: "Si esto no se construye bien",
                type: "list-with-note",
                items: [
                    "Un motor de ejercicios mal construido significa que los niños pierden interés — y el 70% de sus pacientes son niños",
                    "La adherencia cae → los resultados clínicos fallan → el caso de negocio colapsa",
                    "Sin esta plataforma, siguen dependiendo de un Software de Terapia Visual de Licenciamiento externo que no poseen, no pueden personalizar y no pueden escalar",
                    "La agenda presencial sigue saturada sin alivio"
                ],
                note: "Esto no es un sitio web. Es un producto clínico. Debe construirse como tal."
            }
        ]
    }
};

export default function Understanding() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="understanding">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>

            <div className="understanding-grid">
                {t.cards.map((card, index) => (
                    <ScrollReveal key={index} delay={index * 80 + 160} className="u-card">
                        <span className="u-card-num">{card.label}</span>
                        <h3>{card.heading}</h3>

                        {card.type === 'list' && (
                            <ul>
                                {card.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {card.type === 'insights' && (
                            <>
                                {card.items.map((text, i) => (
                                    <div className="insight-block" key={i}>
                                        <p style={i === card.items.length - 1 ? { fontWeight: 500, color: 'var(--navy)' } : {}}>{text}</p>
                                    </div>
                                ))}
                            </>
                        )}

                        {card.type === 'list-with-note' && (
                            <>
                                <ul>
                                    {card.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p style={{ marginTop: '16px', fontWeight: 500, color: 'var(--navy)' }}>{card.note}</p>
                            </>
                        )}
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
