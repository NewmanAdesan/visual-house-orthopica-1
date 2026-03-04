import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = React.memo(() => {
    const [isTouch, setIsTouch] = useState(false);
    const cursorRef = useRef(null);
    const ringRef = useRef(null);
    const position = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            setIsTouch(true);
            document.body.style.cursor = 'auto';
            return;
        }

        let requestId;

        const updatePosition = (e) => {
            position.current = { x: e.clientX, y: e.clientY };
            if (!requestId) {
                requestId = requestAnimationFrame(updateDOM);
            }
        };

        const updateDOM = () => {
            if (cursorRef.current && ringRef.current) {
                const transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
                cursorRef.current.style.transform = transform;
                ringRef.current.style.transform = transform;
            }
            requestId = null;
        };

        window.addEventListener('mousemove', updatePosition, { passive: true });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            if (requestId) cancelAnimationFrame(requestId);
        };
    }, []);

    if (isTouch) return null;

    return (
        <>
            <div className="cursor" ref={cursorRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
});

export default CustomCursor;
