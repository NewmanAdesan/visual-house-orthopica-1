import React, { useRef, useEffect } from 'react';
import './DemoSaccades.css';

const DemoSaccades = React.memo(() => {
    const canvasRef = useRef(null);
    const animId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let sw, sh;

        const saccadeTargets = [
            { x: 0.2, y: 0.5 },
            { x: 0.8, y: 0.35 },
            { x: 0.5, y: 0.65 },
            { x: 0.3, y: 0.3 },
            { x: 0.7, y: 0.6 },
        ];
        let currentTarget = 0;
        let saccadeDotX = saccadeTargets[0].x;
        let saccadeDotY = saccadeTargets[0].y;
        let saccadeTimer = 0;
        const holdDuration = 90;
        const jumpSpeed = 0.35;

        function resizeSaccades() {
            sw = canvas.width = canvas.offsetWidth;
            sh = canvas.height = canvas.offsetHeight;
        }

        let resizeTimeout;
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeSaccades, 100);
        }

        resizeSaccades();
        window.addEventListener('resize', handleResize);

        function drawSaccades() {
            ctx.clearRect(0, 0, sw, sh);
            saccadeTimer++;

            const targetX = saccadeTargets[currentTarget].x;
            const targetY = saccadeTargets[currentTarget].y;

            saccadeDotX += (targetX - saccadeDotX) * jumpSpeed;
            saccadeDotY += (targetY - saccadeDotY) * jumpSpeed;

            if (saccadeTimer > holdDuration) {
                saccadeTimer = 0;
                currentTarget = (currentTarget + 1) % saccadeTargets.length;
            }

            const px = saccadeDotX * sw;
            const py = saccadeDotY * sh;

            // Target markers
            saccadeTargets.forEach((t) => {
                const tx = t.x * sw;
                const ty = t.y * sh;
                ctx.strokeStyle = 'rgba(0, 201, 177, 0.08)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(tx - 8, ty); ctx.lineTo(tx + 8, ty);
                ctx.moveTo(tx, ty - 8); ctx.lineTo(tx, ty + 8);
                ctx.stroke();
            });

            // Glow
            const grad = ctx.createRadialGradient(px, py, 0, px, py, 50);
            grad.addColorStop(0, 'rgba(0, 201, 177, 0.12)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(px - 50, py - 50, 100, 100);

            // Main dot
            ctx.beginPath();
            ctx.arc(px, py, 7, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 201, 177, 0.9)';
            ctx.fill();

            // Ring
            ctx.beginPath();
            ctx.arc(px, py, 14, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(0, 201, 177, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();

            animId.current = requestAnimationFrame(drawSaccades);
        }

        drawSaccades();

        return () => {
            if (animId.current) cancelAnimationFrame(animId.current);
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <div className="exercise-demo saccades-demo" id="demoSaccades">
            <canvas ref={canvasRef} />
            <div className="demo-label">Saccades — Exercise Preview</div>
        </div>
    );
});

export default DemoSaccades;
