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
                name: "Newman",
                desc: "Background in AI/ML foundations, frontend engineering, and business analysis. Does not build what he is told — diagnoses the real problem first, then designs and builds the solution. Approaches every project by understanding how the business actually operates before writing a line of code. Specializes in complex frontend systems, real-time rendering, and translating business requirements into technical architecture.",
                skills: ["React", "HTML5 Canvas", "Typescript", "AI/ML", "Business Analysis"],
                isDark: false
            },
            {
                role: "Project Lead & Business Development",
                name: "Vblan Cross",
                desc: "Project Lead and Business Developer with a strong focus on driving strategic growth, managing cross-functional teams, and delivering impactful projects from concept to completion. Skilled in identifying business opportunities, building partnerships, and aligning project execution with organizational goals.",
                skills: [],
                isDark: true
            }
        ]
    },
    es: {
        tag: "07 — Equipo y Enfoque",
        titlePart1: "Quiénes Somos y",
        titlePart2: "Cómo Trabajamos",
        members: [
            {
                role: "Estratega de Soluciones Web & Líder Frontend",
                name: "Newman",
                desc: "Experiencia en fundamentos de IA/ML, ingeniería frontend y análisis de negocios. No construye simplemente lo que se le pide — primero diagnostica el problema real, luego diseña y construye la solución. Aborda cada proyecto entendiendo cómo opera realmente el negocio antes de escribir una línea de código. Se especializa en sistemas frontend complejos, renderizado en tiempo real y en la traducción de requisitos de negocio en arquitectura técnica.",
                skills: ["React", "HTML5 Canvas", "Typescript", "IA/ML", "Análisis de Negocios"],
                isDark: false
            },
            {
                role: "Líder de Proyecto & Desarrollo de Negocios",
                name: "Vblan Cross",
                desc: "Líder de Proyecto y Desarrollo de Negocios con un enfoque sólido en impulsar el crecimiento estratégico, gestionar equipos multidisciplinarios y entregar proyectos de alto impacto desde la conceptualización hasta la ejecución. Especializado en identificar oportunidades de negocio, construir alianzas y alinear la ejecución de proyectos con los objetivos organizacionales.",
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
