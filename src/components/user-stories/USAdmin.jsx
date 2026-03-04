import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';

const content = {
    en: {
        tag: "03 — Administrator",
        title: "The Administrator Journey",
        intro: "The administrator has global visibility and system-level control. They manage accounts, monitor overall performance, and maintain the audit trail. The admin does not interact with clinical data directly — their role is operational, not therapeutic.",
        stories: [
            {
                num: "A-01",
                statement: "As an <em>administrator</em>, I see a global overview when I log in so that I understand the health of the entire system at a glance.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Dashboard shows: total number of patients in the system",
                    "Total number of active therapy programs currently running",
                    "Overall adherence percentage across all patients — a single number that indicates system-wide patient engagement",
                    "Number of active therapists with assigned patients",
                    "These numbers update in real time or on page refresh"
                ]
            },
            {
                num: "A-02",
                statement: "As an <em>administrator</em>, I manage user accounts so that the right people have the right access to the system.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Admin can create new therapist accounts with name, email, and role assignment",
                    "Admin can create new patient accounts (same process as therapist creation, but from the admin level)",
                    "Admin can edit user information — name, email, role",
                    "Admin can deactivate accounts — deactivated users cannot log in, but all their data is preserved in the system",
                    "Admin cannot permanently delete accounts or medical records — data preservation is enforced by the system",
                    "All account changes are logged in the audit trail"
                ]
            },
            {
                num: "A-03",
                statement: "As an <em>administrator</em>, I manage system settings so that the platform operates according to our organizational needs.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Admin can configure default session parameters — default speed, size, duration, difficulty for new programs (therapists can override per patient)",
                    "Admin can manage system language settings",
                    "Admin can view backup status and confirm daily automated backups are running",
                    "Settings changes are logged in the audit trail"
                ]
            },
            {
                num: "A-04",
                statement: "As an <em>administrator</em>, I generate global reports so that I can evaluate performance across the entire organization.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Admin can filter reports by: any patient, any therapist, date range, or the entire system",
                    "Reports include the same adherence and session data available to therapists — but across all therapists and all patients",
                    "Reports can be viewed on screen and exported as PDF or Excel",
                    "Admin reports are not limited to a single therapist's patient list — they span the whole organization"
                ]
            },
            {
                num: "A-05",
                statement: "As an <em>administrator</em>, I view the audit trail so that I can verify accountability and satisfy data protection compliance requirements.",
                criteriaTitle: "Acceptance Criteria",
                criteria: [
                    "Audit trail is a chronological log of significant actions: patient creation, program creation, program changes, status changes, account changes, settings changes",
                    "Each entry shows: who performed the action, what the action was, and when it happened (timestamp)",
                    "The audit trail is read-only — no user, including the admin, can edit or delete entries",
                    "The trail is searchable by user, action type, or date range",
                    "This log exists to answer the question \"who did what and when\" — a requirement for Ley 1581 de 2012 compliance"
                ]
            }
        ]
    },
    es: {
        tag: "03 — Administrador",
        title: "El Recorrido del Administrador",
        intro: "El administrador tiene visibilidad global y control a nivel de sistema. Gestiona cuentas, monitorea el rendimiento general y mantiene el registro de auditoría. El administrador no interactúa con datos clínicos directamente — su rol es operativo, no terapéutico.",
        stories: [
            {
                num: "A-01",
                statement: "Como <em>administrador</em>, veo una vista general global al iniciar sesión para entender la salud de todo el sistema de un vistazo.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El panel muestra: número total de pacientes en el sistema",
                    "Número total de programas de terapia activos actualmente en ejecución",
                    "Porcentaje de adherencia general de todos los pacientes — un número único que indica el compromiso de los pacientes en todo el sistema",
                    "Número de terapeutas activos con pacientes asignados",
                    "Estos números se actualizan en tiempo real o al refrescar la página"
                ]
            },
            {
                num: "A-02",
                statement: "Como <em>administrador</em>, gestiono las cuentas de usuario para que las personas correctas tengan el acceso correcto al sistema.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El administrador puede crear nuevas cuentas de terapeuta con nombre, correo electrónico y asignación de rol",
                    "El administrador puede crear nuevas cuentas de paciente (mismo proceso que la creación por terapeuta, pero desde el nivel de administrador)",
                    "El administrador puede editar información de usuario — nombre, correo electrónico, rol",
                    "El administrador puede desactivar cuentas — los usuarios desactivados no pueden iniciar sesión, pero todos sus datos se preservan en el sistema",
                    "El administrador no puede eliminar permanentemente cuentas o historiales clínicos — la preservación de datos es impuesta por el sistema",
                    "Todos los cambios de cuenta se registran en el registro de auditoría"
                ]
            },
            {
                num: "A-03",
                statement: "Como <em>administrador</em>, gestiono la configuración del sistema para que la plataforma opere según las necesidades organizacionales.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El administrador puede configurar parámetros de sesión predeterminados — velocidad, tamaño, duración, dificultad por defecto para nuevos programas (los terapeutas pueden anular por paciente)",
                    "El administrador puede gestionar la configuración de idioma del sistema",
                    "El administrador puede ver el estado de los respaldos y confirmar que los respaldos automáticos diarios están ejecutándose",
                    "Los cambios de configuración se registran en el registro de auditoría"
                ]
            },
            {
                num: "A-04",
                statement: "Como <em>administrador</em>, genero reportes globales para poder evaluar el rendimiento de toda la organización.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El administrador puede filtrar reportes por: cualquier paciente, cualquier terapeuta, rango de fechas, o todo el sistema",
                    "Los reportes incluyen los mismos datos de adherencia y sesiones disponibles para los terapeutas — pero de todos los terapeutas y todos los pacientes",
                    "Los reportes se pueden ver en pantalla y exportar como PDF o Excel",
                    "Los reportes del administrador no están limitados a la lista de pacientes de un solo terapeuta — abarcan toda la organización"
                ]
            },
            {
                num: "A-05",
                statement: "Como <em>administrador</em>, consulto el registro de auditoría para poder verificar la accountability y satisfacer los requisitos de cumplimiento de protección de datos.",
                criteriaTitle: "Criterios de Aceptación",
                criteria: [
                    "El registro de auditoría es un log cronológico de acciones significativas: creación de pacientes, creación de programas, cambios de programas, cambios de estado, cambios de cuentas, cambios de configuración",
                    "Cada entrada muestra: quién realizó la acción, cuál fue la acción, y cuándo ocurrió (marca de tiempo)",
                    "El registro de auditoría es de solo lectura — ningún usuario, incluyendo el administrador, puede editar o eliminar entradas",
                    "El registro es buscable por usuario, tipo de acción o rango de fechas",
                    "Este log existe para responder la pregunta 'quién hizo qué y cuándo' — un requisito para el cumplimiento de la Ley 1581 de 2012"
                ]
            }
        ]
    }
};

export default function USAdmin() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <div className="role-section" id="admin">
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
