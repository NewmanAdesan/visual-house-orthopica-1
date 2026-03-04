import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Observations.css';

const content = {
    en: {
        tag: "03 — Key Observations",
        titlePart1: "What Others",
        titlePart2: "Will Miss",
        desc: "Five things we found in your brief that most developers will overlook entirely.",
        items: [
            {
                num: "01",
                label: "Critical Finding",
                heading: "The Exercise Engine Is The Product",
                body: "Most proposals will treat the interactive exercise engine as a feature. It is not. It is the core of everything. This engine must render <strong>smooth, precise visual stimuli in real time</strong> — with exact timing, configurable parameters, and zero lag — because children are using it for therapy. A stuttering animation is not a bug. It is a failed treatment session. We know exactly what this requires technically and we address it in the architecture section below. Getting this wrong means the therapy does not work. Getting it right means you have <strong>something licensable to other providers worldwide.</strong>"
            },
            {
                num: "02",
                label: "UX Architecture",
                heading: "Two Completely Different Users In One System",
                body: "70% of your patients are children. They need an interface so simple and engaging they can run a session with minimal supervision. Your orthoptists need a panel sophisticated enough for clinical decision-making. These are not two pages — they are <strong>two entirely different UX philosophies</strong> that must coexist in one system. Most developers will build one and compromise the other. And there is an invisible user the brief does not name — <strong>the parent.</strong> A child doing exercises at home means someone nearby may need to help start a session, understand what is expected, or troubleshoot. The interface must account for this without adding complexity."
            },
            {
                num: "03",
                label: "Data Security",
                heading: "Clinical Data vs Gameplay Analytics",
                body: "The system records two types of data: protected health information (PHI) like diagnosis and treatment plans, and real-time gameplay telemetry like reaction time over 500 frames. <strong>Mixing these in the same database table is an architectural disaster.</strong> We separate clinical records from high-frequency session telemetry from day one. This keeps the dashboard fast, the medical records secure, and the server costs low as your patient base scales."
            },
            {
                num: "04",
                label: "Hardware Variability",
                heading: "The 'Screen Size' Trap",
                body: "Vision therapy relies on exact spatial distances. A target moving 5cm across a 27-inch iMac is very different from a target moving 5cm across an iPad. <strong>Responsive design is not enough here.</strong> The system must physically calibrate to the screen it is running on. Without a physical calibration step before the first session, your 'exact' exercises will be distorted depending on whether the patient is using a tablet or a TV monitor."
            },
            {
                num: "05",
                label: "Offline Resilience",
                heading: "Unstable Connections Cannot Interrupt Therapy",
                body: "If a patient's internet drops for 10 seconds during an exercise, the session cannot crash. The exercise engine must run entirely on the client side (in the browser), caching the results locally, and syncing back to the server only when the connection is stable. <strong>Continuous gameplay, asynchronous syncing.</strong> This is the only way to guarantee therapy isn't interrupted by household wi-fi issues."
            }
        ]
    },
    es: {
        tag: "[ES] 03 — Key Observations",
        titlePart1: "[ES] What Others",
        titlePart2: "[ES] Will Miss",
        desc: "[ES] Five things we found in your brief that most developers will overlook entirely.",
        items: [
            {
                num: "01",
                label: "[ES] Critical Finding",
                heading: "[ES] The Exercise Engine Is The Product",
                body: "[ES] Most proposals will treat the interactive exercise engine as a feature. It is not. It is the core of everything. This engine must render <strong>smooth, precise visual stimuli in real time</strong> — with exact timing, configurable parameters, and zero lag — because children are using it for therapy. A stuttering animation is not a bug. It is a failed treatment session. We know exactly what this requires technically and we address it in the architecture section below. Getting this wrong means the therapy does not work. Getting it right means you have <strong>something licensable to other providers worldwide.</strong>"
            },
            {
                num: "02",
                label: "[ES] UX Architecture",
                heading: "[ES] Two Completely Different Users In One System",
                body: "[ES] 70% of your patients are children. They need an interface so simple and engaging they can run a session with minimal supervision. Your orthoptists need a panel sophisticated enough for clinical decision-making. These are not two pages — they are <strong>two entirely different UX philosophies</strong> that must coexist in one system. Most developers will build one and compromise the other. And there is an invisible user the brief does not name — <strong>the parent.</strong> A child doing exercises at home means someone nearby may need to help start a session, understand what is expected, or troubleshoot. The interface must account for this without adding complexity."
            },
            {
                num: "03",
                label: "[ES] Data Security",
                heading: "[ES] Clinical Data vs Gameplay Analytics",
                body: "[ES] The system records two types of data: protected health information (PHI) like diagnosis and treatment plans, and real-time gameplay telemetry like reaction time over 500 frames. <strong>Mixing these in the same database table is an architectural disaster.</strong> We separate clinical records from high-frequency session telemetry from day one. This keeps the dashboard fast, the medical records secure, and the server costs low as your patient base scales."
            },
            {
                num: "04",
                label: "[ES] Hardware Variability",
                heading: "[ES] The 'Screen Size' Trap",
                body: "[ES] Vision therapy relies on exact spatial distances. A target moving 5cm across a 27-inch iMac is very different from a target moving 5cm across an iPad. <strong>Responsive design is not enough here.</strong> The system must physically calibrate to the screen it is running on. Without a physical calibration step before the first session, your 'exact' exercises will be distorted depending on whether the patient is using a tablet or a TV monitor."
            },
            {
                num: "05",
                label: "[ES] Offline Resilience",
                heading: "[ES] Unstable Connections Cannot Interrupt Therapy",
                body: "[ES] If a patient's internet drops for 10 seconds during an exercise, the session cannot crash. The exercise engine must run entirely on the client side (in the browser), caching the results locally, and syncing back to the server only when the connection is stable. <strong>Continuous gameplay, asynchronous syncing.</strong> This is the only way to guarantee therapy isn't interrupted by household wi-fi issues."
            }
        ]
    }
};

export default function Observations() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="observations">
            <div className="obs-header">
                <div className="left">
                    <ScrollReveal delay={0}>
                        <div className="section-tag">{t.tag}</div>
                        <h2 className="section-title">
                            {t.titlePart1}<br />{t.titlePart2}
                        </h2>
                    </ScrollReveal>
                </div>
                <ScrollReveal delay={160} className="right">
                    {t.desc}
                </ScrollReveal>
            </div>

            <div className="obs-list">
                {t.items.map((item, index) => (
                    <ScrollReveal key={index} delay={(index % 4) * 80 + 240} className="obs-item">
                        <div className="obs-num">{item.num}</div>
                        <div className="obs-heading">
                            <span>{item.label}</span>
                            {item.heading}
                        </div>
                        <div className="obs-body" dangerouslySetInnerHTML={{ __html: item.body }} />
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
