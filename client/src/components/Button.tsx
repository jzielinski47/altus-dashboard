import { useNavigate } from "react-router-dom";

type ButtonProps = {
  name: string;
  path: string;
  variant: number;
};

const variant1: string =
  "inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500";

const variant2: string =
  "group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500";

const Button = ({ name, path, variant }: ButtonProps) => {
  const nav = useNavigate();

  return (
    <button
      className={variant == 1 ? variant1 : variant2}
      onClick={() => nav(path)}
    >
      {variant == 2 ? (
        <>
          <span className="absolute -end-full transition-all group-hover:end-4">
            <svg
              className="size-5 rtl:rotate-180"
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

          <span className="text-sm font-medium transition-all group-hover:me-4">
            {" "}
            {name}{" "}
          </span>
        </>
      ) : (
        <>{name}</>
      )}
    </button>
  );
};

export default Button;
