import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import ScrollReveal from '../shared/ScrollReveal';
import './UserStoriesPreview.css';

const content = {
    en: {
        tag: "06 — User Stories & Acceptance Criteria",
        titlePart1: "How Every Role",
        titlePart2: "Interacts With The System",
        sub: "A step-by-step walkthrough of how each user — patient, therapist, and administrator — experiences the platform from first login to daily use. Each action defined, each behavior specified.",
        cards: [
            {
                role: "The Patient",
                flow: "Account created by the therapist after in-person assessment — the patient never self-registers. They log in and see one thing: today's session. How many exercises, what to do, start. They follow the program. The system records everything — completed, missed, time spent, date. For a child, there are no decisions to make. Just participation."
            },
            {
                role: "The Therapist",
                flow: "Logs in and immediately sees who needs attention — every patient listed with their diagnosis, program status, and a clear adherence indicator showing sessions completed vs assigned this week. Registers new patients with diagnosis and medical history. Builds personalized programs — selects exercises, configures every parameter, sets the schedule. Reviews individual patient progress over time. Adjusts, pauses, or completes programs based on the data. Exports reports filtered by patient, date, or their full patient list."
            },
            {
                role: "The Administrator",
                flow: "Global visibility — total patients, active programs, overall adherence, active therapists. Manages all user accounts. Pulls cross-system reports that span every therapist and every patient. Views the audit trail — a chronological record of who did what and when, for accountability and data protection compliance."
            }
        ],
        ctaText: "Every user action, system behavior, and acceptance criterion is detailed in the accompanying document —",
        ctaLinkText: "View Full User Stories & Acceptance Criteria"
    },
    es: {
        tag: "06 — Historias de Usuario y Criterios de Aceptación",
        titlePart1: "Cómo Cada Rol",
        titlePart2: "Interactúa con el Sistema",
        sub: "Un recorrido paso a paso de cómo cada usuario — paciente, terapeuta y administrador — experimenta la plataforma desde el primer inicio de sesión hasta su uso diario. Cada acción definida, cada comportamiento especificado.",
        cards: [
            {
                role: "El Paciente",
                flow: "Cuenta creada por el terapeuta después de la valoración presencial — el paciente nunca se auto-registra. Inician sesión y ven una sola cosa: la sesión de hoy. Cuántos ejercicios, qué hacer, iniciar. Siguen el programa. El sistema registra todo — completado, omitido, tiempo invertido, fecha. Para un niño, no hay decisiones que tomar. Solo participación."
            },
            {
                role: "El Terapeuta",
                flow: "Inicia sesión y ve inmediatamente quién necesita atención — cada paciente listado con su diagnóstico, estado del programa y un indicador claro de adherencia que muestra las sesiones completadas versus las asignadas esta semana. Registra nuevos pacientes con diagnóstico e historia clínica. Construye programas personalizados — selecciona ejercicios, configura cada parámetro, establece el horario. Revisa el progreso individual del paciente a lo largo del tiempo. Ajusta, pausa o completa programas basándose en los datos. Exporta reportes filtrados por paciente, fecha o su lista completa de pacientes."
            },
            {
                role: "El Administrador",
                flow: "Visibilidad global — total de pacientes, programas activos, adherencia general, terapeutas activos. Gestiona todas las cuentas de usuario. Extrae reportes de todo el sistema que abarcan a cada terapeuta y cada paciente. Accede al historial de auditoría — un registro cronológico de quién hizo qué y cuándo, para responsabilidad y cumplimiento de protección de datos."
            }
        ],
        ctaText: "Cada acción del usuario, comportamiento del sistema y criterio de aceptación se detalla en el documento adjunto —",
        ctaLinkText: "Ver Historias de Usuario & Criterios de Aceptación Completos"
    }
};

export default function UserStoriesPreview() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="user-stories">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
                <p className="section-sub">{t.sub}</p>
            </ScrollReveal>

            <div className="stories-preview">
                {t.cards.map((card, index) => (
                    <ScrollReveal key={index} delay={index * 80 + 240} className="story-card">
                        <div className="story-role">{card.role}</div>
                        <div className="story-flow">{card.flow}</div>
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal delay={500} className="stories-cta">
                <p>{t.ctaText}</p>
                <Link to="/user-stories" className="story-link">
                    {t.ctaLinkText}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </Link>
            </ScrollReveal>
        </section>
    );
}
