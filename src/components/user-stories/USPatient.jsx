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
        tag: "[ES] 01 — Patient",
        title: "[ES] The Patient Journey",
        intro: "[ES] The patient does not self-register. Their account is created by the therapist after an in-person assessment. From the patient's perspective, the system should feel simple — log in, do the exercises, log out. No clinical decisions. No complexity. Especially for children, who make up 70% of the patient base.",
        stories: [
            {
                num: "P-01",
                statement: "[ES] As a <em>patient</em>, I receive my login credentials after my in-person assessment so that I can access my therapy program from home.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] The therapist creates the patient's account with name, age, diagnosis, and assigned professional",
                    "[ES] The patient receives login credentials — email and password or a generated access link",
                    "[ES] The patient can log in using these credentials from any PC with Chrome and internet access",
                    "[ES] If credentials are incorrect, a clear error message is shown without revealing which field is wrong (security)"
                ]
            },
            {
                num: "P-02",
                statement: "[ES] As a <em>patient</em>, I see my dashboard after logging in so that I know exactly what I need to do today.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Dashboard shows today's scheduled session — including the exercise names in the session",
                    "[ES] Dashboard shows the number of sessions completed this week vs how many are assigned (e.g. \"3 of 5 sessions completed\")",
                    "[ES] Dashboard shows a simple visual of overall progress — enough to feel encouraging, not clinical",
                    "[ES] If no session is scheduled for today, the dashboard clearly says so and shows the next scheduled session date",
                    "[ES] The interface is simple enough for a child to understand — no dropdowns, no configuration, no decisions required"
                ]
            },
            {
                num: "P-03",
                statement: "[ES] As a <em>patient</em>, I start a therapy session and complete the exercises on screen so that I follow my treatment program from home.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] Patient clicks a single \"Start Session\" button — no further setup required",
                    "[ES] Exercises load one by one in the order the therapist defined",
                    "[ES] Each exercise runs as a real-time interactive visual stimulus on a Canvas element",
                    "[ES] Exercise parameters (speed, size, duration, difficulty) match exactly what the therapist configured",
                    "[ES] The exercise renders smoothly with no visible lag or frame drops — clinical precision is required",
                    "[ES] When one exercise finishes, the next one begins automatically or with a simple \"Next\" prompt",
                    "[ES] When all exercises are complete, the session is marked as completed"
                ]
            },
            {
                num: "P-04",
                statement: "[ES] As a <em>patient</em>, I can pause and resume a session so that I can take a break if needed without losing progress.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] A clearly visible \"Pause\" button is available during any exercise",
                    "[ES] Pausing stops the exercise immediately — the visual stimulus freezes or disappears",
                    "[ES] A \"Resume\" button appears — clicking it continues the exercise from where it was paused",
                    "[ES] If the patient closes the browser mid-session without completing, the session is marked as incomplete/missed",
                    "[ES] The system does not allow partial credit — a session is either completed in full or marked as missed"
                ]
            },
            {
                num: "P-05",
                statement: "[ES] As a <em>patient</em>, I can view my session history so that I can see what I have completed and what I missed.",
                criteriaTitle: "[ES] Acceptance Criteria",
                criteria: [
                    "[ES] History shows a list of all sessions — each with the date, whether it was completed or missed, and the time spent",
                    "[ES] Completed sessions are visually distinguished from missed sessions (color or icon)",
                    "[ES] The history is ordered by date, most recent first",
                    "[ES] The patient can only view their own data — no access to other patients' information"
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
