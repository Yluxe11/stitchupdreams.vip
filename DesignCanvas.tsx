import React, { useEffect, useRef } from 'react';

interface DesignCanvasProps {
  product: string;
  color: string;
  text: string;
  image: string | null;
}

export function DesignCanvas({ product, color, text, image }: DesignCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear the canvas
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Apply shadow effect to the product outline
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx.shadowBlur = 0;

    // Draw the uploaded image if it exists
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        const scale = Math.min(
          (canvas.width - 40) / img.width,
          (canvas.height - 40) / img.height
        );
        const width = img.width * scale;
        const height = img.height * scale;
        const x = (canvas.width - width) / 2;
        const y = (canvas.height - height) / 2;
        ctx.drawImage(img, x, y, width, height);
      };
    }

    // Draw custom text with better formatting
    if (text) {
      const lines = text.split('\n');
      const lineHeight = 30;

      ctx.fillStyle = '#000';
      ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const startY = (canvas.height - (lines.length - 1) * lineHeight) / 2;

      lines.forEach((line, i) => {
        ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
      });
    }
  }, [product, color, text, image]);

  return (
    <div className="rounded-lg bg-white shadow-lg overflow-hidden mt-4">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="w-full rounded-lg"
      />
    </div>
  );
}
