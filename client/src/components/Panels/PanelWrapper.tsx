import React from "react";

const PanelWrapper: React.FC<{ children: React.ReactNode; variant?: "filled" | "default" }> = ({
  children,
  variant = "default",
}) => {
  const variants = {
    default: "h-min-32 rounded-lg",
    filled: "h-min-32 rounded-lg border border-white/5 bg-white/5 p-6 h-full",
  };

  return <div className={variants[variant]}>{children}</div>;
};

export default PanelWrapper;
