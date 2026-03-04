import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Timeline.css';

const content = {
    en: {
        tag: "08 — Timeline & Phases",
        titlePart1: "A Realistic Path",
        titlePart2: "to MVP",
        phaseGroupA: {
            title: "Phase A — Discovery & Design",
            badge: "Separately Budgeted"
        },
        phaseDeliverables: {
            title: "Phase A Deliverables",
            text: "Complete UI/UX designs for all three user roles. Full user stories and acceptance criteria. Technical architecture specification. Exercise engine specification. Clinical observation documentation. These deliverables are yours regardless of what follows."
        },
        phaseGroupB: {
            title: "Phase B — Development to Launch",
            badge: "Budget Submitted After Phase A"
        },
        phasesA: [
            {
                num: "Phase 00",
                name: "Discovery & Design",
                items: ["Observe real therapy sessions", "Document exercise behavior precisely", "Define design system", "Build full UI/UX for patient and therapist", "Clinical approval on interface"],
                weeks: "Weeks 1–6",
                label: "Foundation"
            }
        ],
        phasesB: [
            {
                num: "Phase 01",
                name: "Clinical Core",
                items: ["Authentication + role-based access", "Patient registration + diagnosis", "Therapy program data structure + backend logic", "Database architecture", "Admin panel"],
                weeks: "Weeks 7–11",
                label: "Backend"
            },
            {
                num: "Phase 02",
                name: "The Engine",
                items: ["Canvas environment", "4 exercise types", "Therapist-configurable parameters", "Session controls", "Smooth performance validation"],
                weeks: "Weeks 12–16",
                label: "Core Product"
            },
            {
                num: "Phase 03",
                name: "Clinical Panel",
                items: ["Therapist dashboard", "Program assignment interface", "Adherence overview", "Progress visualization", "Parameter adjustment"],
                weeks: "Weeks 17–21",
                label: "Professional"
            },
            {
                num: "Phase 04",
                name: "Polish + Reports",
                items: ["PDF/Excel export", "Full QA", "Performance audit", "Security audit", "Patient UX review — child-user assumption", "Spanish language review"],
                weeks: "Weeks 22–24",
                label: "Refinement"
            },
            {
                num: "Phase 05",
                name: "MVP Launch",
                items: ["Real patient testing", "Clinical sign-off", "Bug resolution", "Production deploy", "Handover documentation"],
                weeks: "Weeks 25–27",
                label: "Live"
            }
        ],
        totalDesc: "Total estimated timeline to functional MVP with real patients. Phase A is budgeted independently. Phase B is quoted after Phase A is complete — based on a locked, agreed scope.",
        totalTime: "6 – 7 Months"
    },
    es: {
        tag: "[ES] 08 — Timeline & Phases",
        titlePart1: "[ES] A Realistic Path",
        titlePart2: "[ES] to MVP",
        phaseGroupA: {
            title: "[ES] Phase A — Discovery & Design",
            badge: "[ES] Separately Budgeted"
        },
        phaseDeliverables: {
            title: "[ES] Phase A Deliverables",
            text: "[ES] Complete UI/UX designs for all three user roles. Full user stories and acceptance criteria. Technical architecture specification. Exercise engine specification. Clinical observation documentation. These deliverables are yours regardless of what follows."
        },
        phaseGroupB: {
            title: "[ES] Phase B — Development to Launch",
            badge: "[ES] Budget Submitted After Phase A"
        },
        phasesA: [
            {
                num: "[ES] Phase 00",
                name: "[ES] Discovery & Design",
                items: ["[ES] Observe real therapy sessions", "[ES] Document exercise behavior precisely", "[ES] Define design system", "[ES] Build full UI/UX for patient and therapist", "[ES] Clinical approval on interface"],
                weeks: "[ES] Weeks 1–6",
                label: "[ES] Foundation"
            }
        ],
        phasesB: [
            {
                num: "[ES] Phase 01",
                name: "[ES] Clinical Core",
                items: ["[ES] Authentication + role-based access", "[ES] Patient registration + diagnosis", "[ES] Therapy program data structure + backend logic", "[ES] Database architecture", "[ES] Admin panel"],
                weeks: "[ES] Weeks 7–11",
                label: "[ES] Backend"
            },
            {
                num: "[ES] Phase 02",
                name: "[ES] The Engine",
                items: ["[ES] Canvas environment", "[ES] 4 exercise types", "[ES] Therapist-configurable parameters", "[ES] Session controls", "[ES] Smooth performance validation"],
                weeks: "[ES] Weeks 12–16",
                label: "[ES] Core Product"
            },
            {
                num: "[ES] Phase 03",
                name: "[ES] Clinical Panel",
                items: ["[ES] Therapist dashboard", "[ES] Program assignment interface", "[ES] Adherence overview", "[ES] Progress visualization", "[ES] Parameter adjustment"],
                weeks: "[ES] Weeks 17–21",
                label: "[ES] Professional"
            },
            {
                num: "[ES] Phase 04",
                name: "[ES] Polish + Reports",
                items: ["[ES] PDF/Excel export", "[ES] Full QA", "[ES] Performance audit", "[ES] Security audit", "[ES] Patient UX review — child-user assumption", "[ES] Spanish language review"],
                weeks: "[ES] Weeks 22–24",
                label: "[ES] Refinement"
            },
            {
                num: "[ES] Phase 05",
                name: "[ES] MVP Launch",
                items: ["[ES] Real patient testing", "[ES] Clinical sign-off", "[ES] Bug resolution", "[ES] Production deploy", "[ES] Handover documentation"],
                weeks: "[ES] Weeks 25–27",
                label: "[ES] Live"
            }
        ],
        totalDesc: "[ES] Total estimated timeline to functional MVP with real patients. Phase A is budgeted independently. Phase B is quoted after Phase A is complete — based on a locked, agreed scope.",
        totalTime: "[ES] 6 – 7 Months"
    }
};

