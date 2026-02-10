"use client";

import { useEffect, useRef } from "react";

interface SecureImageProps {
  src: string;
  alt: string;
  className?: string;
  blur?: boolean; // Para aplicar um blur extra nos pixels se quiser
}

export default function SecureImage({ src, className }: SecureImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous"; // Importante para imagens externas
    img.src = src;

    img.onload = () => {
      // Ajusta o tamanho do canvas para a resolução real da imagem
      // mas o CSS vai controlar o tamanho visual na tela
      canvas.width = img.width;
      canvas.height = img.height;

      // Desenha a imagem
      ctx.drawImage(img, 0, 0);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      // Bloqueia menu de contexto (botão direito -> salvar imagem)
      onContextMenu={(e) => e.preventDefault()}
      // Desabilita arrastar a imagem
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    />
  );
}
