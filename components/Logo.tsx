"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "full" | "icon";
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Logo({
  variant = "full",
  className = "",
  width,
  height,
  priority = false,
}: LogoProps) {
  const logoSrc = variant === "full"
    ? "/images/branding/logo-assion.jpg"
    : "/images/branding/logo-assion.jpg";

  const altText = variant === "full"
    ? "ASSION - Association de Soutien aux Orphelins, Veuves et Nécessiteux"
    : "ASSION";

  // Dimensions par défaut selon la variante
  const defaultWidth = variant === "full" ? 200 : 40;
  const defaultHeight = variant === "full" ? 80 : 40;

  return (
    <Image
      src={logoSrc}
      alt={altText}
      width={width || defaultWidth}
      height={height || defaultHeight}
      className={className}
      priority={priority}
      style={{
        objectFit: "contain",
        width: width ? "auto" : undefined,
        height: height ? "auto" : undefined,
      }}
    />
  );
}
