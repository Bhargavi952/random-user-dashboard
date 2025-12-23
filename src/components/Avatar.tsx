import { useEffect, useState } from "react";
import { AVATAR_COLORS } from "../constants/color";

interface AvatarProps {
  src?: string;
  alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset when image changes
  useEffect(() => {
    setImageLoaded(false);
  }, [src]);

  const firstLetter = alt.charAt(0).toUpperCase();
  const color = AVATAR_COLORS[alt.length % AVATAR_COLORS.length];

  return (
    <div className="relative w-28 h-28 mx-auto mb-4 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-teal-400 blur-lg opacity-40"></div>

      <div className="relative w-24 h-24 rounded-full bg-white p-1">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          {(!src || !imageLoaded) && (
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-full text-white text-3xl font-semibold ${color}`}
            >
              {firstLetter}
            </div>
          )}

          {/* Profile image */}
          {src && (
            <img
              src={src}
              alt={alt}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)}
              className={`w-full h-full object-cover transition-opacity duration-200 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
