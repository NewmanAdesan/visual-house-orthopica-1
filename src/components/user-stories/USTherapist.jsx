import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';

const content = {
    en: {
        tag: "02 — Therapist",
        title: "The Therapist Journey",
        intro: "The therapist is the primary power user. They register patients, build treatment programs, monitor adherence, adjust parameters, and make clinical decisions. The system must give them clarity without overwhelming them — the data tells the story, the therapist makes the judgment.",
        stories: [
            {
                num: "T-01",
                statement: "As a <em>therapist</em>, I see my patient list with adherence indicators when I log in so that I immediately know who needs attention.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Dashboard shows a list of all patients assigned to this therapist",
                    "Each patient entry shows: name, diagnosis, program status (Active / Paused / Completed)",
                    "Each active patient shows an adherence indicator: sessions completed vs sessions assigned for the current week (e.g. \"3 of 5\")",
                    "Patients with low adherence (e.g. less than 50% for the current week) are visually flagged so the therapist can see at a glance who is falling behind",
                    "The list is sortable by name, status, or adherence",
                    "Clicking a patient name navigates to their individual detail page"
                ]
            },
            {
                num: "T-02",
                statement: "As a <em>therapist</em>, I register a new patient in the system after their in-person assessment so that they can begin their home therapy program.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Therapist enters: patient name, age, diagnosis, and assigns themselves as the responsible professional",
                    "A basic medical history field is available for clinical notes — free text input",
                    "All required fields must be filled before the record can be saved",
                    "Upon saving, the patient's account is created and login credentials are generated",
                    "The patient record is encrypted and stored in compliance with Ley 1581 de 2012",
                    "The creation of the record is logged in the audit trail with the therapist's identity and timestamp"
                ]
            },
            {
                num: "T-03",
                statement: "As a <em>therapist</em>, I create a personalized therapy program for a patient so that they have a structured treatment plan to follow at home.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Therapist selects which exercises to include from the four MVP types: Smooth Tracking, Saccades, Basic Vergences, Basic Accommodation",
                    "For each selected exercise, the therapist configures: speed, size, duration, and difficulty level",
                    "Therapist defines the order in which exercises appear within a session",
                    "Therapist sets the weekly frequency — how many sessions per week",
                    "Therapist sets the session duration",
                    "The program is immediately active and visible in the patient's dashboard once saved",
                    "Program creation is logged in the audit trail"
                ]
            },
            {
                num: "T-04",
                statement: "As a <em>therapist</em>, I view a patient's detail page so that I can see their full clinical picture and make informed decisions about their treatment.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Detail page shows: patient name, age, diagnosis, medical history notes, and assigned professional",
                    "Shows the current therapy program with all its parameters — exercises, speed, size, duration, difficulty, weekly frequency",
                    "Shows the full session history: each session with date, completed or missed, and time spent",
                    "Shows adherence over time as a simple chart — the therapist can see trends, not just today's number",
                    "Shows the current program status: Active, Paused, or Completed"
                ]
            },
            {
                num: "T-05",
                statement: "As a <em>therapist</em>, I adjust a patient's therapy program so that the treatment adapts to their progress or changing needs.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Therapist can change exercise parameters — speed, size, duration, difficulty — for any exercise in the program",
                    "Therapist can add or remove exercises from the program",
                    "Therapist can change the weekly frequency or session duration",
                    "Changes take effect immediately — the patient's next session reflects the updated program",
                    "Every change is logged in the audit trail with the therapist's identity, what was changed, and the timestamp",
                    "Previous program configurations are not deleted — the history is preserved"
                ]
            },
            {
                num: "T-06",
                statement: "As a <em>therapist</em>, I change a patient's program status so that I can pause, resume, or complete their treatment as clinically appropriate.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "<strong>Active</strong> — the patient has scheduled sessions and the program is running. Sessions appear in their dashboard.",
                    "<strong>Paused</strong> — the program is temporarily stopped. No sessions are scheduled. All data is preserved. The patient sees a clear message that their program is currently paused.",
                    "<strong>Completed</strong> — the program has finished. The patient's record and all session history remain in the system permanently. Medical records are never deleted.",
                    "Status changes are logged in the audit trail",
                    "A paused program can be reactivated to Active. A completed program cannot be reactivated — a new program must be created if treatment resumes."
                ]
            },
            {
                num: "T-07",
                statement: "As a <em>therapist</em>, I generate reports on my patients so that I can review performance and share information as needed.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Therapist can filter reports by: a specific patient, a date range, or their entire patient list",
                    "Reports show adherence data: sessions completed vs assigned over the selected period",
                    "Reports show session history: dates, completion status, time spent",
                    "Reports can be viewed on screen and exported as PDF or Excel",
                    "The therapist can only generate reports for patients assigned to them — not other therapists' patients"
                ]
            }
        ]
    },
    es: {
        tag: "02 — Terapeuta",
        title: "El Recorrido del Terapeuta",
        intro: "El terapeuta es el usuario principal de poder. Registra pacientes, construye programas de tratamiento, monitorea la adherencia, ajusta parámetros y toma decisiones clínicas. El sistema debe darle claridad sin abrumarlo — los datos cuentan la historia, el terapeuta emite el juicio.",
        stories: [
            {
                num: "T-01",
                statement: "Como <em>terapeuta</em>, veo mi lista de pacientes con indicadores de adherencia al iniciar sesión para saber inmediatamente quién necesita atención.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El panel muestra una lista de todos los pacientes asignados a este terapeuta",
                    "Cada entrada de paciente muestra: nombre, diagnóstico, estado del programa (Activo / En Pausa / Finalizado)",
                    "Cada paciente activo muestra un indicador de adherencia: sesiones completadas vs sesiones asignadas para la semana actual (ej. '3 de 5')",
                    "Los pacientes con baja adherencia (ej. menos del 50% para la semana actual) están visualmente señalados para que el terapeuta pueda ver de un vistazo quién se está quedando atrás",
                    "La lista es ordenable por nombre, estado o adherencia",
                    "Al hacer clic en el nombre de un paciente se navega a su página de detalle individual"
                ]
            },
            {
                num: "T-02",
                statement: "Como <em>terapeuta</em>, registro un nuevo paciente en el sistema después de su valoración presencial para que pueda comenzar su programa de terapia domiciliaria.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El terapeuta ingresa: nombre del paciente, edad, diagnóstico, y se asigna a sí mismo como profesional responsable",
                    "Un campo de Historia Clínica Básica está disponible para notas clínicas — entrada de texto libre",
                    "Todos los campos obligatorios deben completarse antes de guardar el registro",
                    "Al guardar, la cuenta del paciente se crea y las credenciales de acceso se generan",
                    "El registro del paciente se cifra y almacena en cumplimiento con la Ley 1581 de 2012",
                    "La creación del registro se registra en el registro de auditoría con la identidad del terapeuta y la marca de tiempo"
                ]
            },
            {
                num: "T-03",
                statement: "Como <em>terapeuta</em>, creo un programa de terapia personalizado para un paciente — según su patología y grado de severidad — para que tenga un plan de tratamiento estructurado a seguir en casa.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El terapeuta selecciona qué ejercicios incluir de los cuatro tipos del MVP: Seguimientos, Sacádicos, Vergencias Básicas, Acomodación Básica",
                    "Para cada ejercicio seleccionado, el terapeuta configura: velocidad, tamaño, duración y nivel de dificultad",
                    "El terapeuta define el orden en que los ejercicios aparecen dentro de una sesión",
                    "El terapeuta establece la frecuencia semanal — cuántas sesiones por semana",
                    "El terapeuta establece la duración de la sesión",
                    "El programa queda inmediatamente activo y visible en el panel del paciente una vez guardado",
                    "La creación del programa se registra en el registro de auditoría"
                ]
            },
            {
                num: "T-04",
                statement: "Como <em>terapeuta</em>, veo la página de detalle de un paciente para ver su panorama clínico completo y tomar decisiones informadas sobre su tratamiento.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "La página de detalle muestra: nombre del paciente, edad, diagnóstico, notas de historia clínica y profesional asignado",
                    "Muestra el programa de terapia actual con todos sus parámetros — ejercicios, velocidad, tamaño, duración, dificultad, frecuencia semanal",
                    "Muestra el historial completo de sesiones: cada sesión con fecha, completada u omitida, y tiempo empleado",
                    "Muestra la adherencia a lo largo del tiempo como un gráfico simple — el terapeuta puede ver tendencias, no solo el número de hoy",
                    "Muestra el estado actual del programa: Activo, En Pausa o Finalizado"
                ]
            },
            {
                num: "T-05",
                statement: "Como <em>terapeuta</em>, ajusto el programa de terapia de un paciente para que el tratamiento se adapte a su progreso o necesidades cambiantes.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El terapeuta puede cambiar los parámetros de ejercicio — velocidad, tamaño, duración, dificultad — para cualquier ejercicio del programa",
                    "El terapeuta puede agregar o eliminar ejercicios del programa",
                    "El terapeuta puede cambiar la frecuencia semanal o la duración de la sesión",
                    "Los cambios toman efecto inmediatamente — la próxima sesión del paciente refleja el programa actualizado",
                    "Cada cambio se registra en el registro de auditoría con la identidad del terapeuta, lo que se cambió y la marca de tiempo",
                    "Las configuraciones anteriores del programa no se eliminan — el historial se preserva"
                ]
            },
            {
                num: "T-06",
                statement: "Como <em>terapeuta</em>, cambio el estado del programa de un paciente para poder pausar, reanudar o finalizar su tratamiento según corresponda clínicamente.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "<strong>Activo</strong> — el paciente tiene sesiones programadas y el programa está en ejecución. Las sesiones aparecen en su panel.",
                    "<strong>En Pausa</strong> — el programa está temporalmente detenido. No se programan sesiones. Todos los datos se preservan. El paciente ve un mensaje claro de que su programa está actualmente en pausa.",
                    "<strong>Finalizado</strong> — el programa ha terminado. El registro del paciente y todo el historial de sesiones permanecen en el sistema permanentemente. Los historiales clínicos nunca se eliminan.",
                    "Los cambios de estado se registran en el registro de auditoría",
                    "Un programa en pausa puede reactivarse a Activo. Un programa finalizado no puede reactivarse — se debe crear un nuevo programa si el tratamiento se reanuda."
                ]
            },
            {
                num: "T-07",
                statement: "Como <em>terapeuta</em>, genero reportes de mis pacientes para poder revisar el rendimiento y compartir información según sea necesario.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El terapeuta puede filtrar reportes por: un paciente específico, un rango de fechas, o toda su lista de pacientes",
                    "Los reportes muestran datos de adherencia: sesiones completadas vs asignadas durante el período seleccionado",
                    "Los reportes muestran historial de sesiones: fechas, estado de completación, tiempo empleado",
                    "Los reportes se pueden ver en pantalla y exportar como PDF o Excel",
                    "El terapeuta solo puede generar reportes de pacientes asignados a él — no de pacientes de otros terapeutas"
                ]
            }
        ]
    }
};

export default function USTherapist() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="role-section" id="therapist">
            <ScrollReveal className="role-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80} className="role-title">{t.title}</ScrollReveal>
            <ScrollReveal delay={160} className="role-intro">
                <p>{t.intro}</p>
            </ScrollReveal>

            {t.stories.map((story, index) => (
                <ScrollReveal key={index} delay={240 + (index % 3) * 80} className="story-block">
                    <div className="story-header">
                        <span className="story-num">{story.num}</span>
                        <div
                            className="story-statement"
                            dangerouslySetInnerHTML={{ __html: story.statement }}
                        />
                    </div>
                    <div className="story-details">
                        <div className="criteria-title">{story.criteriaTitle}</div>
                        <ul className="criteria-list">
                            {story.criteria.map((criteria, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: criteria }} />
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}
