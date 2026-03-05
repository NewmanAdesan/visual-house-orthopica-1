import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Timeline.css';

const content = {
    en: {
        tag: "08 — Timeline & Phases",
        titlePart1: "A Realistic Path",
        titlePart2: "to MVP",
        phaseGroupA: {
            title: "Phase A — Discovery & Design",
            badge: "Separately Budgeted"
        },
        phaseDeliverables: {
            title: "Phase A Deliverables",
            text: "Complete UI/UX designs for all three user roles. Full user stories and acceptance criteria. Technical architecture specification. Exercise engine specification. Clinical observation documentation. These deliverables are yours regardless of what follows."
        },
        phaseGroupB: {
            title: "Phase B — Development to Launch",
            badge: "Budget Submitted After Phase A"
        },
        phasesA: [
            {
                num: "Phase 00",
                name: "Discovery & Design",
                items: ["Observe real therapy sessions", "Document exercise behavior precisely", "Define design system", "Build full UI/UX for patient and therapist", "Clinical approval on interface"],
                weeks: "Weeks 1–6",
                label: "Foundation"
            }
        ],
        phasesB: [
            {
                num: "Phase 01",
                name: "Clinical Core",
                items: ["Authentication + role-based access", "Patient registration + diagnosis", "Therapy program data structure + backend logic", "Database architecture", "Admin panel"],
                weeks: "",
                label: "Backend"
            },
            {
                num: "Phase 02",
                name: "The Engine",
                items: ["Canvas environment", "4 exercise types", "Therapist-configurable parameters", "Session controls", "Smooth performance validation"],
                weeks: "",
                label: "Core Product"
            },
            {
                num: "Phase 03",
                name: "Clinical Panel",
                items: ["Therapist dashboard", "Program assignment interface", "Adherence overview", "Progress visualization", "Parameter adjustment"],
                weeks: "",
                label: "Professional"
            },
            {
                num: "Phase 04",
                name: "Polish + Reports",
                items: ["PDF/Excel export", "Full QA", "Performance audit", "Security audit", "Patient UX review — child-user assumption", "Spanish language review"],
                weeks: "",
                label: "Refinement"
            },
            {
                num: "Phase 05",
                name: "MVP Launch",
                items: ["Real patient testing", "Clinical sign-off", "Bug resolution", "Production deploy", "Handover documentation"],
                weeks: "",
                label: "Live"
            }
        ],
        totalDesc: "Total estimated timeline to functional MVP with real patients. Phase A is budgeted independently. Phase B is quoted after Phase A is complete — based on a locked, agreed scope.",
        totalTime: ""
    },
    es: {
        tag: "08 — Cronograma y Fases",
        titlePart1: "Un Camino Realista",
        titlePart2: "Hacia el MVP",
        phaseGroupA: {
            title: "Fase A — Descubrimiento y Diseño",
            badge: "Presupuestado por Separado"
        },
        phaseDeliverables: {
            title: "Entregables de la Fase A",
            text: "Diseños UI/UX completos para los tres roles de usuario. Historias de usuario y criterios de aceptación completos. Especificación de arquitectura técnica. Especificación del motor de ejercicios. Documentación de observación clínica. Estos entregables son suyos independientemente de lo que siga."
        },
        phaseGroupB: {
            title: "Fase B — Del Desarrollo al Lanzamiento",
            badge: "Presupuesto Presentado Después de la Fase A"
        },
        phasesA: [
            {
                num: "Fase 00",
                name: "Descubrimiento y Diseño",
                items: ["Observar sesiones de terapia reales", "Documentar precisamente el comportamiento de los ejercicios", "Definir sistema de diseño", "Construir UI/UX completa para paciente y terapeuta", "Aprobación clínica de la interfaz"],
                weeks: "Semanas 1–6",
                label: "Cimientos"
            }
        ],
        phasesB: [
            {
                num: "Fase 01",
                name: "Núcleo Clínico",
                items: ["Autenticación + acceso por roles", "Registro de paciente + diagnóstico", "Estructura de datos del programa de terapia + lógica backend", "Arquitectura de base de datos", "Panel de administración"],
                weeks: "",
                label: "Backend"
            },
            {
                num: "Fase 02",
                name: "El Motor",
                items: ["Entorno Canvas", "4 tipos de ejercicios", "Parámetros configurables por el terapeuta", "Controles de sesión", "Validación de rendimiento fluido"],
                weeks: "",
                label: "Producto Central"
            },
            {
                num: "Fase 03",
                name: "Panel Clínico",
                items: ["Panel del terapeuta", "Interfaz de asignación de programas", "Resumen de adherencia", "Visualización de progreso", "Ajuste de parámetros"],
                weeks: "",
                label: "Profesional"
            },
            {
                num: "Fase 04",
                name: "Pulido + Reportes",
                items: ["Exportación a PDF/Excel", "QA Completo", "Auditoría de rendimiento", "Auditoría de seguridad", "Revisión de UX de paciente — bajo el supuesto de un usuario infantil", "Revisión de idioma Español"],
                weeks: "",
                label: "Refinamiento"
            },
            {
                num: "Fase 05",
                name: "Lanzamiento del MVP",
                items: ["Pruebas con pacientes reales", "Firma de aprobación clínica", "Resolución de errores", "Despliegue a producción", "Documentación de entrega"],
                weeks: "",
                label: "En Vivo"
            }
        ],
        totalDesc: "Tiempo total estimado para un MVP funcional con pacientes reales. La Fase A se presupuesta de forma independiente. La Fase B se cotiza una vez completada la Fase A — basándose en un alcance bloqueado y acordado.",
        totalTime: ""
    }
};

export default function Timeline() {
    const { language } = useLanguage();
    const t = content[language];

    const renderPhase = (phase, index, offset = 0) => (
        <ScrollReveal key={phase.num} delay={((index + offset) % 4) * 80 + 160} className="phase">
            <div className="phase-id">
                <div className="phase-num">{phase.num}</div>
                <div className="phase-name">{phase.name}</div>
            </div>
            <div className="phase-items">
                {phase.items.map((item, i) => (
                    <span className="phase-tag" key={i}>{item}</span>
                ))}
            </div>
            <div className="phase-weeks">
                <span className="wk">{phase.weeks}</span>
                <span className="wk-label">{phase.label}</span>
            </div>
        </ScrollReveal>
    );

    return (
        <section id="timeline">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>

            <div className="phases">
                {/* PHASE A */}
                <ScrollReveal delay={160} className="phase-group-label">
                    <div className="pgl-title">{t.phaseGroupA.title}</div>
                    <div className="pgl-badge">{t.phaseGroupA.badge}</div>
                </ScrollReveal>

                {t.phasesA.map((phase, index) => renderPhase(phase, index, 1))}

                <ScrollReveal delay={320} className="phase-deliverables">
                    <div className="pd-title">{t.phaseDeliverables.title}</div>
                    <p>{t.phaseDeliverables.text}</p>
                </ScrollReveal>

                {/* PHASE B */}
                <ScrollReveal delay={400} className="phase-group-label">
                    <div className="pgl-title">{t.phaseGroupB.title}</div>
                    <div className="pgl-badge">{t.phaseGroupB.badge}</div>
                </ScrollReveal>

                {t.phasesB.map((phase, index) => renderPhase(phase, index, 6))}
            </div>

            <ScrollReveal delay={880} className="timeline-total">
                <p>{t.totalDesc}</p>
                {/* <strong>{t.totalTime}</strong> */}
            </ScrollReveal>
        </section>
    );
}
