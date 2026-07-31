"use client";

interface ImageWithWatermarkProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

export default function ImageWithWatermark({
  src,
  alt,
  className = "",
  priority = false,
  loading = "lazy",
}: ImageWithWatermarkProps) {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : loading}
      />
      <div className="absolute bottom-3 right-3 opacity-50 pointer-events-none">
        <img
          src="/images/branding/logo-assion-icon.jpg"
          alt="ASSION"
          className="rounded-full"
          style={{
            width: "32px",
            height: "32px",
          }}
        />
      </div>
    </div>
  );
}
