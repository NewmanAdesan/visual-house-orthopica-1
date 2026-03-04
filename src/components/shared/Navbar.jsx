import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import './Navbar.css';

export default function Navbar({ page }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNav = () => setIsOpen(!isOpen);

    const handleScroll = (e, id) => {
        e.preventDefault();
        setIsOpen(false);

        if (page !== 'proposal') {
            window.location.href = `/#${id}`;
            return;
        }

        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav>
            <div className="nav-logo">Visual House</div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                {page === 'proposal' ? (
                    <>
                        <li><a href="#understanding" onClick={(e) => handleScroll(e, 'understanding')}>Understanding</a></li>
                        <li><a href="#observations" onClick={(e) => handleScroll(e, 'observations')}>Observations</a></li>
                        <li><a href="#architecture" onClick={(e) => handleScroll(e, 'architecture')}>Architecture</a></li>
                        <li><a href="#team" onClick={(e) => handleScroll(e, 'team')}>Team</a></li>
                        <li><LanguageToggle /></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/" onClick={() => setIsOpen(false)}>Back to Proposal</Link></li>
                        <li><LanguageToggle /></li>
                    </>
                )}
            </ul>

            <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
                <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                <span style={{ opacity: isOpen ? 0 : 1 }}></span>
                <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
            </div>
        </nav>
    );
}
