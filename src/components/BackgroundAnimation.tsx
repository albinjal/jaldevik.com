import { useEffect, useRef } from 'react';

interface FloatingElement {
  content: string;
  opacity: number;
  size: number;
  type: 'equation' | 'sailboat';
  vx: number;
  vy: number;
  x: number;
  y: number;
}

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const elementsRef = useRef<FloatingElement[]>([]);

  const equations = [
    '∫ f(x)dx',
    'Σ(xi - μ)²',
    '∂f/∂x',
    'E[X]',
    'P(A|B)',
    'lim x→∞',
    'α + β',
    '∇f',
    'θ̂',
    'σ²',
    'ρ(X,Y)',
    'Δt',
  ];

  const sailboat = '⛵';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initElements = () => {
      elementsRef.current = [];

      // Add equations
      for (let i = 0; i < 15; i++) {
        elementsRef.current.push({
          content: equations[Math.floor(Math.random() * equations.length)],
          opacity: 0.03 + Math.random() * 0.07,
          size: 12 + Math.random() * 8,
          type: 'equation',
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        });
      }

      // Add sailboats
      for (let i = 0; i < 3; i++) {
        elementsRef.current.push({
          content: sailboat,
          opacity: 0.08 + Math.random() * 0.07,
          size: 16 + Math.random() * 12,
          type: 'sailboat',
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elementsRef.current.forEach((element) => {
        // Mouse interaction - subtle attraction/repulsion
        const dx = mousePos.current.x - element.x;
        const dy = mousePos.current.y - element.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 200;
          const angle = Math.atan2(dy, dx);

          // Equations are repelled, sailboats are attracted
          const multiplier = element.type === 'equation' ? -0.002 : 0.001;
          element.vx += Math.cos(angle) * force * multiplier;
          element.vy += Math.sin(angle) * force * multiplier;
        }

        // Update position
        element.x += element.vx;
        element.y += element.vy;

        // Bounce off edges
        if (element.x < 0 || element.x > canvas.width) {
          element.vx *= -1;
        }
        if (element.y < 0 || element.y > canvas.height) {
          element.vy *= -1;
        }

        // Keep within bounds
        element.x = Math.max(0, Math.min(canvas.width, element.x));
        element.y = Math.max(0, Math.min(canvas.height, element.y));

        // Damping
        element.vx *= 0.99;
        element.vy *= 0.99;

        // Draw element
        ctx.save();
        ctx.globalAlpha = element.opacity;
        ctx.font = `${element.size}px system-ui, -apple-system, sans-serif`;
        ctx.fillStyle =
          element.type === 'equation' ? 'currentColor' : '#fca311';
        ctx.textAlign = 'center';
        ctx.fillText(element.content, element.x, element.y);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initElements();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initElements();
    });
    window.addEventListener('mousemove', handleMouseMove);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      className="pointer-events-none fixed inset-0 z-0 opacity-30 dark:opacity-20"
      ref={canvasRef}
      style={{ color: 'var(--muted-foreground)', filter: 'blur(0.5px)' }}
    />
  );
}
