import { useEffect, useState } from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (height <= 0) {
                setWidth(0);
                return;
            }
            const scrolled = (winScroll / height) * 100;
            setWidth(scrolled);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Trigger once on mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div className="progress-bar" style={{ width: `${width}%` }} />;
}
