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
        tag: "[ES] 02 — Therapist",
        title: "[ES] The Therapist Journey",
        intro: "[ES] The therapist is the primary power user. They register patients, build treatment programs, monitor adherence, adjust parameters, and make clinical decisions. The system must give them clarity without overwhelming them — the data tells the story, the therapist makes the judgment.",
        stories: [
            {
                num: "T-01",
                statement: "[ES] As a <em>therapist</em>, I see my patient list with adherence indicators when I log in so that I immediately know who needs attention.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Dashboard shows a list of all patients assigned to this therapist",
                    "[ES] Each patient entry shows: name, diagnosis, program status (Active / Paused / Completed)",
                    "[ES] Each active patient shows an adherence indicator: sessions completed vs sessions assigned for the current week (e.g. \"3 of 5\")",
                    "[ES] Patients with low adherence (e.g. less than 50% for the current week) are visually flagged so the therapist can see at a glance who is falling behind",
                    "[ES] The list is sortable by name, status, or adherence",
                    "[ES] Clicking a patient name navigates to their individual detail page"
                ]
            },
            {
                num: "T-02",
                statement: "[ES] As a <em>therapist</em>, I register a new patient in the system after their in-person assessment so that they can begin their home therapy program.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Therapist enters: patient name, age, diagnosis, and assigns themselves as the responsible professional",
                    "[ES] A basic medical history field is available for clinical notes — free text input",
                    "[ES] All required fields must be filled before the record can be saved",
                    "[ES] Upon saving, the patient's account is created and login credentials are generated",
                    "[ES] The patient record is encrypted and stored in compliance with Ley 1581 de 2012",
                    "[ES] The creation of the record is logged in the audit trail with the therapist's identity and timestamp"
                ]
            },
            {
                num: "T-03",
                statement: "[ES] As a <em>therapist</em>, I create a personalized therapy program for a patient so that they have a structured treatment plan to follow at home.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Therapist selects which exercises to include from the four MVP types: Smooth Tracking, Saccades, Basic Vergences, Basic Accommodation",
                    "[ES] For each selected exercise, the therapist configures: speed, size, duration, and difficulty level",
                    "[ES] Therapist defines the order in which exercises appear within a session",
                    "[ES] Therapist sets the weekly frequency — how many sessions per week",
                    "[ES] Therapist sets the session duration",
                    "[ES] The program is immediately active and visible in the patient's dashboard once saved",
                    "[ES] Program creation is logged in the audit trail"
                ]
            },
            {
                num: "T-04",
                statement: "[ES] As a <em>therapist</em>, I view a patient's detail page so that I can see their full clinical picture and make informed decisions about their treatment.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Detail page shows: patient name, age, diagnosis, medical history notes, and assigned professional",
                    "[ES] Shows the current therapy program with all its parameters — exercises, speed, size, duration, difficulty, weekly frequency",
                    "[ES] Shows the full session history: each session with date, completed or missed, and time spent",
                    "[ES] Shows adherence over time as a simple chart — the therapist can see trends, not just today's number",
                    "[ES] Shows the current program status: Active, Paused, or Completed"
                ]
            },
            {
                num: "T-05",
                statement: "[ES] As a <em>therapist</em>, I adjust a patient's therapy program so that the treatment adapts to their progress or changing needs.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Therapist can change exercise parameters — speed, size, duration, difficulty — for any exercise in the program",
                    "[ES] Therapist can add or remove exercises from the program",
                    "[ES] Therapist can change the weekly frequency or session duration",
                    "[ES] Changes take effect immediately — the patient's next session reflects the updated program",
                    "[ES] Every change is logged in the audit trail with the therapist's identity, what was changed, and the timestamp",
                    "[ES] Previous program configurations are not deleted — the history is preserved"
                ]
            },
            {
                num: "T-06",
                statement: "[ES] As a <em>therapist</em>, I change a patient's program status so that I can pause, resume, or complete their treatment as clinically appropriate.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] <strong>Active</strong> — the patient has scheduled sessions and the program is running. Sessions appear in their dashboard.",
                    "[ES] <strong>Paused</strong> — the program is temporarily stopped. No sessions are scheduled. All data is preserved. The patient sees a clear message that their program is currently paused.",
                    "[ES] <strong>Completed</strong> — the program has finished. The patient's record and all session history remain in the system permanently. Medical records are never deleted.",
                    "[ES] Status changes are logged in the audit trail",
                    "[ES] A paused program can be reactivated to Active. A completed program cannot be reactivated — a new program must be created if treatment resumes."
                ]
            },
            {
                num: "T-07",
                statement: "[ES] As a <em>therapist</em>, I generate reports on my patients so that I can review performance and share information as needed.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Therapist can filter reports by: a specific patient, a date range, or their entire patient list",
                    "[ES] Reports show adherence data: sessions completed vs assigned over the selected period",
                    "[ES] Reports show session history: dates, completion status, time spent",
                    "[ES] Reports can be viewed on screen and exported as PDF or Excel",
                    "[ES] The therapist can only generate reports for patients assigned to them — not other therapists' patients"
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
