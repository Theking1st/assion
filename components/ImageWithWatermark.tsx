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
    <div className="relative w-full h-full">
      <img
        src={src}
        alt={alt}
        className={className}
        loading={priority ? "eager" : loading}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-black/20 rounded-full p-1 backdrop-blur-[1px]">
          <img
            src="/images/branding/logo-assion.jpg"
            alt="ASSION"
            className="rounded-full"
            style={{
              width: "64px",
              height: "64px",
              opacity: "0.4",
            }}
          />
        </div>
      </div>
    </div>
  );
}
