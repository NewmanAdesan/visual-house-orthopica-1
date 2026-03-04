import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Questions.css';

const content = {
    en: {
        tag: "04 — Critical Questions",
        titlePart1: "What We Need",
        titlePart2: "To Know",
        sub: "Eight questions that protect this project from costly mid-build surprises. We ask them now so we never have to pause later.",
        groups: [
            {
                title: "Before We Design",
                items: [
                    { n: "01", text: "What does a single vision therapy exercise look like in a real session today? Can we observe one or see a video? We cannot engineer the visual stimulus accurately without seeing it performed clinically." },
                    { n: "02", text: "Do exercises need audio instructions — particularly for child patients running sessions at home without direct supervision?" },
                    { n: "03", text: "What is the current third-party software your therapists use? Understanding what they are accustomed to will directly inform how we design the professional panel." },
                    { n: "04", text: "Is there an existing domain, logo, or brand guidelines — colors, typography — that this platform must align with?" }
                ]
            },
            {
                title: "Before We Build",
                items: [
                    { n: "05", text: "Is there an existing patient database that needs to be migrated, or do all records start fresh in the new system?" },
                    { n: "06", text: "Can you confirm Ley 1581 de 2012 as the applicable data protection regulation? Are there additional healthcare-specific compliance requirements we should account for?" },
                    { n: "07", text: "What is the target go-live date for MVP with real patients? And what is the established budget range for this phase?" },
                    { n: "08", text: "Who is the internal point of contact for clinical validation — who signs off that an exercise is implemented correctly from a therapeutic standpoint?" }
                ]
            }
        ]
    },
    es: {
        tag: "[ES] 04 — Critical Questions",
        titlePart1: "[ES] What We Need",
        titlePart2: "[ES] To Know",
        sub: "[ES] Eight questions that protect this project from costly mid-build surprises. We ask them now so we never have to pause later.",
        groups: [
            {
                title: "[ES] Before We Design",
                items: [
                    { n: "01", text: "[ES] What does a single vision therapy exercise look like in a real session today? Can we observe one or see a video? We cannot engineer the visual stimulus accurately without seeing it performed clinically." },
                    { n: "02", text: "[ES] Do exercises need audio instructions — particularly for child patients running sessions at home without direct supervision?" },
                    { n: "03", text: "[ES] What is the current third-party software your therapists use? Understanding what they are accustomed to will directly inform how we design the professional panel." },
                    { n: "04", text: "[ES] Is there an existing domain, logo, or brand guidelines — colors, typography — that this platform must align with?" }
                ]
            },
            {
                title: "[ES] Before We Build",
                items: [
                    { n: "05", text: "[ES] Is there an existing patient database that needs to be migrated, or do all records start fresh in the new system?" },
                    { n: "06", text: "[ES] Can you confirm Ley 1581 de 2012 as the applicable data protection regulation? Are there additional healthcare-specific compliance requirements we should account for?" },
                    { n: "07", text: "[ES] What is the target go-live date for MVP with real patients? And what is the established budget range for this phase?" },
                    { n: "08", text: "[ES] Who is the internal point of contact for clinical validation — who signs off that an exercise is implemented correctly from a therapeutic standpoint?" }
                ]
            }
        ]
    }
};

export default function Questions() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="questions">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={160} className="section-sub">
                <p>{t.sub}</p>
            </ScrollReveal>

            <div className="q-groups">
                {t.groups.map((group, groupIndex) => (
                    <ScrollReveal key={groupIndex} delay={groupIndex * 80 + 240} className="q-group">
                        <div className="q-group-title">{group.title}</div>
                        {group.items.map((item, itemIndex) => (
                            <div className="q-item" key={itemIndex}>
                                <span className="q-n">{item.n}</span>
                                <span className="q-text">{item.text}</span>
                            </div>
                        ))}
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
