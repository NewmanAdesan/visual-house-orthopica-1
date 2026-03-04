import { useEffect, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            setIsTouch(true);
            document.body.style.cursor = 'auto';
            return;
        }

        let requestId;

        const updatePosition = (e) => {
            // Small optimization: instead of state pushing per mouse move directly to DOM, we can use state here since it's simple enough
            // But using transform with frame guarantees smoothness.
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition, { passive: true });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    if (isTouch) return null;

    return (
        <>
            <div
                className="cursor"
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            />
            <div
                className="cursor-ring"
                style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
            />
        </>
    );
}
