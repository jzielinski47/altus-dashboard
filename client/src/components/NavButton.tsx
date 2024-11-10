import { useNavigate } from "react-router-dom";

type NavButtonProps = {
  name: string;
  path: string;
  variant: 1 | 2;
};

const baseStyles =
  "inline-flex items-center px-8 py-3 text-sm font-medium transition-all focus:outline-none";

const variants = {
  1: "group relative overflow-hidden rounded bg-indigo-600 text-white focus:ring active:bg-indigo-500",
  2: "text-neutral-400 hover:bg-neutral-200/20",
} as const;

const NavButton = ({ name, path, variant }: NavButtonProps) => {
  const nav = useNavigate();

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={() => nav(path)}
    >
      <span>{name}</span>

      <span
        className={
          variant === 1
            ? "absolute -end-full transition-all group-hover:end-4" // Only arrow moves in variant 1
            : "ml-2 transition-transform transform group-hover:translate-x-1"
        }
      >
        <svg
          className={`${variant === 1 ? "size-5 rtl:rotate-180" : "w-5 h-5"}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    </button>
  );
};

export default NavButton;
