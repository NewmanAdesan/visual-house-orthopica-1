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
        tag: "[ES] 03 — Administrator",
        title: "[ES] The Administrator Journey",
        intro: "[ES] The administrator has global visibility and system-level control. They manage accounts, monitor overall performance, and maintain the audit trail. The admin does not interact with clinical data directly — their role is operational, not therapeutic.",
        stories: [
            {
                num: "A-01",
                statement: "[ES] As an <em>administrator</em>, I see a global overview when I log in so that I understand the health of the entire system at a glance.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Dashboard shows: total number of patients in the system",
                    "[ES] Total number of active therapy programs currently running",
                    "[ES] Overall adherence percentage across all patients — a single number that indicates system-wide patient engagement",
                    "[ES] Number of active therapists with assigned patients",
                    "[ES] These numbers update in real time or on page refresh"
                ]
            },
            {
                num: "A-02",
                statement: "[ES] As an <em>administrator</em>, I manage user accounts so that the right people have the right access to the system.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Admin can create new therapist accounts with name, email, and role assignment",
                    "[ES] Admin can create new patient accounts (same process as therapist creation, but from the admin level)",
                    "[ES] Admin can edit user information — name, email, role",
                    "[ES] Admin can deactivate accounts — deactivated users cannot log in, but all their data is preserved in the system",
                    "[ES] Admin cannot permanently delete accounts or medical records — data preservation is enforced by the system",
                    "[ES] All account changes are logged in the audit trail"
                ]
            },
            {
                num: "A-03",
                statement: "[ES] As an <em>administrator</em>, I manage system settings so that the platform operates according to our organizational needs.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Admin can configure default session parameters — default speed, size, duration, difficulty for new programs (therapists can override per patient)",
                    "[ES] Admin can manage system language settings",
                    "[ES] Admin can view backup status and confirm daily automated backups are running",
                    "[ES] Settings changes are logged in the audit trail"
                ]
            },
            {
                num: "A-04",
                statement: "[ES] As an <em>administrator</em>, I generate global reports so that I can evaluate performance across the entire organization.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Admin can filter reports by: any patient, any therapist, date range, or the entire system",
                    "[ES] Reports include the same adherence and session data available to therapists — but across all therapists and all patients",
                    "[ES] Reports can be viewed on screen and exported as PDF or Excel",
                    "[ES] Admin reports are not limited to a single therapist's patient list — they span the whole organization"
                ]
            },
            {
                num: "A-05",
                statement: "[ES] As an <em>administrator</em>, I view the audit trail so that I can verify accountability and satisfy data protection compliance requirements.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Audit trail is a chronological log of significant actions: patient creation, program creation, program changes, status changes, account changes, settings changes",
                    "[ES] Each entry shows: who performed the action, what the action was, and when it happened (timestamp)",
                    "[ES] The audit trail is read-only — no user, including the admin, can edit or delete entries",
                    "[ES] The trail is searchable by user, action type, or date range",
                    "[ES] This log exists to answer the question \"who did what and when\" — a requirement for Ley 1581 de 2012 compliance"
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
