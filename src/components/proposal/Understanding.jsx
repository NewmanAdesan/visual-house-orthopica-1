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
        tag: "[ES] 01 — Our Understanding",
        titlePart1: "[ES] What You Are",
        titlePart2: "[ES] Really Solving",
        cards: [
            {
                label: "[ES] Surface Problem",
                heading: "[ES] What the brief says",
                type: "list",
                items: [
                    "[ES] Visual House needs to scale vision therapy beyond in-person sessions",
                    "[ES] Current software is licensed to a third party and locked to clinic computers",
                    "[ES] Patient adherence is low and follow-up is informal and verbal",
                    "[ES] Coverage is limited to Bogotá — no ability to serve other cities",
                    "[ES] Virtual therapy patients carry significantly higher billing — this is your highest-value service line"
                ]
            },
            {
                label: "[ES] The Real Problem",
                heading: "[ES] What the brief means",
                type: "insights",
                items: [
                    "[ES] Your highest-value service is trapped inside a physical building.",
                    "[ES] Every patient who cannot do sessions at home is revenue you cannot capture. Every city outside Bogotá is a market you cannot reach.",
                    "[ES] But this is not only about expansion. You want to offer a home therapy kit to patients who already walk through your door — turning every in-person visit into a gateway for ongoing virtual therapy.",
                    "[ES] Two growth paths. Geographic reach and per-patient value. This platform is the infrastructure for both."
                ]
            },
            {
                label: "[ES] The Stakes",
                heading: "[ES] If this is not built right",
                type: "list-with-note",
                items: [
                    "[ES] A poorly built exercise engine means children disengage — and 70% of your patients are children",
                    "[ES] Adherence drops → clinical outcomes fail → the business case collapses",
                    "[ES] Without this platform, you remain dependent on third-party software you do not own, cannot customize, and cannot scale",
                    "[ES] In-person appointments remain overbooked with no relief"
                ],
                note: "[ES] This is not a website. This is a clinical product. It must be built like one."
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
