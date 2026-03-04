import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Questions.css';

const content = {
    en: {
        tag: "04 — Critical Questions",
        titlePart1: "What We Need",
        titlePart2: "To Know",
        sub: "Eight questions that protect this project from costly mid-build surprises. We ask them now so we never have to pause later.",
        groups: [
            {
                title: "Before We Design",
                items: [
                    { n: "01", text: "What does a single vision therapy exercise look like in a real session today? Can we observe one or see a video? We cannot engineer the visual stimulus accurately without seeing it performed clinically." },
                    { n: "02", text: "Do exercises need audio instructions — particularly for child patients running sessions at home without direct supervision?" },
                    { n: "03", text: "What is the current third-party software your therapists use? Understanding what they are accustomed to will directly inform how we design the professional panel." },
                    { n: "04", text: "Is there an existing domain, logo, or brand guidelines — colors, typography — that this platform must align with?" }
                ]
            },
            {
                title: "Before We Build",
                items: [
                    { n: "05", text: "Is there an existing patient database that needs to be migrated, or do all records start fresh in the new system?" },
                    { n: "06", text: "Can you confirm Ley 1581 de 2012 as the applicable data protection regulation? Are there additional healthcare-specific compliance requirements we should account for?" },
                    { n: "07", text: "What is the target go-live date for MVP with real patients? And what is the established budget range for this phase?" },
                    { n: "08", text: "Who is the internal point of contact for clinical validation — who signs off that an exercise is implemented correctly from a therapeutic standpoint?" }
                ]
            }
        ]
    },
    es: {
        tag: "04 — Preguntas Críticas",
        titlePart1: "Lo Que Necesitamos",
        titlePart2: "Saber",
        sub: "Ocho preguntas que protegen este proyecto de sorpresas costosas durante la construcción. Las hacemos ahora para no tener que pausar después.",
        groups: [
            {
                title: "Antes de Diseñar",
                items: [
                    { n: "01", text: "¿Cómo se ve un ejercicio de terapia visual en una sesión real hoy? ¿Podemos observar uno o ver un video? No podemos diseñar el estímulo visual con precisión sin verlo ejecutado clínicamente." },
                    { n: "02", text: "¿Los ejercicios necesitan instrucciones de audio — particularmente para pacientes niños que realizan sesiones en casa sin supervisión directa?" },
                    { n: "03", text: "¿Cuál es el software de terceros que sus terapeutas usan actualmente? Entender a lo que están acostumbrados informará directamente cómo diseñamos el panel profesional." },
                    { n: "04", text: "¿Existe un dominio, logo o lineamientos de marca — colores, tipografía — con los que esta plataforma deba alinearse?" }
                ]
            },
            {
                title: "Antes de Construir",
                items: [
                    { n: "05", text: "¿Existe una base de datos de pacientes que necesite migrarse, o todos los registros comienzan desde cero en el nuevo sistema?" },
                    { n: "06", text: "¿Pueden confirmar la Ley 1581 de 2012 como la regulación aplicable de protección de datos? ¿Hay requisitos de cumplimiento adicionales específicos del sector salud que debamos contemplar?" },
                    { n: "07", text: "¿Cuál es la fecha objetivo de lanzamiento del MVP con pacientes reales? ¿Y cuál es el rango de presupuesto establecido para esta fase?" },
                    { n: "08", text: "¿Quién es el punto de contacto interno para validación clínica — quién aprueba que un ejercicio está implementado correctamente desde el punto de vista terapéutico?" }
                ]
            }
        ]
    }
};

export default function Questions() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="questions">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={160} className="section-sub">
                <p>{t.sub}</p>
            </ScrollReveal>

            <div className="q-groups">
                {t.groups.map((group, groupIndex) => (
                    <ScrollReveal key={groupIndex} delay={groupIndex * 80 + 240} className="q-group">
                        <div className="q-group-title">{group.title}</div>
                        {group.items.map((item, itemIndex) => (
                            <div className="q-item" key={itemIndex}>
                                <span className="q-n">{item.n}</span>
                                <span className="q-text">{item.text}</span>
                            </div>
                        ))}
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
