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
        tag: "[ES] 05 — Proposed Architecture",
        titlePart1: "[ES] What We Would",
        titlePart2: "[ES] Build and Why",
        layers: [
            {
                num: "[ES] Layer 01",
                name: "[ES] The Clinical Core",
                sub: "[ES] Backend Foundation",
                items: [
                    "[ES] Patient registration with diagnosis and assigned professional",
                    "[ES] Therapist builds personalized therapy program — selecting exercises, setting parameters, defining the weekly schedule",
                    "[ES] System records every session — completed, missed, time spent, date",
                    "[ES] Adherence and progress data flows back to the therapist dashboard for clinical review",
                    "[ES] Reporting engine — filtered by patient, therapist, or date range — exported as PDF or Excel",
                    "[ES] Role-based authentication across three user types: Patient, Orthoptist, Administrator",
                    "[ES] Encrypted medical records with basic change history audit trail",
                    "[ES] Daily automated backups",
                    "[ES] Ley 1581 de 2012 compliance architected from day one — not added later"
                ],
                techLabel: "[ES] Stack: ",
                techValue: "[ES] Node.js / PostgreSQL / Cloud (AWS or equivalent — pending evaluation together)"
            },
            {
                num: "[ES] Layer 02",
                name: "[ES] The Exercise Engine",
                sub: "[ES] The Heart of The Product",
                items: [
                    "[ES] Four exercise types built for MVP: Smooth Tracking, Saccades, Basic Vergences, Basic Accommodation",
                    "[ES] Each exercise is a precise visual stimulus rendered on screen — not a video, not a pre-recorded animation, but a real-time interactive environment the patient engages with",
                    "[ES] Every exercise is configurable by the therapist: speed, size, duration, difficulty level",
                    "[ES] Session controls — start, pause, resume, complete — so the patient or a supervising parent can manage the experience",
                    "[ES] Built for Chrome on PC — deliberately matched to the clinical constraint to ensure consistent, predictable rendering",
                    "[ES] Smooth, lag-free performance — because a stutter in a visual therapy exercise is not a UI issue, it is a clinical issue"
                ],
                techLabel: "[ES] Stack: ",
                techValue: "[ES] HTML5 Canvas + requestAnimationFrame + React session wrapper"
            },
            {
                num: "[ES] Layer 03",
                name: "[ES] The Dual Interface",
                sub: "[ES] Two UX Philosophies, One System",
                items: [
                    "[ES] <strong>Patient experience:</strong> Log in, see today's session, run the exercises, complete. Simple enough for a child, clear enough for a parent helping nearby. No decisions required — just follow the program.",
                    "[ES] <strong>Therapist experience:</strong> See your patients. See their diagnosis. See what program they are on, what the schedule is, what the adherence looks like. The data tells the story — the therapist makes the clinical decision. Assign programs, adjust parameters, pause or progress treatment.",
                    "[ES] <strong>Administrator experience:</strong> Manage users, manage system settings, pull global reports across all patients and therapists.",
                    "[ES] Language: Spanish — with English-ready architecture for future expansion",
                    "[ES] Platform: Web, Chrome, PC — built to the clinical constraint, not by default"
                ],
                techLabel: "[ES] Stack: ",
                techValue: "[ES] React / Tailwind / Recharts"
            }
        ],
        mvp: {
            deliversHeading: "[ES] MVP Delivers",
            deliversItems: [
                "[ES] Functional exercise engine — four clinically configurable exercise types",
                "[ES] Complete patient management — registration, diagnosis, assigned professional",
                "[ES] Therapy program builder — exercises, parameters, weekly schedule",
                "[ES] Session logging — completed, missed, time spent",
                "[ES] Adherence and progress reporting — filtered, exportable as PDF and Excel",
                "[ES] Three user roles fully operational — Patient, Orthoptist, Administrator",
                "[ES] Home therapy kit flow — in-person patients purchase the kit and access the platform from home",
                "[ES] Security and data compliance from day one",
                "[ES] 500–1,000 user capacity, 24/7 availability"
            ],
            notHeading: "[ES] MVP Does Not Include (By Design)",
            notItems: [
                "[ES] Gamification — Phase 2",
                "[ES] Adaptive difficulty algorithms — Phase 2. In the MVP, the therapist controls all parameter adjustments manually",
                "[ES] AI adjustment engine — Phase 2",
                "[ES] WhatsApp / Calendar integration — Phase 2",
                "[ES] Mobile / multi-browser support — Phase 2",
                "[ES] Automated diagnosis — never. Clinical responsibility stays with the orthoptist",
                "[ES] Virtual Reality — out of scope"
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
