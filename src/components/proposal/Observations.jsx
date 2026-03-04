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
                label: "Compliance Risk",
                heading: "Sensitive Health Data From Day One",
                body: "Basic medical history means data protection compliance — including <strong>Ley 1581 de 2012</strong> (Colombian personal data protection) — is not a Phase 2 concern. Role-based authentication, encryption, audit trails, and daily backups must be architected into the foundation from day one, not bolted on later at higher cost. <strong>Compliance is not a phase. It is a foundation.</strong>"
            },
            {
                num: "04",
                label: "Strategic Intent",
                heading: "\"Web PC Only, Chrome\" Is Clinically Intentional",
                body: "This is not a technical limitation. This is a deliberate constraint that protects the precision of your exercise rendering. Visual therapy stimuli require <strong>consistent, predictable screen behavior</strong>. We will build for this constraint deliberately — not treat it as something to work around in a future phase."
            },
            {
                num: "05",
                label: "Future Architecture",
                heading: "The Licensing Ambition Changes How We Build Now",
                body: "You mentioned future licensing to other healthcare providers and expansion to other countries. This has architectural implications now — even at MVP. A system built only for Visual House today may need costly restructuring to support multiple providers tomorrow. <strong>We raise this now so the architecture decision is made consciously — not discovered painfully after launch.</strong>"
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
                label: "[ES] Compliance Risk",
                heading: "[ES] Sensitive Health Data From Day One",
                body: "[ES] Basic medical history means data protection compliance — including <strong>Ley 1581 de 2012</strong> (Colombian personal data protection) — is not a Phase 2 concern. Role-based authentication, encryption, audit trails, and daily backups must be architected into the foundation from day one, not bolted on later at higher cost. <strong>Compliance is not a phase. It is a foundation.</strong>"
            },
            {
                num: "04",
                label: "[ES] Strategic Intent",
                heading: "[ES] \"Web PC Only, Chrome\" Is Clinically Intentional",
                body: "[ES] This is not a technical limitation. This is a deliberate constraint that protects the precision of your exercise rendering. Visual therapy stimuli require <strong>consistent, predictable screen behavior</strong>. We will build for this constraint deliberately — not treat it as something to work around in a future phase."
            },
            {
                num: "05",
                label: "[ES] Future Architecture",
                heading: "[ES] The Licensing Ambition Changes How We Build Now",
                body: "[ES] You mentioned future licensing to other healthcare providers and expansion to other countries. This has architectural implications now — even at MVP. A system built only for Visual House today may need costly restructuring to support multiple providers tomorrow. <strong>We raise this now so the architecture decision is made consciously — not discovered painfully after launch.</strong>"
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
