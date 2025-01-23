import { lorelei } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";

interface iAvatarProps {
  seed: string;
  onClick?: () => void;
  size?: number;
  variant?: "default" | "rounded";
}

const Avatar = ({ seed, onClick, size = 16, variant = "default" }: iAvatarProps) => {
  const avatarSeed = createAvatar(lorelei, {
    seed,
    flip: true,
    backgroundColor: ["c0aede"],
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: avatarSeed }}
      className={`size-${size.toString()} rounded-${
        variant === "rounded" ? "full" : "lg"
      } transition duration-700 ease-in-out hover:opacity-60 cursor-pointer overflow-hidden `}
      onClick={onClick}
    />
  );
};

export default Avatar;
