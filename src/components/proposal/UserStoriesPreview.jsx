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
        tag: "[ES] 06 — User Stories & Acceptance Criteria",
        titlePart1: "[ES] How Every Role",
        titlePart2: "[ES] Interacts With The System",
        sub: "[ES] A step-by-step walkthrough of how each user — patient, therapist, and administrator — experiences the platform from first login to daily use. Each action defined, each behavior specified.",
        cards: [
            {
                role: "[ES] The Patient",
                flow: "[ES] Account created by the therapist after in-person assessment — the patient never self-registers. They log in and see one thing: today's session. How many exercises, what to do, start. They follow the program. The system records everything — completed, missed, time spent, date. For a child, there are no decisions to make. Just participation."
            },
            {
                role: "[ES] The Therapist",
                flow: "[ES] Logs in and immediately sees who needs attention — every patient listed with their diagnosis, program status, and a clear adherence indicator showing sessions completed vs assigned this week. Registers new patients with diagnosis and medical history. Builds personalized programs — selects exercises, configures every parameter, sets the schedule. Reviews individual patient progress over time. Adjusts, pauses, or completes programs based on the data. Exports reports filtered by patient, date, or their full patient list."
            },
            {
                role: "[ES] The Administrator",
                flow: "[ES] Global visibility — total patients, active programs, overall adherence, active therapists. Manages all user accounts. Pulls cross-system reports that span every therapist and every patient. Views the audit trail — a chronological record of who did what and when, for accountability and data protection compliance."
            }
        ],
        ctaText: "[ES] Every user action, system behavior, and acceptance criterion is detailed in the accompanying document —",
        ctaLinkText: "[ES] View Full User Stories & Acceptance Criteria"
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
