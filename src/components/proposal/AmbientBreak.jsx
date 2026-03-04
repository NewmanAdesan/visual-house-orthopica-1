import { useRef, useEffect } from 'react';
import './AmbientBreak.css';

export default function AmbientBreak() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let aw, ah;

        const nodes = [];
        const nodeCount = 40;
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random(),
                y: Math.random(),
                phase: Math.random() * Math.PI * 2,
                speed: 0.005 + Math.random() * 0.01,
                baseR: 1.5 + Math.random() * 1.5,
            });
        }

        let at = 0;

        function resizeAmbient() {
            aw = canvas.width = canvas.offsetWidth;
            ah = canvas.height = canvas.offsetHeight;
        }

        resizeAmbient();
        window.addEventListener('resize', resizeAmbient);

        function drawAmbient() {
            ctx.clearRect(0, 0, aw, ah);
            at += 0.008;

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = (nodes[i].x - nodes[j].x) * aw;
                    const dy = (nodes[i].y - nodes[j].y) * ah;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        const opacity = (1 - dist / 150) * 0.06;
                        ctx.strokeStyle = `rgba(0, 201, 177, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x * aw, nodes[i].y * ah);
                        ctx.lineTo(nodes[j].x * aw, nodes[j].y * ah);
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(n => {
                const pulse = Math.sin(at * 2 + n.phase) * 0.5 + 0.5;
                const r = n.baseR + pulse * 1.5;
                const px = n.x * aw;
                const py = n.y * ah;

                ctx.beginPath();
                ctx.arc(px, py, r * 6, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 201, 177, ${0.02 + pulse * 0.02})`;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(px, py, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 201, 177, ${0.3 + pulse * 0.3})`;
                ctx.fill();

                n.x += Math.sin(at * 0.3 + n.phase) * 0.0001;
                n.y += Math.cos(at * 0.2 + n.phase) * 0.0001;
            });

            animId = requestAnimationFrame(drawAmbient);
        }

        drawAmbient();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resizeAmbient);
        };
    }, []);

    return (
        <div className="ambient-break">
            <canvas ref={canvasRef} />
        </div>
    );
}
