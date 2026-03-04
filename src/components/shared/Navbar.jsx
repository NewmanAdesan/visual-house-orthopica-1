import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();

    const toggleNav = () => setIsOpen(!isOpen);

    const handleScroll = (e, id) => {
        e.preventDefault();
        setIsOpen(false);

        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navText = {
        en: {
            understanding: "Understanding",
            observations: "Observations",
            architecture: "Architecture",
            team: "Team",
            viewStories: "Full User Stories & Criteria",
            logo: "Visual House"
        },
        es: {
            understanding: "Comprensión",
            observations: "Observaciones",
            architecture: "Arquitectura",
            team: "Equipo",
            viewStories: "Historias de Usuario y Criterios Completos",
            logo: "Visual House"
        }
    };

    const t = navText[language];

    return (
        <nav>
            <div className="nav-logo">{t.logo}</div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#understanding" onClick={(e) => handleScroll(e, 'understanding')}>{t.understanding}</a></li>
                <li><a href="#observations" onClick={(e) => handleScroll(e, 'observations')}>{t.observations}</a></li>
                <li><a href="#architecture" onClick={(e) => handleScroll(e, 'architecture')}>{t.architecture}</a></li>
                <li><a href="#team" onClick={(e) => handleScroll(e, 'team')}>{t.team}</a></li>
                <li><Link to="/user-stories" onClick={() => setIsOpen(false)}>{t.viewStories}</Link></li>
                <li><LanguageToggle /></li>
            </ul>

            <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
                <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                <span style={{ opacity: isOpen ? 0 : 1 }}></span>
                <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
            </div>
        </nav>
    );
}