export default function Timeline() {
    const { language } = useLanguage();
    const t = content[language];

    const renderPhase = (phase, index, offset = 0) => (
        <ScrollReveal key={phase.num} delay={((index + offset) % 4) * 80 + 160} className="phase">
            <div className="phase-id">
                <div className="phase-num">{phase.num}</div>
                <div className="phase-name">{phase.name}</div>
            </div>
            <div className="phase-items">
                {phase.items.map((item, i) => (
                    <span className="phase-tag" key={i}>{item}</span>
                ))}
            </div>
            <div className="phase-weeks">
                <span className="wk">{phase.weeks}</span>
                <span className="wk-label">{phase.label}</span>
            </div>
        </ScrollReveal>
    );

    return (
        <section id="timeline">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>

            <div className="phases">
                {/* PHASE A */}
                <ScrollReveal delay={160} className="phase-group-label">
                    <div className="pgl-title">{t.phaseGroupA.title}</div>
                    <div className="pgl-badge">{t.phaseGroupA.badge}</div>
                </ScrollReveal>

                {t.phasesA.map((phase, index) => renderPhase(phase, index, 1))}

                <ScrollReveal delay={320} className="phase-deliverables">
                    <div className="pd-title">{t.phaseDeliverables.title}</div>
                    <p>{t.phaseDeliverables.text}</p>
                </ScrollReveal>

                {/* PHASE B */}
                <ScrollReveal delay={400} className="phase-group-label">
                    <div className="pgl-title">{t.phaseGroupB.title}</div>
                    <div className="pgl-badge">{t.phaseGroupB.badge}</div>
                </ScrollReveal>

                {t.phasesB.map((phase, index) => renderPhase(phase, index, 6))}
            </div>

            <ScrollReveal delay={880} className="timeline-total">
                <p>{t.totalDesc}</p>
                <strong>{t.totalTime}</strong>
            </ScrollReveal>
        </section>
    );
}
