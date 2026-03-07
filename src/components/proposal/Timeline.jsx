import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Timeline.css';

const content = {
    en: {
        tag: "08 — Development Plan, Timeline & Milestones",
        titlePart1: "Breakdown",
        titlePart2: "& Estimates",
        totalDuration: "Estimated total project duration: 4 – 5 months.",

        phaseA: {
            label: "PHASE A",
            sublabel: "UI/UX DESIGN",
            items: [
                { feature: "User stories, acceptance criteria, and system documentation for all three roles", time: "5–7 days" },
                { feature: "Design system definition — typography, color, spacing, component library", time: "3–4 days" },
                { feature: "Patient interface — login, dashboard, session execution, history", time: "3–4 days" },
                { feature: "Therapist interface — patient list, detail view, program builder, reports", time: "5–7 days" },
                { feature: "Administrator interface — user management, settings, global reports, audit trail", time: "3–4 days" },
                { feature: "Exercise engine look and feel", time: "3–5 days" },
                { feature: "Clinical approval on all interfaces before development begins", time: "3–5 days" },
            ],
            total: { label: "Phase A Total", time: "25–36 days" }
        },

        phaseB: {
            label: "PHASE B",
            sublabel: "DEVELOPMENT",
            groups: [
                {
                    title: "Clinical Core & Clinical Panel",
                    subgroups: [
                        {
                            name: "Therapist Interface",
                            items: [
                                { feature: "Authentication + role-based access", time: "4–5 days" },
                                { feature: "Patient registration + diagnosis + medical history", time: "3–4 days" },
                                { feature: "Therapy program builder (select exercises, configure parameters, set schedule)", time: "5–7 days" },
                                { feature: "Patient list with adherence indicators", time: "3–4 days" },
                                { feature: "Individual patient detail view (diagnosis, program, session history, progress chart)", time: "3–4 days" },
                                { feature: "Program adjustment (change parameters, add/remove exercises, change frequency)", time: "3–4 days" },
                                { feature: "Patient status management (Active, Paused, Completed)", time: "1–2 days" },
                                { feature: "Report generation (filter by patient, date range, full list) + PDF/Excel export", time: "4–5 days" },
                            ]
                        },
                        {
                            name: "Patient Interface",
                            items: [
                                { feature: "Authentication + login credentials", time: "1–2 days" },
                                { feature: "Dashboard (today's session, weekly progress, next scheduled session)", time: "3–4 days" },
                                { feature: "Session execution (exercises load in order, progress through program)", time: "4–5 days" },
                                { feature: "Session controls (start, pause, resume, complete)", time: "2–3 days" },
                                { feature: "Session history view (completed, missed, dates, time spent)", time: "2–3 days" },
                            ]
                        },
                        {
                            name: "Administrator Interface",
                            items: [
                                { feature: "Admin dashboard (total patients, active programs, system-wide adherence, active therapists)", time: "3–4 days" },
                                { feature: "User account management (create, edit, deactivate therapists and patients)", time: "3–4 days" },
                                { feature: "System settings configuration", time: "2–3 days" },
                                { feature: "Global reports across all therapists and patients", time: "3–4 days" },
                                { feature: "Audit trail (who did what, when, read-only, searchable)", time: "3–4 days" },
                            ]
                        },
                        {
                            name: "Shared Infrastructure",
                            items: [
                                { feature: "Database architecture", time: "4–5 days" },
                                { feature: "Encrypted medical records (Ley 1581 de 2012 compliance)", time: "2–3 days" },
                                { feature: "Daily automated backups", time: "1–2 days" },
                            ]
                        }
                    ],
                    total: { label: "Clinical Core & Clinical Panel Total", time: "55–75 days" }
                },
                {
                    title: "Exercise Engine",
                    items: [
                        { feature: "Canvas environment setup", time: "3–4 days" },
                        { feature: "Smooth Tracking exercise", time: "4–5 days" },
                        { feature: "Saccades exercise", time: "4–5 days" },
                        { feature: "Basic Vergences exercise", time: "4–5 days" },
                        { feature: "Basic Accommodation exercise", time: "4–5 days" },
                        { feature: "Therapist-configurable parameters (speed, size, duration, difficulty)", time: "3–4 days" },
                        { feature: "Session controls (start, pause, resume, complete)", time: "2–3 days" },
                        { feature: "Performance validation — smooth, zero-latency rendering", time: "2–3 days" },
                    ],
                    total: { label: "Exercise Engine Total", time: "26–34 days" }
                },
                {
                    title: "Polish & Reports",
                    items: [
                        { feature: "PDF / Excel export", time: "3–4 days" },
                        { feature: "Full QA across all interfaces", time: "5–7 days" },
                        { feature: "Performance audit", time: "2–3 days" },
                        { feature: "Security audit", time: "2–3 days" },
                        { feature: "Child-user UX review", time: "2–3 days" },
                        { feature: "Real patient testing", time: "5–7 days" },
                        { feature: "Clinical sign-off + bug resolution", time: "3–5 days" },
                        { feature: "Production deploy + handover documentation", time: "3–4 days" },
                    ],
                    total: { label: "Polish & Reports Total", time: "25–36 days" }
                }
            ]
        },

        summary: {
            title: "PROJECT SUMMARY",
            rows: [
                { label: "Phase A — UI/UX Design", time: "25–36 days" },
                { label: "Phase B — Clinical Core & Clinical Panel", time: "55–75 days" },
                { label: "Phase B — Exercise Engine", time: "26–34 days" },
                { label: "Phase B — Polish & Reports", time: "25–36 days" },
            ],
            grandTotal: { label: "Grand Total", time: "4 – 5 months" }
        }
    },
    es: {
        tag: "08 — Plan de Desarrollo, Cronograma e Hitos",
        titlePart1: "Desglose",
        titlePart2: "y Estimaciones",
        totalDuration: "Duración total estimada del proyecto: 4 – 5 meses.",

        phaseA: {
            label: "FASE A",
            sublabel: "DISEÑO UI/UX",
            items: [
                { feature: "Historias de usuario, criterios de aceptación y documentación del sistema para los tres roles", time: "5–7 días" },
                { feature: "Definición del sistema de diseño — tipografía, color, espaciado, biblioteca de componentes", time: "3–4 días" },
                { feature: "Interfaz del paciente — inicio de sesión, panel de control, ejecución de sesión, historial", time: "3–4 días" },
                { feature: "Interfaz del terapeuta — lista de pacientes, vista de detalle, constructor de programas, reportes", time: "5–7 días" },
                { feature: "Interfaz del administrador — gestión de usuarios, configuración, reportes globales, auditoría", time: "3–4 días" },
                { feature: "Apariencia del motor de ejercicios", time: "3–5 días" },
                { feature: "Aprobación clínica de todas las interfaces antes del desarrollo", time: "3–5 días" },
            ],
            total: { label: "Total Fase A", time: "25–36 días" }
        },

        phaseB: {
            label: "FASE B",
            sublabel: "DESARROLLO",
            groups: [
                {
                    title: "Núcleo Clínico y Panel Clínico",
                    subgroups: [
                        {
                            name: "Interfaz del Terapeuta",
                            items: [
                                { feature: "Autenticación + acceso basado en roles", time: "4–5 días" },
                                { feature: "Registro de pacientes + diagnóstico + Historia Clínica Básica", time: "3–4 días" },
                                { feature: "Constructor de programas de terapia (seleccionar ejercicios, configurar parámetros, establecer horario)", time: "5–7 días" },
                                { feature: "Lista de pacientes con indicadores de adherencia", time: "3–4 días" },
                                { feature: "Vista de detalle del paciente (diagnóstico, programa, historial, gráfico de progreso)", time: "3–4 días" },
                                { feature: "Ajuste de programa (cambiar parámetros, agregar/eliminar ejercicios, cambiar frecuencia)", time: "3–4 días" },
                                { feature: "Gestión de estado del paciente (Activo, En Pausa, Finalizado)", time: "1–2 días" },
                                { feature: "Generación de reportes (filtrar por paciente, fechas, lista completa) + exportación PDF/Excel", time: "4–5 días" },
                            ]
                        },
                        {
                            name: "Interfaz del Paciente",
                            items: [
                                { feature: "Autenticación + credenciales de acceso", time: "1–2 días" },
                                { feature: "Panel de control (sesión de hoy, progreso semanal, próxima sesión)", time: "3–4 días" },
                                { feature: "Ejecución de sesión (ejercicios en orden, progreso a través del programa)", time: "4–5 días" },
                                { feature: "Controles de sesión (iniciar, pausar, reanudar, completar)", time: "2–3 días" },
                                { feature: "Historial de sesiones (completadas, omitidas, fechas, tiempo empleado)", time: "2–3 días" },
                            ]
                        },
                        {
                            name: "Interfaz del Administrador",
                            items: [
                                { feature: "Dashboard de administrador (total pacientes, programas activos, adherencia, terapeutas activos)", time: "3–4 días" },
                                { feature: "Gestión de cuentas de usuario (crear, editar, desactivar terapeutas y pacientes)", time: "3–4 días" },
                                { feature: "Configuración del sistema", time: "2–3 días" },
                                { feature: "Reportes globales de todos los terapeutas y pacientes", time: "3–4 días" },
                                { feature: "Registro de auditoría (quién hizo qué, cuándo, solo lectura, buscable)", time: "3–4 días" },
                            ]
                        },
                        {
                            name: "Infraestructura Compartida",
                            items: [
                                { feature: "Arquitectura de base de datos", time: "4–5 días" },
                                { feature: "Registros médicos cifrados (cumplimiento Ley 1581 de 2012)", time: "2–3 días" },
                                { feature: "Respaldos automáticos diarios", time: "1–2 días" },
                            ]
                        }
                    ],
                    total: { label: "Total Núcleo Clínico y Panel Clínico", time: "55–75 días" }
                },
                {
                    title: "Motor de Ejercicios",
                    items: [
                        { feature: "Configuración del entorno Canvas", time: "3–4 días" },
                        { feature: "Ejercicio de Seguimientos", time: "4–5 días" },
                        { feature: "Ejercicio de Sacádicos", time: "4–5 días" },
                        { feature: "Ejercicio de Vergencias Básicas", time: "4–5 días" },
                        { feature: "Ejercicio de Acomodación Básica", time: "4–5 días" },
                        { feature: "Parámetros configurables por terapeuta (velocidad, tamaño, duración, dificultad)", time: "3–4 días" },
                        { feature: "Controles de sesión (iniciar, pausar, reanudar, completar)", time: "2–3 días" },
                        { feature: "Validación de rendimiento — renderizado fluido y sin latencia", time: "2–3 días" },
                    ],
                    total: { label: "Total Motor de Ejercicios", time: "26–34 días" }
                },
                {
                    title: "Pulido y Reportes",
                    items: [
                        { feature: "Exportación PDF / Excel", time: "3–4 días" },
                        { feature: "QA completo en todas las interfaces", time: "5–7 días" },
                        { feature: "Auditoría de rendimiento", time: "2–3 días" },
                        { feature: "Auditoría de seguridad", time: "2–3 días" },
                        { feature: "Revisión UX para usuario niño", time: "2–3 días" },
                        { feature: "Pruebas con pacientes reales", time: "5–7 días" },
                        { feature: "Aprobación clínica + resolución de errores", time: "3–5 días" },
                        { feature: "Despliegue a producción + documentación de entrega", time: "3–4 días" },
                    ],
                    total: { label: "Total Pulido y Reportes", time: "25–36 días" }
                }
            ]
        },

        summary: {
            title: "RESUMEN DEL PROYECTO",
            rows: [
                { label: "Fase A — Diseño UI/UX", time: "25–36 días" },
                { label: "Fase B — Núcleo Clínico y Panel Clínico", time: "55–75 días" },
                { label: "Fase B — Motor de Ejercicios", time: "26–34 días" },
                { label: "Fase B — Pulido y Reportes", time: "25–36 días" },
            ],
            grandTotal: { label: "Total General", time: "4 – 5 meses" }
        }
    }
};

