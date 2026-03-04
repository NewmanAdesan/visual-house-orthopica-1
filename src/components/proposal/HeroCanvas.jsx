import React, { useRef, useEffect } from 'react';

const HeroCanvas = React.memo(() => {
    const canvasRef = useRef(null);
    const animId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let hw, hh;
        let ht = 0;

        const dots = [
            { x: 0.2, y: 0.5, tx: 0.8, ty: 0.5, speed: 0.004, r: 4, type: 'saccade' },
            { x: 0.5, y: 0.3, tx: 0.5, ty: 0.7, speed: 0.002, r: 3, type: 'tracking' },
            { x: 0.1, y: 0.2, tx: 0.9, ty: 0.8, speed: 0.003, r: 2, type: 'saccade' },
        ];

        function resizeHero() {
            hw = canvas.width = canvas.offsetWidth;
            hh = canvas.height = canvas.offsetHeight;
        }

        let resizeTimeout;
        function handleResize() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeHero, 100);
        }

        resizeHero();
        window.addEventListener('resize', handleResize);

        function drawHero() {
            ctx.clearRect(0, 0, hw, hh);
            ht += 0.008;

            dots.forEach((d, i) => {
                let px, py;
                if (d.type === 'saccade') {
                    const progress = (Math.sin(ht * d.speed * 300 + i) + 1) / 2;
                    px = (d.x + (d.tx - d.x) * progress) * hw;
                    py = (d.y + (d.ty - d.y) * progress) * hh;
                } else {
                    px = (0.2 + Math.sin(ht * 0.5 + i) * 0.3 + 0.3) * hw;
                    py = (d.y + Math.sin(ht * 0.3 + i * 2) * 0.15) * hh;
                }
                ctx.beginPath();
                ctx.arc(px, py, d.r * 8, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 201, 177, 0.03)';
                ctx.fill();

                ctx.beginPath();
                ctx.arc(px, py, d.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 201, 177, 0.7)';
                ctx.fill();

                ctx.strokeStyle = 'rgba(0, 201, 177, 0.2)';
                ctx.lineWidth = 0.5;

                ctx.beginPath();
                ctx.moveTo(px - 20, py); ctx.lineTo(px + 20, py);
                ctx.moveTo(px, py - 20); ctx.lineTo(px, py + 20);
                ctx.stroke();
            });

            ctx.strokeStyle = 'rgba(0, 201, 177, 0.04)';
            ctx.lineWidth = 1;
            for (let x = 0; x < hw; x += 80) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, hh); ctx.stroke();
            }
            for (let y = 0; y < hh; y += 80) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(hw, y); ctx.stroke();
            }

            animId.current = requestAnimationFrame(drawHero);
        }

        drawHero();

        return () => {
            if (animId.current) cancelAnimationFrame(animId.current);
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return <canvas ref={canvasRef} id="heroCanvas" />;
});

export default HeroCanvas;
