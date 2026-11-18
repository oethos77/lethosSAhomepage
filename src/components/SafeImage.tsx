import { useState } from "react";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className,
  fallbackTitle,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex flex-col items-center justify-center gap-3 bg-surface-accent-gradient p-6 text-center",
          className
        )}
      >
        <div className="flex size-12 items-center justify-center rounded-xl border-hairline-accent bg-surface-elevated text-primary-text">
          <Layers className="size-5" aria-hidden="true" />
        </div>
        <span className="max-w-xs text-sm font-medium text-silver">
          {fallbackTitle ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}
