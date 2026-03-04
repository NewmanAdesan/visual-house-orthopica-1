import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Architecture.css';

const content = {
    en: {
        tag: "05 — Proposed Architecture",
        titlePart1: "What We Would",
        titlePart2: "Build and Why",
        layers: [
            {
                num: "Layer 01",
                name: "The Clinical Core",
                sub: "Backend Foundation",
                items: [
                    "Patient registration with diagnosis and assigned professional",
                    "Therapist builds personalized therapy program — selecting exercises, setting parameters, defining the weekly schedule",
                    "System records every session — completed, missed, time spent, date",
                    "Adherence and progress data flows back to the therapist dashboard for clinical review",
                    "Reporting engine — filtered by patient, therapist, or date range — exported as PDF or Excel",
                    "Role-based authentication across three user types: Patient, Orthoptist, Administrator",
                    "Encrypted medical records with basic change history audit trail",
                    "Daily automated backups",
                    "Ley 1581 de 2012 compliance architected from day one — not added later"
                ],
                techLabel: "Stack: ",
                techValue: "Node.js / PostgreSQL / Cloud (AWS or equivalent — pending evaluation together)"
            },
            {
                num: "Layer 02",
                name: "The Exercise Engine",
                sub: "The Heart of The Product",
                items: [
                    "Four exercise types built for MVP: Smooth Tracking, Saccades, Basic Vergences, Basic Accommodation",
                    "Each exercise is a precise visual stimulus rendered on screen — not a video, not a pre-recorded animation, but a real-time interactive environment the patient engages with",
                    "Every exercise is configurable by the therapist: speed, size, duration, difficulty level",
                    "Session controls — start, pause, resume, complete — so the patient or a supervising parent can manage the experience",
                    "Built for Chrome on PC — deliberately matched to the clinical constraint to ensure consistent, predictable rendering",
                    "Smooth, lag-free performance — because a stutter in a visual therapy exercise is not a UI issue, it is a clinical issue"
                ],
                techLabel: "Stack: ",
                techValue: "HTML5 Canvas + requestAnimationFrame + React session wrapper"
            },
            {
                num: "Layer 03",
                name: "The Dual Interface",
                sub: "Two UX Philosophies, One System",
                items: [
                    "<strong>Patient experience:</strong> Log in, see today's session, run the exercises, complete. Simple enough for a child, clear enough for a parent helping nearby. No decisions required — just follow the program.",
                    "<strong>Therapist experience:</strong> See your patients. See their diagnosis. See what program they are on, what the schedule is, what the adherence looks like. The data tells the story — the therapist makes the clinical decision. Assign programs, adjust parameters, pause or progress treatment.",
                    "<strong>Administrator experience:</strong> Manage users, manage system settings, pull global reports across all patients and therapists.",
                    "Language: Spanish — with English-ready architecture for future expansion",
                    "Platform: Web, Chrome, PC — built to the clinical constraint, not by default"
                ],
                techLabel: "Stack: ",
                techValue: "React / Tailwind / Recharts"
            }
        ],
        mvp: {
            deliversHeading: "MVP Delivers",
            deliversItems: [
                "Functional exercise engine — four clinically configurable exercise types",
                "Complete patient management — registration, diagnosis, assigned professional",
                "Therapy program builder — exercises, parameters, weekly schedule",
                "Session logging — completed, missed, time spent",
                "Adherence and progress reporting — filtered, exportable as PDF and Excel",
                "Three user roles fully operational — Patient, Orthoptist, Administrator",
                "Home therapy kit flow — in-person patients purchase the kit and access the platform from home",
                "Security and data compliance from day one",
                "500–1,000 user capacity, 24/7 availability"
            ],
            notHeading: "MVP Does Not Include (By Design)",
            notItems: [
                "Gamification — Phase 2",
                "Adaptive difficulty algorithms — Phase 2. In the MVP, the therapist controls all parameter adjustments manually",
                "AI adjustment engine — Phase 2",
                "WhatsApp / Calendar integration — Phase 2",
                "Mobile / multi-browser support — Phase 2",
                "Automated diagnosis — never. Clinical responsibility stays with the orthoptist",
                "Virtual Reality — out of scope"
            ]
        }
    },
    es: {
        tag: "05 — Arquitectura Propuesta",
        titlePart1: "Lo Que Construiríamos",
        titlePart2: "y Por Qué",
        layers: [
            {
                num: "Capa 01",
                name: "El Núcleo Clínico",
                sub: "Base de Backend",
                items: [
                    "Registro de paciente con diagnóstico y profesional asignado",
                    "El terapeuta construye un programa de terapia personalizado — seleccionando ejercicios, configurando parámetros, definiendo el horario semanal",
                    "El sistema registra cada sesión — completada, omitida, tiempo invertido, fecha",
                    "Los datos de adherencia y progreso regresan al panel del terapeuta para revisión clínica",
                    "Motor de reportes — filtrado por paciente, terapeuta o rango de fechas — exportable como PDF o Excel",
                    "Autenticación basada en roles en tres tipos de usuarios: Paciente, Ortoptista, Administrador",
                    "Registros médicos cifrados con historial de auditoría básico de cambios",
                    "Copias de seguridad automáticas diarias",
                    "Cumplimiento de la Ley 1581 de 2012 estructurado desde el día uno — no agregado después"
                ],
                techLabel: "Stack: ",
                techValue: "Node.js / PostgreSQL / Cloud (AWS o equivalente — pendiente de evaluación conjunta)"
            },
            {
                num: "Capa 02",
                name: "El Motor de Ejercicios",
                sub: "El Corazón del Producto",
                items: [
                    "Cuatro tipos de ejercicios construidos para el MVP: Seguimientos Suaves, Sacádicos, Vergencias Básicas, Acomodación Básica",
                    "Cada ejercicio es un estímulo visual preciso renderizado en pantalla — no un video, no una animación pregrabada, sino un entorno interactivo en tiempo real con el que el paciente interactúa",
                    "Cada ejercicio es configurable por el terapeuta: velocidad, tamaño, duración, nivel de dificultad",
                    "Controles de sesión — iniciar, pausar, reanudar, completar — para que el paciente o un padre supervisor puedan gestionar la experiencia",
                    "Construido para Chrome en PC — ajustado deliberadamente a la restricción clínica para asegurar un renderizado consistente y predecible",
                    "Rendimiento fluido y sin interrupciones — porque un tartamudeo en un ejercicio de terapia visual no es un problema de UI, es un problema clínico"
                ],
                techLabel: "Stack: ",
                techValue: "HTML5 Canvas + requestAnimationFrame + React session wrapper"
            },
            {
                num: "Capa 03",
                name: "La Doble Interfaz",
                sub: "Dos Filosofías de UX, Un Sistema",
                items: [
                    "<strong>Experiencia del Paciente:</strong> Iniciar sesión, ver la sesión de hoy, ejecutar los ejercicios, completar. Lo suficientemente simple para un niño, lo suficientemente claro para un padre que ayuda cerca. No requiere toma de decisiones — solo seguir el programa.",
                    "<strong>Experiencia del Terapeuta:</strong> Ver a sus pacientes. Ver sus diagnósticos. Ver en qué programa están, cuál es el horario, cómo se ve la adherencia. Los datos cuentan la historia — el terapeuta toma la decisión clínica. Asignar programas, ajustar parámetros, pausar o avanzar el tratamiento.",
                    "<strong>Experiencia del Administrador:</strong> Gestionar usuarios, gestionar configuraciones del sistema, extraer reportes globales de todos los pacientes y terapeutas.",
                    "Idioma: Español — con arquitectura preparada para Inglés para futura expansión",
                    "Plataforma: Web, Chrome, PC — construido según la restricción clínica, no por defecto"
                ],
                techLabel: "Stack: ",
                techValue: "React / Tailwind / Recharts"
            }
        ],
        mvp: {
            deliversHeading: "El MVP Entrega",
            deliversItems: [
                "Motor de ejercicios funcional — cuatro tipos de ejercicios clínicamente configurables",
                "Gestión completa de pacientes — registro, diagnóstico, profesional asignado",
                "Constructor de programas de terapia — ejercicios, parámetros, horario semanal",
                "Registro de sesiones — completadas, omitidas, tiempo invertido",
                "Reportes de adherencia y progreso — filtrados, exportables a PDF y Excel",
                "Tres roles de usuario completamente operativos — Paciente, Ortoptista, Administrador",
                "Flujo de Kit de Terapia en Casa — los pacientes presenciales adquieren el kit y acceden a la plataforma desde casa",
                "Seguridad y cumplimiento de datos desde el día uno",
                "Capacidad para 500–1,000 usuarios, disponibilidad 24/7"
            ],
            notHeading: "El MVP No Incluye (Diseñado Así)",
            notItems: [
                "Gamificación — Fase 2",
                "Algoritmos de dificultad adaptativa — Fase 2. En el MVP, el terapeuta controla todos los ajustes de parámetros manualmente",
                "Motor de ajuste por IA — Fase 2",
                "Integración WhatsApp / Calendario — Fase 2",
                "Soporte Móvil / Multi-navegador — Fase 2",
                "Diagnóstico automatizado — nunca. La responsabilidad clínica se mantiene con el ortoptista",
                "Realidad Virtual — fuera del alcance"
            ]
        }
    }
};

export default function Architecture() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="architecture">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>

            <div className="arch-layers">
                {t.layers.map((layer, index) => (
                    <ScrollReveal key={index} delay={index * 80 + 160} className="arch-layer">
                        <div className="arch-layer-num">{layer.num}</div>
                        <h3>{layer.name}</h3>
                        <div className="arch-sub">{layer.sub}</div>
                        <ul className="arch-items">
                            {layer.items.map((item, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                        <div className="arch-tech">
                            {layer.techLabel}<span>{layer.techValue}</span>
                        </div>
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal delay={400} className="mvp-note">
                <div className="mvp-col">
                    <h4>{t.mvp.deliversHeading}</h4>
                    <ul>
                        {t.mvp.deliversItems.map((item, index) => (
                            <li key={index}>
                                <span className="tick">✓</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mvp-col">
                    <h4>{t.mvp.notHeading}</h4>
                    <ul>
                        {t.mvp.notItems.map((item, index) => (
                            <li key={index}>
                                <span className="cross">○</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </ScrollReveal>
        </section>
    );
}
