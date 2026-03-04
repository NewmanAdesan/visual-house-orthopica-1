import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';

const content = {
    en: {
        tag: "01 — Patient",
        title: "The Patient Journey",
        intro: "The patient does not self-register. Their account is created by the therapist after an in-person assessment. From the patient's perspective, the system should feel simple — log in, do the exercises, log out. No clinical decisions. No complexity. Especially for children, who make up 70% of the patient base.",
        stories: [
            {
                num: "P-01",
                statement: "As a <em>patient</em>, I receive my login credentials after my in-person assessment so that I can access my therapy program from home.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "The therapist creates the patient's account with name, age, diagnosis, and assigned professional",
                    "The patient receives login credentials — email and password or a generated access link",
                    "The patient can log in using these credentials from any PC with Chrome and internet access",
                    "If credentials are incorrect, a clear error message is shown without revealing which field is wrong (security)"
                ]
            },
            {
                num: "P-02",
                statement: "As a <em>patient</em>, I see my dashboard after logging in so that I know exactly what I need to do today.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Dashboard shows today's scheduled session — including the exercise names in the session",
                    "Dashboard shows the number of sessions completed this week vs how many are assigned (e.g. \"3 of 5 sessions completed\")",
                    "Dashboard shows a simple visual of overall progress — enough to feel encouraging, not clinical",
                    "If no session is scheduled for today, the dashboard clearly says so and shows the next scheduled session date",
                    "The interface is simple enough for a child to understand — no dropdowns, no configuration, no decisions required"
                ]
            },
            {
                num: "P-03",
                statement: "As a <em>patient</em>, I start a therapy session and complete the exercises on screen so that I follow my treatment program from home.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Patient clicks a single \"Start Session\" button — no further setup required",
                    "Exercises load one by one in the order the therapist defined",
                    "Each exercise runs as a real-time interactive visual stimulus on a Canvas element",
                    "Exercise parameters (speed, size, duration, difficulty) match exactly what the therapist configured",
                    "The exercise renders smoothly with no visible lag or frame drops — clinical precision is required",
                    "When one exercise finishes, the next one begins automatically or with a simple \"Next\" prompt",
                    "When all exercises are complete, the session is marked as completed"
                ]
            },
            {
                num: "P-04",
                statement: "As a <em>patient</em>, I can pause and resume a session so that I can take a break if needed without losing progress.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "A clearly visible \"Pause\" button is available during any exercise",
                    "Pausing stops the exercise immediately — the visual stimulus freezes or disappears",
                    "A \"Resume\" button appears — clicking it continues the exercise from where it was paused",
                    "If the patient closes the browser mid-session without completing, the session is marked as incomplete/missed",
                    "The system does not allow partial credit — a session is either completed in full or marked as missed"
                ]
            },
            {
                num: "P-05",
                statement: "As a <em>patient</em>, I can view my session history so that I can see what I have completed and what I missed.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "History shows a list of all sessions — each with the date, whether it was completed or missed, and the time spent",
                    "Completed sessions are visually distinguished from missed sessions (color or icon)",
                    "The history is ordered by date, most recent first",
                    "The patient can only view their own data — no access to other patients' information"
                ]
            }
        ]
    },
    es: {
        tag: "01 — Paciente",
        title: "El Recorrido del Paciente",
        intro: "El paciente no se auto-registra. Su cuenta es creada por el terapeuta después de una valoración presencial. Desde la perspectiva del paciente, el sistema debe sentirse simple — iniciar sesión, hacer los ejercicios, cerrar sesión. Sin decisiones clínicas. Sin complejidad. Especialmente para los niños, que representan el 70% de la base de pacientes.",
        stories: [
            {
                num: "P-01",
                statement: "Como <em>paciente</em>, recibo mis credenciales de acceso después de mi valoración presencial para poder acceder a mi programa de terapia desde casa.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El terapeuta crea la cuenta del paciente con nombre, edad, diagnóstico y profesional asignado",
                    "El paciente recibe credenciales de acceso — correo electrónico y contraseña o un enlace de acceso generado",
                    "El paciente puede iniciar sesión usando estas credenciales desde cualquier PC con Chrome y acceso a Internet",
                    "Si las credenciales son incorrectas, se muestra un mensaje de error claro sin revelar cuál campo está mal (seguridad)"
                ]
            },
            {
                num: "P-02",
                statement: "Como <em>paciente</em>, veo mi panel de control al iniciar sesión para saber exactamente qué debo hacer hoy.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El panel muestra la sesión programada de hoy — incluyendo los nombres de los ejercicios en la sesión",
                    "El panel muestra el número de sesiones completadas esta semana vs cuántas están asignadas (ej. '3 de 5 sesiones completadas')",
                    "El panel muestra una visualización simple del progreso general — suficiente para ser motivador, no clínico",
                    "Si no hay sesión programada para hoy, el panel lo indica claramente y muestra la fecha de la próxima sesión",
                    "La interfaz es lo suficientemente simple para que un niño la entienda — sin desplegables, sin configuración, sin decisiones requeridas"
                ]
            },
            {
                num: "P-03",
                statement: "Como <em>paciente</em>, inicio una sesión de terapia y completo los ejercicios en pantalla para seguir mi programa de tratamiento desde casa.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El paciente hace clic en un solo botón 'Iniciar Sesión' — sin configuración adicional requerida",
                    "Los ejercicios se cargan uno por uno en el orden que el terapeuta definió",
                    "Cada ejercicio se ejecuta como un estímulo visual interactivo en tiempo real en un elemento Canvas",
                    "Los parámetros del ejercicio (velocidad, tamaño, duración, dificultad) coinciden exactamente con lo que el terapeuta configuró",
                    "El ejercicio se renderiza de forma fluida sin latencia ni caídas de cuadros visibles — se requiere precisión clínica",
                    "Cuando un ejercicio termina, el siguiente comienza automáticamente o con un simple botón 'Siguiente'",
                    "Cuando todos los ejercicios están completos, la sesión se marca como completada"
                ]
            },
            {
                num: "P-04",
                statement: "Como <em>paciente</em>, puedo pausar y reanudar una sesión para poder tomar un descanso si es necesario sin perder el progreso.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "Un botón 'Pausar' claramente visible está disponible durante cualquier ejercicio",
                    "Pausar detiene el ejercicio inmediatamente — el estímulo visual se congela o desaparece",
                    "Aparece un botón 'Reanudar' — al hacer clic continúa el ejercicio desde donde se pausó",
                    "Si el paciente cierra el navegador a mitad de sesión sin completar, la sesión se marca como incompleta/omitida",
                    "El sistema no permite crédito parcial — una sesión se completa en su totalidad o se marca como omitida"
                ]
            },
            {
                num: "P-05",
                statement: "Como <em>paciente</em>, puedo ver mi historial de sesiones para saber qué he completado y qué he omitido.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El historial muestra una lista de todas las sesiones — cada una con la fecha, si fue completada u omitida, y el tiempo empleado",
                    "Las sesiones completadas se distinguen visualmente de las omitidas (color o ícono)",
                    "El historial está ordenado por fecha, la más reciente primero",
                    "El paciente solo puede ver sus propios datos — sin acceso a información de otros pacientes"
                ]
            }
        ]
    }
};

export default function USPatient() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="role-section" id="patient">
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
                                <li key={i}>{criteria}</li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>
            ))}
        </div>
    );
}
