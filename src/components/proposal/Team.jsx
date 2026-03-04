import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './Team.css';

const content = {
    en: {
        tag: "07 — Team & Approach",
        titlePart1: "Who We Are and",
        titlePart2: "How We Work",
        members: [
            {
                role: "Web Solutions Strategist & Frontend Lead",
                name: "[Your Name]",
                desc: "Background in AI/ML foundations, frontend engineering, and business analysis. Does not build what he is told — diagnoses the real problem first, then designs and builds the solution. Approaches every project by understanding how the business actually operates before writing a line of code. Specializes in complex frontend systems, real-time rendering, and translating business requirements into technical architecture.",
                skills: ["React", "HTML5 Canvas", "Node.js", "AI/ML", "Business Analysis"],
                isDark: false
            },
            {
                role: "Project Lead & Business Development",
                name: "[Friend's Name]",
                desc: "Background and credentials to be completed by [Friend's Name].",
                skills: [],
                isDark: true
            }
        ]
    },
    es: {
        tag: "[ES] 07 — Team & Approach",
        titlePart1: "[ES] Who We Are and",
        titlePart2: "[ES] How We Work",
        members: [
            {
                role: "[ES] Web Solutions Strategist & Frontend Lead",
                name: "[Your Name]",
                desc: "[ES] Background in AI/ML foundations, frontend engineering, and business analysis. Does not build what he is told — diagnoses the real problem first, then designs and builds the solution. Approaches every project by understanding how the business actually operates before writing a line of code. Specializes in complex frontend systems, real-time rendering, and translating business requirements into technical architecture.",
                skills: ["[ES] React", "[ES] HTML5 Canvas", "[ES] Node.js", "[ES] AI/ML", "[ES] Business Analysis"],
                isDark: false
            },
            {
                role: "[ES] Project Lead & Business Development",
                name: "[Friend's Name]",
                desc: "[ES] Background and credentials to be completed by [Friend's Name].",
                skills: [],
                isDark: true
            }
        ]
    }
};

export default function Team() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="team">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>

            <div className="team-grid">
                {t.members.map((member, index) => (
                    <ScrollReveal key={index} delay={index * 80 + 160} className={`team-card ${member.isDark ? 'dark' : ''}`}>
                        <div className="team-role">{member.role}</div>
                        <div className="team-name">{member.name}</div>
                        <p className="team-desc">{member.desc}</p>
                        {member.skills.length > 0 && (
                            <div className="team-skills">
                                {member.skills.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        )}
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
