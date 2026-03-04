import React, { useRef, useEffect } from 'react';

const ClosingCanvas = React.memo(() => {
    const canvasRef = useRef(null);
    const animId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let cw, ch;

        function resizeClosing() {
            cw = canvas.width = canvas.offsetWidth;
            ch = canvas.height = canvas.offsetHeight;
        }

        let resizeTimeout;
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeClosing, 100);
        }

        resizeClosing();
        window.addEventListener('resize', handleResize);

        let ct = 0;
        function drawClosing() {
            ctx.clearRect(0, 0, cw, ch);
            ct += 0.005;

            ctx.strokeStyle = 'rgba(0, 201, 177, 0.04)';
            ctx.lineWidth = 1;

            for (let i = 0; i < ch; i += 40) {
                ctx.beginPath();
                for (let j = 0; j <= cw; j += 20) {
                    const wave1 = Math.sin(j * 0.005 + ct) * 20;
                    const wave2 = Math.cos(j * 0.002 - ct * 1.5) * 30;
                    const depth = Math.sin(i * 0.01 + ct) * 10;

                    const distToCenter = Math.abs(j - cw / 2) / (cw / 2);
                    const amp = 1 - distToCenter * 0.5;

                    const y = i + (wave1 + wave2 + depth) * amp;

                    if (j === 0) ctx.moveTo(j, y);
                    else ctx.lineTo(j, y);
                }
                ctx.stroke();
            }
            animId.current = requestAnimationFrame(drawClosing);
        }

        drawClosing();

        return () => {
            if (animId.current) cancelAnimationFrame(animId.current);
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return <canvas ref={canvasRef} />;
});

export default ClosingCanvas;
