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
                skills: ["React", "HTML5 Canvas", "Node.js", "AI/ML", "Business Analysis"],
                isDark: false
            },
            {
                role: "Project Lead & Business Development",
                name: "Timilehin",
                desc: "Background and credentials to be completed by Timilehin.",
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
                skills: ["React", "HTML5 Canvas", "Node.js", "IA/ML", "Análisis de Negocios"],
                isDark: false
            },
            {
                role: "Líder de Proyecto & Desarrollo de Negocios",
                name: "Timilehin",
                desc: "Amigo de la casa en Visual House. Entiende los objetivos de su clínica, su forma de trabajar y el impacto que buscan. Facilita que este proyecto no se quede en un intercambio técnico, sino que sume directamente al crecimiento del negocio. Punto de contacto principal, gestión estratégica y alineación de expectativas.",
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
