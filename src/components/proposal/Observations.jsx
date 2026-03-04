import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Observations.css';

const content = {
    en: {
        tag: "03 — Key Observations",
        titlePart1: "What Others",
        titlePart2: "Will Miss",
        desc: "Five things we found in your brief that most developers will overlook entirely.",
        items: [
            {
                num: "01",
                label: "Critical Finding",
                heading: "The Exercise Engine Is The Product",
                body: "Most proposals will treat the interactive exercise engine as a feature. It is not. It is the core of everything. This engine must render <strong>smooth, precise visual stimuli in real time</strong> — with exact timing, configurable parameters, and zero lag — because children are using it for therapy. A stuttering animation is not a bug. It is a failed treatment session. We know exactly what this requires technically and we address it in the architecture section below. Getting this wrong means the therapy does not work. Getting it right means you have <strong>something licensable to other providers worldwide.</strong>"
            },
            {
                num: "02",
                label: "UX Architecture",
                heading: "Two Completely Different Users In One System",
                body: "70% of your patients are children. They need an interface so simple and engaging they can run a session with minimal supervision. Your orthoptists need a panel sophisticated enough for clinical decision-making. These are not two pages — they are <strong>two entirely different UX philosophies</strong> that must coexist in one system. Most developers will build one and compromise the other. And there is an invisible user the brief does not name — <strong>the parent.</strong> A child doing exercises at home means someone nearby may need to help start a session, understand what is expected, or troubleshoot. The interface must account for this without adding complexity."
            },
            {
                num: "03",
                label: "Compliance Risk",
                heading: "Sensitive Health Data From Day One",
                body: "Basic medical history means data protection compliance — including <strong>Ley 1581 de 2012</strong> (Colombian personal data protection) — is not a Phase 2 concern. Role-based authentication, encryption, audit trails, and daily backups must be architected into the foundation from day one, not bolted on later at higher cost. <strong>Compliance is not a phase. It is a foundation.</strong>"
            },
            {
                num: "04",
                label: "Strategic Intent",
                heading: "\"Web PC Only, Chrome\" Is Clinically Intentional",
                body: "This is not a technical limitation. This is a deliberate constraint that protects the precision of your exercise rendering. Visual therapy stimuli require <strong>consistent, predictable screen behavior</strong>. We will build for this constraint deliberately — not treat it as something to work around in a future phase."
            },
            {
                num: "05",
                label: "Future Architecture",
                heading: "The Licensing Ambition Changes How We Build Now",
                body: "You mentioned future licensing to other healthcare providers and expansion to other countries. This has architectural implications now — even at MVP. A system built only for Visual House today may need costly restructuring to support multiple providers tomorrow. <strong>We raise this now so the architecture decision is made consciously — not discovered painfully after launch.</strong>"
            }
        ]
    },
    es: {
        tag: "03 — Observaciones Clave",
        titlePart1: "Lo Que Otros",
        titlePart2: "No Verán",
        desc: "Cinco hallazgos en su brief que la mayoría de los desarrolladores pasarán por alto completamente.",
        items: [
            {
                num: "01",
                label: "Hallazgo Crítico",
                heading: "El Motor de Ejercicios Terapéuticos Es El Producto",
                body: "La mayoría de las propuestas tratarán el motor de ejercicios terapéuticos como una funcionalidad más. No lo es. Es el núcleo de todo. Este motor debe renderizar <strong>estímulos visuales precisos y fluidos en tiempo real</strong> — con temporización exacta, parámetros configurables y cero latencia — porque son niños los que lo usan para terapia. Una animación que tartamudea no es un error técnico. Es una sesión de tratamiento fallida. Sabemos exactamente lo que esto requiere técnicamente y lo abordamos en la sección de arquitectura más adelante. Hacerlo mal significa que la terapia no funciona. Hacerlo bien significa que tienen <strong>algo licenciable a otras IPS a nivel mundial.</strong>"
            },
            {
                num: "02",
                label: "Arquitectura UX",
                heading: "Dos Usuarios Completamente Diferentes en Un Solo Sistema",
                body: "El 70% de sus pacientes son niños. Necesitan una interfaz tan simple y atractiva que puedan ejecutar una sesión con mínima supervisión. Sus ortoptistas necesitan un panel lo suficientemente sofisticado para la toma de decisiones clínicas. Estas no son dos páginas — son <strong>dos filosofías de UX completamente diferentes</strong> que deben coexistir en un solo sistema. La mayoría de los desarrolladores construirán una y comprometerán la otra. Y hay un usuario invisible que el brief no menciona — <strong>el padre o la madre.</strong> Un niño haciendo ejercicios en casa significa que alguien cercano puede necesitar ayudar a iniciar una sesión, entender lo que se espera o resolver problemas. La interfaz debe contemplar esto sin agregar complejidad."
            },
            {
                num: "03",
                label: "Riesgo de Cumplimiento",
                heading: "Datos Sensibles de Salud Desde el Día Uno",
                body: "Historia Clínica Básica significa que el cumplimiento de protección de datos — incluyendo la <strong>Ley 1581 de 2012</strong> (protección de datos personales en Colombia) — no es una preocupación de la Fase 2. Autenticación basada en roles, cifrado, registros de auditoría y respaldos diarios deben ser arquitectados en la base desde el día uno, no agregados después a mayor costo. <strong>El cumplimiento no es una fase. Es un cimiento.</strong>"
            },
            {
                num: "04",
                label: "Intención Estratégica",
                heading: "\"Solo Web PC, Chrome\" Es Clínicamente Intencional",
                body: "Esto no es una limitación técnica. Es una restricción deliberada que protege la precisión del renderizado de los ejercicios. Los estímulos de terapia visual requieren <strong>un comportamiento de pantalla consistente y predecible</strong>. Construiremos para esta restricción deliberadamente — no la trataremos como algo que resolver en una fase futura."
            },
            {
                num: "05",
                label: "Arquitectura Futura",
                heading: "La Ambición de Licenciamiento Cambia Cómo Construimos Ahora",
                body: "Ustedes mencionaron el licenciamiento futuro a otras IPS y la prestación del servicio en otros países. Esto tiene implicaciones arquitectónicas ahora — incluso en el MVP. Un sistema construido solo para Visual House hoy puede necesitar una reestructuración costosa para soportar múltiples IPS mañana. <strong>Lo planteamos ahora para que la decisión arquitectónica se tome conscientemente — no se descubra dolorosamente después del lanzamiento.</strong>"
            }
        ]
    }
};

export default function Observations() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="observations">
            <div className="obs-header">
                <div className="left">
                    <ScrollReveal delay={0}>
                        <div className="section-tag">{t.tag}</div>
                        <h2 className="section-title">
                            {t.titlePart1}<br />{t.titlePart2}
                        </h2>
                    </ScrollReveal>
                </div>
                <ScrollReveal delay={160} className="right">
                    {t.desc}
                </ScrollReveal>
            </div>

            <div className="obs-list">
                {t.items.map((item, index) => (
                    <ScrollReveal key={index} delay={(index % 4) * 80 + 240} className="obs-item">
                        <div className="obs-num">{item.num}</div>
                        <div className="obs-heading">
                            <span>{item.label}</span>
                            {item.heading}
                        </div>
                        <div className="obs-body" dangerouslySetInnerHTML={{ __html: item.body }} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
