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

    // Clear canvas
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw product outline
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

    // Draw uploaded image if exists
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

    // Draw text
    if (text) {
      ctx.fillStyle = '#000000';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const lines = text.split('\n');
      const lineHeight = 30;
      const startY = (canvas.height - (lines.length - 1) * lineHeight) / 2;
      
      lines.forEach((line, i) => {
        ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
      });
    }
  }, [product, color, text, image]);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={500}
      className="w-full border border-gray-200 rounded-lg"
    />
  );
}