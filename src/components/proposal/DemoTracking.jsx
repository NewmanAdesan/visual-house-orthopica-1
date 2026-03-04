import React, { useRef, useEffect } from 'react';
import './DemoTracking.css';

const DemoTracking = React.memo(() => {
    const canvasRef = useRef(null);
    const animId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let tw, th;
        let tt = 0;

        function resizeTracking() {
            tw = canvas.width = canvas.offsetWidth;
            th = canvas.height = canvas.offsetHeight;
        }

        let resizeTimeout;
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeTracking, 100);
        }

        resizeTracking();
        window.addEventListener('resize', handleResize);

        function drawTracking() {
            ctx.clearRect(0, 0, tw, th);
            tt += 0.008;

            const dotX = (0.1 + ((Math.sin(tt * 0.4) + 1) / 2) * 0.8) * tw;
            const dotY = th / 2 + Math.sin(tt * 0.8) * th * 0.08;

            // Trail
            for (let i = 5; i > 0; i--) {
                const trailT = tt - i * 0.015;
                const trailX = (0.1 + ((Math.sin(trailT * 0.4) + 1) / 2) * 0.8) * tw;
                const trailY = th / 2 + Math.sin(trailT * 0.8) * th * 0.08;
                ctx.beginPath();
                ctx.arc(trailX, trailY, 6 - i * 0.8, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 201, 177, ${0.15 - i * 0.025})`;
                ctx.fill();
            }

            // Glow
            const grad = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 40);
            grad.addColorStop(0, 'rgba(0, 201, 177, 0.15)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(dotX - 40, dotY - 40, 80, 80);

            // Main dot
            ctx.beginPath();
            ctx.arc(dotX, dotY, 6, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 201, 177, 0.9)';
            ctx.fill();

            // Guide line
            ctx.strokeStyle = 'rgba(0, 201, 177, 0.06)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(tw * 0.1, th / 2);
            ctx.lineTo(tw * 0.9, th / 2);
            ctx.stroke();

            animId.current = requestAnimationFrame(drawTracking);
        }
        drawTracking();

        return () => {
            if (animId.current) cancelAnimationFrame(animId.current);
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <div className="exercise-demo" id="demoTracking">
            <canvas ref={canvasRef} />
            <div className="demo-label">Smooth Tracking — Exercise Preview</div>
        </div>
    );
});

export default DemoTracking;
