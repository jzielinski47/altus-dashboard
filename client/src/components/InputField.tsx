import React, { ChangeEventHandler, useState } from "react";
import { EmailIcon } from "./Icons/EmailIcon";
import { EyeIcon } from "./Icons/EyeIcon";
import { EyeOffIcon } from "./Icons/EyeOffIcon";

interface InputFieldProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = ({ type = "text", placeholder, className = "", onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        className={`w-full rounded-lg border-border-black bg-black p-4 pe-12 text-sm shadow-sm ${className}`}
        placeholder={placeholder}
        onChange={onChange}
      />

      {type === "password" && (
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </span>
      )}

      {type === "email" && (
        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <EmailIcon />
        </span>
      )}
    </div>
  );
};

export default InputField;
