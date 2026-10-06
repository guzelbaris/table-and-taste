import { useState } from "react";

type RestaurantImageProps = {
  file: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function RestaurantImage({
  file,
  alt,
  className = "",
  priority = false,
}: RestaurantImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`restaurant-image image-placeholder ${className}`}
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        aria-hidden={alt ? undefined : true}
      >
        <span aria-hidden="true">BARΙŞ</span>
      </div>
    );
  }

  return (
    <img
      className={`restaurant-image ${className}`}
      src={`${import.meta.env.BASE_URL}images/turkish/${file}`}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}