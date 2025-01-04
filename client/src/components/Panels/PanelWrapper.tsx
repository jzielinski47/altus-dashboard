import React from "react";

const PanelWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="h-min-32 rounded-lg">{children}</div>;
};

export default PanelWrapper;
