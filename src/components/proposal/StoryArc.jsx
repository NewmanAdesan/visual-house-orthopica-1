import { useLanguage } from '../../context/LanguageContext';
import ScrollReveal from '../shared/ScrollReveal';
import './StoryArc.css';

const content = {
    en: {
        tag: "02 — The Journey",
        titlePart1: "From Clinic to Home",
        titlePart2: "And Back",
        sub: "This is how we see your system working — not as a list of features, but as a living experience that connects the clinic to the patient's home and brings the data back to the therapist.",
        stages: [
            {
                num: "Stage 01",
                name: "Assessment",
                html: "The patient visits Visual House in person. The orthoptist evaluates, diagnoses, and registers the patient in the system with their condition — binocular coordination, tracking deficiency, convergence insufficiency. <strong>This step stays human.</strong> The platform does not diagnose. It receives the diagnosis, and everything that follows is built on it."
            },
            {
                num: "Stage 02",
                name: "Prescription",
                html: "The therapist opens the platform and builds a personalized therapy program for this patient. Which exercises, what parameters — speed, size, difficulty — what schedule, how many sessions per week, how long each session. <strong>The treatment plan is clinical. The delivery mechanism is digital.</strong>"
            },
            {
                num: "Stage 03",
                name: "Execution",
                html: "The patient goes home, logs in, and sees today's session. They follow the program. The exercises run on screen. The system records everything — what was completed, what was missed, how long it took, when it happened. <strong>For children, the experience must be simple enough to follow with minimal parent help.</strong> The system does not require decisions from the patient — just participation."
            },
            {
                num: "Stage 04",
                name: "Insight",
                html: "The therapist opens their dashboard and the story is there. Who is this patient, what was the diagnosis, what program are they on, what is the adherence, what is the progress. The therapist reviews, adjusts parameters, progresses or pauses the program, or flags for an in-person reassessment. <strong>The clinical judgment stays with the professional. The platform gives them the information to make that judgment confidently.</strong>"
            }
        ],
        closingHtml: "This cycle repeats. Every session generates data. Every data point informs the next clinical decision. <strong>The system does not replace the therapist — it extends their reach beyond the walls of the clinic.</strong>"
    },
    es: {
        tag: "[ES] 02 — The Journey",
        titlePart1: "[ES] From Clinic to Home",
        titlePart2: "[ES] And Back",
        sub: "[ES] This is how we see your system working — not as a list of features, but as a living experience that connects the clinic to the patient's home and brings the data back to the therapist.",
        stages: [
            {
                num: "[ES] Stage 01",
                name: "[ES] Assessment",
                html: "[ES] The patient visits Visual House in person. The orthoptist evaluates, diagnoses, and registers the patient in the system with their condition — binocular coordination, tracking deficiency, convergence insufficiency. <strong>This step stays human.</strong> The platform does not diagnose. It receives the diagnosis, and everything that follows is built on it."
            },
            {
                num: "[ES] Stage 02",
                name: "[ES] Prescription",
                html: "[ES] The therapist opens the platform and builds a personalized therapy program for this patient. Which exercises, what parameters — speed, size, difficulty — what schedule, how many sessions per week, how long each session. <strong>The treatment plan is clinical. The delivery mechanism is digital.</strong>"
            },
            {
                num: "[ES] Stage 03",
                name: "[ES] Execution",
                html: "[ES] The patient goes home, logs in, and sees today's session. They follow the program. The exercises run on screen. The system records everything — what was completed, what was missed, how long it took, when it happened. <strong>For children, the experience must be simple enough to follow with minimal parent help.</strong> The system does not require decisions from the patient — just participation."
            },
            {
                num: "[ES] Stage 04",
                name: "[ES] Insight",
                html: "[ES] The therapist opens their dashboard and the story is there. Who is this patient, what was the diagnosis, what program are they on, what is the adherence, what is the progress. The therapist reviews, adjusts parameters, progresses or pauses the program, or flags for an in-person reassessment. <strong>The clinical judgment stays with the professional. The platform gives them the information to make that judgment confidently.</strong>"
            }
        ],
        closingHtml: "[ES] This cycle repeats. Every session generates data. Every data point informs the next clinical decision. <strong>The system does not replace the therapist — it extends their reach beyond the walls of the clinic.</strong>"
    }
};

export default function StoryArc() {
    const { language } = useLanguage();
    const t = content[language];

    return (
        <section id="story-arc">
            <ScrollReveal className="section-tag" delay={0}>{t.tag}</ScrollReveal>
            <ScrollReveal delay={80}>
                <h2 className="section-title">
                    {t.titlePart1}<br />{t.titlePart2}
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
                <p className="section-sub">{t.sub}</p>
            </ScrollReveal>

            <div className="arc-stages">
                {t.stages.map((stage, index) => (
                    <ScrollReveal key={index} delay={index * 80 + 240} className="arc-stage">
                        <div className="arc-stage-num">{stage.num}</div>
                        <div className="arc-stage-name">{stage.name}</div>
                        <p dangerouslySetInnerHTML={{ __html: stage.html }} />
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal delay={600} className="arc-closing">
                <p dangerouslySetInnerHTML={{ __html: t.closingHtml }} />
            </ScrollReveal>
        </section>
    );
}
