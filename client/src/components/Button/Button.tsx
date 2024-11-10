import { useNavigate } from "react-router-dom";

type ButtonProps = {
  name: string;
  path: string;
  variant: number;
};

const Button = ({ name, path, variant }: ButtonProps) => {
  const nav = useNavigate();

  return (
    <button
      className={variant == 1 ? "btn-1" : "btn-2"}
      onClick={() => nav(path)}
    >
      {name}
    </button>
  );
};

export default Button;
