import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.15 }
        );

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
            ref={domRef}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