export default function Timeline() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="timeline">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>

            {/* PHASE A */}
            <ScrollReveal className="phase-label">
                <span className="phase-label-name">{t.phaseA.label}</span>
                <span className="phase-label-sub">{t.phaseA.sublabel}</span>
            </ScrollReveal>

            <div className="timeline-table">
                <div className="tt-header">
                    <span className="tt-h-feature">{language === 'es' ? 'Funcionalidad' : 'Feature'}</span>
                    <span className="tt-h-time">{language === 'es' ? 'Tiempo Estimado' : 'Time Estimate'}</span>
                </div>
                {t.phaseA.items.map((item, i) => (
                    <ScrollReveal key={i} className={`tt-row ${i % 2 === 1 ? 'tt-row-alt' : ''}`}>
                        <span className="tt-feature">{item.feature}</span>
                        <span className="tt-time">{item.time}</span>
                    </ScrollReveal>
                ))}
                <div className="tt-total">
                    <span className="tt-feature">{t.phaseA.total.label}</span>
                    <span className="tt-time">{t.phaseA.total.time}</span>
                </div>
            </div>

            {/* PHASE B */}
            <ScrollReveal className="phase-label phase-label-b">
                <span className="phase-label-name">{t.phaseB.label}</span>
                <span className="phase-label-sub">{t.phaseB.sublabel}</span>
            </ScrollReveal>

            {t.phaseB.groups.map((group, gi) => (
                <div key={gi} className="timeline-group">
                    <ScrollReveal>
                        <h3 className="timeline-group-title">{group.title}</h3>
                    </ScrollReveal>
                    <div className="timeline-table">
                        <div className="tt-header">
                            <span className="tt-h-feature">{language === 'es' ? 'Funcionalidad' : 'Feature'}</span>
                            <span className="tt-h-time">{language === 'es' ? 'Tiempo Estimado' : 'Time Estimate'}</span>
                        </div>
                        {group.subgroups ? (
                            group.subgroups.map((sub, si) => (
                                <div key={si}>
                                    <div className="tt-subheader">{sub.name}</div>
                                    {sub.items.map((item, i) => (
                                        <ScrollReveal key={i} className={`tt-row ${i % 2 === 1 ? 'tt-row-alt' : ''}`}>
                                            <span className="tt-feature">{item.feature}</span>
                                            <span className="tt-time">{item.time}</span>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            ))
                        ) : (
                            group.items.map((item, i) => (
                                <ScrollReveal key={i} className={`tt-row ${i % 2 === 1 ? 'tt-row-alt' : ''}`}>
                                    <span className="tt-feature">{item.feature}</span>
                                    <span className="tt-time">{item.time}</span>
                                </ScrollReveal>
                            ))
                        )}
                        <div className="tt-total">
                            <span className="tt-feature">{group.total.label}</span>
                            <span className="tt-time">{group.total.time}</span>
                        </div>
                    </div>
                </div>
            ))}

            {/* SUMMARY */}
            <ScrollReveal className="timeline-summary">
                <div className="ts-label">{t.summary.title}</div>
                <div className="timeline-table">
                    <div className="tt-header">
                        <span className="tt-h-feature">{language === 'es' ? 'Fase' : 'Phase'}</span>
                        <span className="tt-h-time">{language === 'es' ? 'Tiempo Estimado' : 'Time Estimate'}</span>
                    </div>
                    {t.summary.rows.map((row, i) => (
                        <div key={i} className={`tt-row ${i % 2 === 1 ? 'tt-row-alt' : ''}`}>
                            <span className="tt-feature">{row.label}</span>
                            <span className="tt-time">{row.time}</span>
                        </div>
                    ))}
                    <div className="tt-grand-total">
                        <span className="tt-feature">{t.summary.grandTotal.label}</span>
                        <span className="tt-time">{t.summary.grandTotal.time}</span>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}